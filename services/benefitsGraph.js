const csvjson = require('csvjson');
const { compile } = require('expression-eval');
const { QuestionGraph } = require("./questionGraph");

const csvOptions = {
    delimiter: ',', // optional
    quote: '"' // optional
};
function isString (s) {
    return typeof s === "string";
}

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
                questionId = (label || '').split('_')[0];
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

module.exports = {
    buildGraph,
};
