<template>
  <div>
    <template v-for="filterGroup in lifeEventCriteria">
      <div :id="'filterGroup-' + filterGroup.key" :key="filterGroup.key" class="usa-accordion">
        <h2 class="usa-accordion__heading">
          <button class="usa-accordion__button"
            :aria-expanded="filterGroup.open"
            :aria-controls="'filters-' + filterGroup.key">
            {{ filterGroup.label }}
          </button>
        </h2>
        <div :id="'filters-' + filterGroup.key" class="usa-accordion__content padding-y-0 padding-left-0">
          <template v-for="(criterion, criterionIndex) in filterGroup.criteria_keys">
            <filter-child :key="criterion.key" :filter-group-key="filterGroup.key" :criterion="criterion"
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
    }
  },
  computed: {
  },
  methods: {
  }
};
</script>
