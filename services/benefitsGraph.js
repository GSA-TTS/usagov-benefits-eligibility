const csvjson = require('csvjson');
const { compile } = require('expression-eval');
const { QuestionGraph } = require("./question-graph");

const csvOptions = {
    delimiter: ',', // optional
    quote: '"' // optional
};
function isString (s) {
    return typeof s === "string";
}

const benefitResultsCSV = `done,identifier,provider,agency,name,summary,url
x,verteransHeadstone,Federal Government,Veterans Affairs,Veterans headstone or grave marker,Deceased active-duty service members and veterans may be eligible for a memorial headstone or grave marker.,https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/
`;

const questionsCSV = `identifier,question,type,choices,dependencies
relationship,What is your relationship to the deceased?,multi-choice,"Spouse, Child, Other family member, Personal or official representative",
work,Did the deceased work under Social Security?,yes/no,,
lineOfDuty,Did the deceased die while on active duty?,yes/no,,
serviceInjury,Is the deceased a Veteran who died from a service related injury / illness?,yes/no,,
publicSafetyOfficer,Is the deceased a first responer / public safety officer?,yes/no,,"relationship = spouse, child"
age,What is your age as the survivor?,number,,
dependant,Are you a dependant of the deceased?,yes/no,,relationship = parent
disabled,Are you disabled?,yes/no,,"relationship = spouse, divorced spouse, child"
caringForChild,Are you taking care of a child less than 16 or disabled?,yes/no,,"relationship = spouse, divorced spouse, parent to child"
unmarried,Are you unmarried?,yes/no,,"relationship = spouse, divorced spouse, parent to child, child"
married10Years,Did your marriage last for at least 10 years?,yes/no,,relationship = divorced spouse
fullTimeStudent,Are you a full time student?,yes/no,,relationship = child; age = 18-19
noSurvivingSpouse,Is there no surviving spouse?,yes/no,,relationship = child
disabledBefore18,Were you disabled before 18?,yes/no,,"relationship = child; age >= 18; deceased = veteran, service member"
disabledBefore22,Were you disabled before 22?,yes/no,,relationship = child; age >=19
studentAtVASchool,Are you a student at a VA approved school,yes/no,,relationship = child; age = 18-23; deceased = veteran
higherEducation,Are you enrolled in higher education?,yes/no,,relationship = child; age = 18-23; deceased = service member
survivingSpouseDIC,Is surviving spouse receiving DIC benefits?,yes/no,,"relationship = child; age <18, 18-23 (higher education = yes); unmarried = yes; deceased = veteran, service member; "
serviceMember,Is the deceased was an active service member?,yes/no,,
veteran,"Did the deceased serve in the active military, naval, or air service?",yes/no,,
privateHeadstone,Is the headstone or grave marker privately purchased?,yes/no,,
privateCemetery,Is the deceased burried in a private cemetery?,yes/no,,
honorableDischarge,Was the deceased discharged or released from the service under conditions other than dishonorable?,yes/no,,
unmarkedGrave,Is the deceased buried in an unmarked grave?,yes/no`;

const edgesCSV = `from,to,when
,,
veteran,relationship_veteran,veteran
relationship_veteran,lineOfDuty_relationship_veteran,relationship == 'Spouse' || relationship == 'Child' || relationship == 'Other family member' || relationship == 'Personal or official representative'
lineOfDuty_relationship_veteran,unmarkedGrave_lineOfDuty_relationship_veteran,lineOfDuty
unmarkedGrave_lineOfDuty_relationship_veteran,privateHeadstone_lineOfDuty_relationship_veteran,unmarkedGrave == false
privateHeadstone_lineOfDuty_relationship_veteran,verteransHeadstone,privateHeadstone
,,
lineOfDuty_relationship_veteran,honorableDischarge_lineOfDuty_relationship_veteran,lineOfDuty == false
honorableDischarge_lineOfDuty_relationship_veteran,unmarkedGrave_honorableDischarge_lineOfDuty_relationship_veteran,honorableDischarge
honorableDischarge_lineOfDuty_relationship_veteran,privateHeadstone_honorableDischarge_lineOfDuty_relationship_veteran,unmarkedGrave == false
privateHeadstone_honorableDischarge_lineOfDuty_relationship_veteran,verteransHeadstone,privateHeadstone
,,
honorableDischarge_lineOfDuty_relationship_veteran,privateCemetery_honorableDischarge_lineOfDuty_relationship_veteran,unmarkedGrave == false
privateCemetery_honorableDischarge_lineOfDuty_relationship_veteran,verteransHeadstone,privateCemetery
,,
unmarkedGrave_lineOfDuty_relationship_veteran,privateCemetery_unmarkedGrave_lineOfDuty_relationship_veteran,unmarkedGrave == false
privateCemetery_unmarkedGrave_lineOfDuty_relationship_veteran,verteransHeadstone,privateCemetery
`;

function buildGraph (benefitResultsCSV, questionsCSV, edgesCSV) {
    const benefitJson = isString(benefitResultsCSV) ? csvjson.toObject(benefitResultsCSV, csvOptions) : benefitResultsCSV;
    const questionJson = isString(questionsCSV) ? csvjson.toObject(questionsCSV, csvOptions) : questionsCSV;
    const edgeJson = isString(edgesCSV) ? csvjson.toObject(edgesCSV, csvOptions) : edgesCSV;
    // console.log(benefitJson, questionJson, edgeJson);

    const benefitsGraph = new QuestionGraph();

    for (const result of benefitJson) {
        benefitsGraph.addResult(result.identifier, result);
    }

    for (const question of questionJson) {
        if (question.choices) {
            question.choice = question.choices.split(',').map(s => s.trim());
        }
        benefitsGraph.addQuestion(question.identifier, question);
    }

    for (const edge of edgeJson) {

        const noop = () => { };
        const getCreateNodeFromLabel = (label) => {
            let node = benefitsGraph.nodeMap.get(label);
            let questionId;

            if (!node) {
                questionId = label.split('_')[0];
                // console.log(questionId, 'new quesitons')
                const question = benefitsGraph.questionMap.get(questionId);
                if (question) {
                    node = benefitsGraph.addVertex(label, questionId);
                } else {
                    console.warn(`no node ${label} or question ${questionId} exists`);
                    return {};
                }
            } else if (node.data && isString(node.data)) {
                    questionId = node.data;
            }

            return { node, questionId };
        };

        const from = getCreateNodeFromLabel(edge.from);
        const to = getCreateNodeFromLabel(edge.to);

        // console.log(edge.from, from, edge.to, to)
        if (from.node && to.node) {

            const when = ((from) => {
                const compiled = edge.when && compile(edge.when);

                return (data) => {
                    if (data[from.questionId] != null) {
                        const res = !!(compiled || noop)(data);
                        // console.log(from.node.id, from.questionId, edge, edge.when, res)
                        return res;
                    }
                };
            })(from);

            benefitsGraph.addEdge(edge.from, edge.to, when);
        }
    }

    // console.log('benefitsGraph loaded', benefitsGraph);
    benefitsGraph.finalize();
    return benefitsGraph;
}

const benefitsGraph = buildGraph(benefitResultsCSV, questionsCSV, edgesCSV);

module.exports = {
    questionGraph: benefitsGraph,
    buildGraph,
};
