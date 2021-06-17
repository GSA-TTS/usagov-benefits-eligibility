const questionGraph = require('../services/benefitsGraph').questionGraph;

export const state = () => ({
  graph: questionGraph,
  answers: {},
})

export const mutations = {
  addAnswer (state, { questionId, answer }) {
    const newAnswers = { ...state.answers, [questionId]: answer };
    state.answers = newAnswers;
  },
  clearAnswer (state, { questionId }) {
    const newAnswers = { ...state.answers };
    delete newAnswers[questionId];
    state.answers = newAnswers;
  },
}
