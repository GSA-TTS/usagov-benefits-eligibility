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

const benefitResultsCSV = `done,identifier,provider,agency,name,url
x,parentBenefit,Federal Government,Social Security,Parent's benefits,https://www.ssa.gov/forms/ssa-7.html
x,widowersBenefit,Federal Government,Social Security,Widow(er) or surviving divorced spouse benefits,https://www.ssa.gov/forms/ssa-10.html
x,motherFatherBenefit,Federal Government,Social Security,Mother's or Father's benefits,https://www.ssa.gov/forms/ssa-5.html
x,lumpSumBenefit,Federal Government,Social Security,Lump-Sum Death Benefit,https://www.ssa.gov/forms/ssa-8.html
x,childBenefit,Federal Government,Social Security,Child Benefits,https://www.ssa.gov/forms/ssa-4.html
x,burialAllowance,Federal Government,Veterans Affairs,Burial allowance,https://www.va.gov/burials-memorials/veterans-burial-allowance/
x,burialNationalCemetery,Federal Government,Veterans Affairs,Burial in a national cemetery,https://www.va.gov/burials-memorials/eligibility/
x,verteransHeadstone,Federal Government,Veterans Affairs,Veterans headstone or grave marker,https://www.va.gov/burials-memorials/memorial-items/headstones-markers-medallions/
x,bereavementCounseling,Federal Government,Veterans Affairs,Bereavement counseling,http://www.vetcenter.va.gov/Bereavement_Counseling.asp
x,vaLifeInsurance,Federal Government,Veterans Affairs,VA Life Insurance - SGLI,https://www.va.gov/life-insurance/
x,dependencyIndemnityCompensation,Federal Government,Veterans Affairs,VA Dependency and Indemnity Compensation,https://www.va.gov/disability/dependency-indemnity-compensation/
x,survivorsPension,Federal Government,Veterans Affairs,Survivors Pension,https://www.va.gov/pension/survivors-pension/
x,healthCareBenefit,Federal Government,Veterans Affairs,Health care benefits,https://www.va.gov/health-care/family-caregiver-benefits/
x,educationalBenefit,Federal Government,Veterans Affairs,Educational benefits,https://www.va.gov/education/survivor-dependent-benefits/
x,homeLoan,Federal Government,Veterans Affairs,Home Loans,https://www.va.gov/housing-assistance/home-loans/surviving-spouse/
x,monthOfDeath,Federal Government,Veterans Affairs,Veterans Month of Death Benefits,https://www.benefits.va.gov/BENEFITS/docs/VASurvivorsKit.pdf
,groupLifeInsurance,Federal Government,Veterans Affairs,VA Family Servicemembers’ Group Life Insurance,
,financialCounseling,Federal Government,Veterans Affairs,Beneficiary financial counseling services,
,publicSafetyOfficerBenefitsDeath,Federal Government,Bureau of Justice Assitance,Public Safety Officers' Benefits - Death,https://psob.bja.ojp.gov/benefits/
,publicSafetyOfficerBenefitsEducation,Federal Government,Bureau of Justice Assitance,Public Safety Officers' Benefits - Education,https://psob.bja.ojp.gov/benefits/
,dodHomeownerAssistanceProgram,Federal Government,Department of Defense,DOD Homeowners Assistance Program,https://www.usace.army.mil/Missions/Military-Missions/Real-Estate/HAP/
,dodSurvivorBenefitPlan,Federal Government,Department of Defense,DOD Survivor Benefit Plan,https://militarypay.defense.gov/Benefits/Survivor-Benefit-Program/
,dodDeathGratuity,Federal Government,Department of Defense,DOD Death Gratuity,https://militarypay.defense.gov/Benefits/Death-Gratuity/
x,dojDeathBenefit,Federal Government,DOJ - Bureau of Justice Assistance,PSOB - Death Benefits,https://psob.bja.ojp.gov/benefits/
x,dojEducationBenefit,Federal Government,DOJ - Bureau of Justice Assistance,PSOB Education Benefits,https://psob.bja.ojp.gov/PSOB_Education2018.pdf`;

const questionsCSV = `identifier,question,type,choices,dependencies
relationship,What is your relationship to the deceased?,multi-choice,"Parent, Spouse, Divorced Spouse, Parent to Child of the deceased, Child, Dependent non-biological child",
work,Was the deceased ever have a job?,yes/no,,
lineOfDuty,Is the deceased a Service Member who died in the line of duty?,yes/no,,
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
veteran,Is the deceased a Veteran?,yes/no,,`;

const edgesCSV = `from,to,when
,,
work,relationship_work,work
veteran,relationship_veteran,veteran
serviceMember,relationship_serviceMember,serviceMember
,,
relationship_work,age_parent_work,relationship['Parent'] 
age_parent_work,dependant_over62_parent_work,age > 62
dependant_over62_parent_work,parentBenefit,dependant
,,
relationship_work,age_spouse_work,relationship['Spouse'] 
age_spouse_work,widowersBenefit,age >= 60
age_spouse_work,disabled_59-50_spouse_work,age < 60 && age >= 50
disabled_59-50_spouse_work,widowersBenefit,disabled
relationship_work,age_divorcedSpouse,relationship['Divorced Spouse']
age_divorcedSpouse,married10Years,age >= 60
married10Years,widowersBenefit,married10Years
age_divorcedSpouse,disabled_59-50_divorcedSpouse,age < 60 && age >= 50
disabled_59-50_divorcedSpouse,married10Years,disabled
,,
relationship_work,caringForChild_work,relationship['Spouse'] || relationship['Divorced Spouse'] ||  relationship['Parent to Child of the deceased']
caringForChild_work,unmarried_caringForChild_work,caringForChild
unmarried_caringForChild_work,motherFatherBenefit,unmarried
,,
relationship_work,publicSafetyOfficer_spouse_work,relationship['Spouse'] 
publicSafetyOfficer_spouse_work,dojEducationBenefit,publicSafetyOfficer
publicSafetyOfficer_spouse_work,dojDeathBenefit,publicSafetyOfficer
relationship_work,publicSafetyOfficer_child_work,relationship['Child'] || relationship['Dependent non-biological child']
publicSafetyOfficer_child_work,dojEducationBenefit,publicSafetyOfficer
relationship_work,age_childDependant_work,relationship['Child'] || relationship['Dependent non-biological child']
age_childDependant_work,publicSafetyOfficer_18_child_work,age <= 18
publicSafetyOfficer_18_child_work,dojDeathBenefit,publicSafetyOfficer
age_childDependant_work,fullTimeStudent_22_child_work,age <= 22
fullTimeStudent_22_child_work,publicSafetyOfficer_student_22_child_work,fullTimeStudent
publicSafetyOfficer_student_22_child_work,dojDeathBenefit,publicSafetyOfficer
,,
relationship_work,lumpSumBenefit,relationship['Spouse'] 
relationship_work,noSurvivingSpouse_child_work,relationship['Child']
noSurvivingSpouse_child_work,lumpSumBenefit,noSurvivingSpouse
,,
relationship_work,age_child_work,relationship['Child']
age_child_work,unmarried_child_work,age < 18
unmarried_child_work,childBenefit,unmarried
age_child_work,fullTimeStudent_18_19_child,age >= 18 && age <= 19
fullTimeStudent_18_19_child,unmarried_child_work,fullTimeStudent
age_child_work,disabledBefore22,age > 19
disabledBefore22,unmarried_child_work,disabledBefore22
,,
veteran,burialAllowance,veteran
veteran,burialNationalCemetery,veteran
veteran,verteransHeadstone,veteran
veteran,bereavementCounseling,veteran
veteran,vaLifeInsurance,veteran
veteran,healthCareBenefit,veteran
,,
relationship_veteran,homeLoan,relationship['Spouse']
relationship_veteran,monthOfDeath,relationship['Spouse']
,,
relationship_veteran,serviceInjury_spouseChild_veteran,relationship['Spouse'] || relationship['Child']
serviceInjury_spouseChild_veteran,educationalBenefit,serviceInjury
,,
relationship_veteran,serviceInjury_parent_veteran,relationship['Parent'] 
serviceInjury_parent_veteran,dependencyIndemnityCompensation,serviceInjury
relationship_veteran,serviceInjury_spouse_veteran,relationship['Spouse'] 
serviceInjury_spouse_veteran,dependencyIndemnityCompensation,serviceInjury
relationship_veteran,age_child_veteran,relationship['Child']
age_child_veteran,unmarried_under18_child_veteran,age < 18
unmarried_under18_child_veteran,survivingSpouseDIC_child_veteran,unmarried
survivingSpouseDIC_child_veteran,serviceInjury_noSurvivingBenefits_child_veteran,!survivingSpouseDIC
serviceInjury_noSurvivingBenefits_child_veteran,dependencyIndemnityCompensation,serviceInjury
age_child_veteran,studentAtVASchool_under23_child_veteran,age < 23
studentAtVASchool_under23_child_veteran,unmarried_studentVA_under23_child_veteran,studentAtVASchool
unmarried_studentVA_under23_child_veteran,survivingSpouseDIC_child_veteran,unmarried
,,
unmarried_under18_child_veteran,survivorsPension,unmarried
unmarried_studentVA_under23_child_veteran,survivorsPension,unmarried
relationship_veteran,unmarried_spouse_veteran,relationship['Spouse'] 
unmarried_spouse_veteran,survivorsPension,unmarried
age_child_veteran,disabledBefore18_over18_child_veteran,age > 18
disabledBefore18_over18_child_veteran,unmarried_disabled_over18_child_veteran,disabledBefore18
unmarried_disabled_over18_child_veteran,survivorsPension,unmarried
age_child_veteran,studentAtVASchool_18-23_child_veteran,age <= 23 && age >=18
studentAtVASchool_18-23_child_veteran,unmarried_student_18-23_child_veteran,studentAtVASchool
unmarried_student_18-23_child_veteran,survivorsPension,unmarried
,,
serviceMember,dodDeathGratuity,serviceMember
serviceMember,bereavementCounseling,serviceMember
serviceMember,vaLifeInsurance,serviceMember
,,
relationship_serviceMember,dodHomeownerAssistanceProgram,relationship['Spouse'] 
relationship_serviceMember,homeLoan,relationship['Spouse'] 
,,
relationship_serviceMember,lineOfDuty_parent_serviceMember,relationship['Parent'] 
lineOfDuty_parent_serviceMember,dependencyIndemnityCompensation,lineOfDuty
relationship_serviceMember,lineOfDuty_spouse_serviceMember,relationship['Spouse'] 
lineOfDuty_spouse_serviceMember,dependencyIndemnityCompensation,lineOfDuty
relationship_serviceMember,age_child_serviceMember,relationship['Child']
age_child_serviceMember,unmarried_under18_child_serviceMember,age < 18
unmarried_under18_child_serviceMember,survivingSpouseDIC_child_serviceMember,unmarried
survivingSpouseDIC_child_serviceMember,lineOfDuty_noSurvivingBenefits_child_serviceMember,!survivingSpouseDIC
lineOfDuty_noSurvivingBenefits_child_serviceMember,dependencyIndemnityCompensation,lineOfDuty
age_child_serviceMember,higherEducation_18-23_child_serviceMember,age <= 23 && age >=18
higherEducation_18-23_child_serviceMember,unmarried_higherEducation_18-23_child_serviceMember,higherEducation
unmarried_higherEducation_18-23_child_serviceMember,survivingSpouseDIC_child_serviceMember,unmarried
,,
lineOfDuty_spouse_serviceMember,educationalBenefit,lineOfDuty
relationship_serviceMember,lineOfDuty_child_serviceMember,relationship['Child']
lineOfDuty_child_serviceMember,educationalBenefit,lineOfDuty
,,
relationship_serviceMember,age_spouse_serviceMember,relationship['Spouse'] 
age_spouse_serviceMember,dodSurvivorBenefitPlan,age >= 55
unmarried_under18_child_serviceMember,dodSurvivorBenefitPlan,unmarried
age_child_serviceMember,disabledBefore18_over18_child_serviceMember,age >= 18
disabledBefore18_over18_child_serviceMember,unmarried_disabled_over18_child_serviceMember,disabledBefore18
unmarried_disabled_over18_child_serviceMember,dodSurvivorBenefitPlan,unmarried
age_child_serviceMember,higherEducation_18-22_child_serviceMember,age <= 22 && age >=18
higherEducation_18-22_child_serviceMember,unmarried_higherEducation_18-22_child_serviceMember,higherEducation
unmarried_higherEducation_18-22_child_serviceMember,dodSurvivorBenefitPlan,unmarried`;

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
