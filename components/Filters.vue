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
      default: /* istanbul ignore next */ () => [],
    },
    lifeEventQuestions: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
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
          /* istanbul ignore next */
          const criteriaList = criteria.criteria_keys ? criteria.criteria_keys : [];
          for (let i = 0; i < criteriaList.length; i++) {
            const criterion = criteriaList[i];
            const questionIndex = lifeEventQuestions.findIndex(q => criterion.key === q.key);
            if (questionIndex !== -1) {
              const questions = lifeEventQuestions.splice(questionIndex, 1);
              criteriaList.splice(i, 1, questions[0]);
            }
          }
        }
      };
      const lifeEventCriteria = Array.isArray(this.lifeEventCriteria) ? this.lifeEventCriteria.slice() : [];
      mapCriteria(lifeEventCriteria);
      return lifeEventCriteria.concat.apply(lifeEventCriteria, this.lifeEventQuestions);
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
