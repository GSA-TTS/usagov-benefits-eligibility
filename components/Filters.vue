<template>
  <div>
    <template v-for="filterGroup in combinedCriteria">
      <div :id="'filterGroup-' + filterGroup.key" :key="filterGroup.key" class="usa-accordion">
        <h2 class="usa-accordion__heading">
          <button class="usa-accordion__button"
            :aria-expanded="filterGroup.open"
            :aria-controls="'filters-' + filterGroup.key">
            {{ filterGroup.label }}
          </button>
        </h2>
        <div :id="'filters-' + filterGroup.key" class="usa-accordion__content padding-0">
          <template v-for="(criterion, criterionIndex) in filterGroup.criteria_keys">
            <filter-child v-if="!!criterion.label" :key="criterion.key" :filter-group-key="filterGroup.key"
:criterion="criterion"
              :criterion-index="criterionIndex" />
          </template>
        </div>
      </div>
    </template>
  </div>
</template>
<script>

export default {
  props: {
    lifeEventCriteria: {
      type: Array,
      default: () => []
    },
    lifeEventQuestions: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    combinedCriteria () {
      const lifeEventQuestions = this.lifeEventQuestions[0].criteria_keys;
      const mapCriteria = function (criteria) {
        if (Array.isArray(criteria)) {
          for (const c of criteria) {
            mapCriteria(c);
          }
        } else {
          for (let i = 0; i < criteria.criteria_keys.length; i++) {
            const criterion = criteria.criteria_keys[i];
            const questionIndex = lifeEventQuestions.findIndex(q => criterion.key === q.key);
            if (questionIndex !== -1) {
              // console.log(criterion, questionIndex);
              const questions = lifeEventQuestions.splice(questionIndex, 1);
              criteria.criteria_keys.splice(i, 1, questions[0]);
              // console.log(criteria.criteria_keys, lifeEventQuestions);
            }
            if (criterion.criteria_keys) {
              mapCriteria(criterion.criteria_keys)
            }
          }
        }
      };
      mapCriteria(this.lifeEventCriteria);
      // console.log(this.lifeEventCriteria.concat.apply(this.lifeEventCriteria, this.lifeEventQuestions));
      return this.lifeEventCriteria.concat.apply(this.lifeEventCriteria, this.lifeEventQuestions);
    },
  },
  methods: {
  }
};
</script>
<style scoped>
.usa-accordion + .usa-accordion, .usa-accordion + .usa-accordion--bordered {
  margin-top: 1px;
}
</style>
