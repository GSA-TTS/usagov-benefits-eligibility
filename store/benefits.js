export const state = () => ({
  eligibilityCriteria: [
  ],
})

export const mutations = {

  updateEligibilityFilter (state, criterion) {
    const existsAtIndex = state.eligibilityCriteria.findIndex(item => item.key === criterion.key);
    Object.assign(state.eligibilityCriteria[existsAtIndex], { value: criterion.value });
  }
}
export const getters = {
  getValueByEligibilityKey: state => (key) => {
    return !!state.eligibilityCriteria.find(criterion => criterion.key === key).value;
  },
  getCriterionByEligibilityKey: state => (key) => {
    return state.eligibilityCriteria.find(criterion => criterion.key === key);
  },
  getActiveFilters: (state) => {
    return state.eligibilityCriteria.filter(criterion => criterion.value === true)
  }
}
