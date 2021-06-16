export const state = () => ({
  eligibilityCriteria: [
    {
      key: 'was_veteran',
      label: 'Deceased was a veteran',
      type: 'boolean',
      value: null
    },
    {
      key: 'not_discharged_dishonorably',
      label: 'Discharged honorably',
      help: 'The character of the discharge must be under other than dishonorable conditions, for example: honorable, under honorable conditions, general.',
      type: 'boolean',
      value: null
    },
    {
      key: 'passed_on_active_duty',
      label: 'Deceased passed while on active duty',
      type: 'boolean',
      value: null
    },
    {
      key: 'relationship',
      label: 'Your relationship to deceased',
      type: 'one-of',
      values: ['spouse', 'child', 'parent', 'other'],
      value: null
    },
    {
      key: 'age_in_years',
      label: 'Your date of birth',
      type: 'elapsed-time',
      time_unit: 'years',
      value: null
    },
    {
      key: 'privately_purchased_headstone',
      label: 'Privately purchased headstone or grave marker',
      type: 'boolean',
      value: null
    },
    {
      key: 'date_of_funeral',
      label: 'Date of the deceased’s funeral',
      type: 'elapsed-time',
      time_unit: 'days',
      value: null
    },
    {
      key: 'irrelevant_filter',
      label: 'Irrelevant filter',
      type: 'boolean',
      value: null
    },
    {
      key: 'deceased_veteran_served_forces',
      label: 'Deceased served in',
      type: 'one-of',
      values: ['Army', 'Navy', 'Marines', 'Air Force', 'Coast Guard', 'Space Force'],
      value: null
    }
  ],
  // currentEligibilityCriteria: []
})

export const mutations = {

  // add (state, text) {
  //   state.currentEligibilityCriteria.push({
  //     text,
  //     done: false
  //   })
  // },
  // remove (state, { criterion }) {
  //   state.currentEligibilityCriteria.splice(state.list.indexOf(criterion), 1)
  // },
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
