<template>
  <div class="eligibility-filter padding-left-205">
    <div v-if="mergedCriterion.type === 'boolean'" :key="mergedCriterion.key" class="usa-checkbox margin-y-205">
      <input :id="'filter-' + filterGroupKey + '-' + mergedCriterion.key"
        class="usa-checkbox__input usa-checkbox__input" type="checkbox"
        :name="filterGroupKey + '-' + mergedCriterion.key" :value="mergedCriterion.key" :data-section="filterGroupKey"
        :checked="!!mergedCriterion.value" @change="updateEligibilityFilter" />
      <label class="usa-checkbox__label" :for="'filter-' + filterGroupKey + '-' + mergedCriterion.key">{{ mergedCriterion.label }}
        <span v-if="mergedCriterion.help" class="usa-checkbox__label-description">
          {{ mergedCriterion.help }}
        </span>
      </label>
    </div>

    <fieldset v-if="mergedCriterion.type === 'yes/no'" :key="mergedCriterion.key" class="usa-fieldset margin-y-205">
      <legend class="usa-legend">
        {{ mergedCriterion.label }}
        <span v-if="mergedCriterion.help" class="">
          {{ mergedCriterion.help }}
        </span>
      </legend>

      <div class="usa-radio">
        <input
          :id="'completed--questions-radio-' + criterionIndex + '-yes'"
          :checked="answers[mergedCriterion.key] === true"
          class="usa-radio__input"
          type="radio"
          @click="addAnswer(mergedCriterion.key, true)" />
        <label
          class="usa-radio__label"
          :for="'completed--questions-radio-' + criterionIndex + '-yes'">Yes</label>
      </div>
      <div class="usa-radio">
        <input
          :id="'completed--questions-radio-' + criterionIndex + '-no'"
          :checked="$store.state.questionGraph.answers[mergedCriterion.key] === false"
          class="usa-radio__input"
          type="radio"
          @click="addAnswer(mergedCriterion.key, false)" />
        <label
          class="usa-radio__label"
          :for="'completed--questions-radio-' + criterionIndex + '-no'">No</label>
      </div>

      <button
            class="usa-button usa-button--unstyled"
            @click="clearAnswer(mergedCriterion.key)">Clear</button>
    </fieldset>

    <div v-if="mergedCriterion.type === 'one-of'" :key="mergedCriterion.key" class="padding-bottom-1 margin-y-3">
      <label class="usa-label text-bold margin-top-0" :for="'filter-' + filterGroupKey + '-' + mergedCriterion.key">{{ mergedCriterion.label }}</label>
      <select :id="'filter-' + filterGroupKey + '-' + mergedCriterion.key" class="usa-select" :name="'filter-' + filterGroupKey + '-' + mergedCriterion.key">
        <option value>- Select -</option>
        <option v-for="option in mergedCriterion.values" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>

      <fieldset v-if="mergedCriterion.type === 'elapsed-time'" :key="mergedCriterion.key" class="usa-fieldset margin-y-3">
      <legend class="usa-legend text-bold">{{ mergedCriterion.label }}</legend>
      <span v-if="mergedCriterion.help" id="dobHint" class="usa-hint">{{ mergedCriterion.help }}</span>
      <div class="usa-memorable-date">
        <div class="usa-form-group usa-form-group--month">
          <label class="usa-label" :for="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_1'">Month</label>
          <input :id="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_1'" class="usa-input usa-input--inline"
            aria-describedby="dobHint"
            :name="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_1'"
            type="text" maxlength="2" pattern="[0-9]*"
            inputmode="numeric" value="">
        </div>
        <div class="usa-form-group usa-form-group--day">
          <label class="usa-label" :for="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_2'">Day</label>
          <input :id="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_2'" class="usa-input usa-input--inline"
            aria-describedby="dobHint"
            :name="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_2'"
            type="text" maxlength="2" pattern="[0-9]*"
            inputmode="numeric" value="">
        </div>
        <div class="usa-form-group usa-form-group--year">
          <label class="usa-label" :for="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_3'">Year</label>
          <input :id="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_3'" class="usa-input usa-input--inline"
            aria-describedby="dobHint"
            :name="'filter-' + filterGroupKey + '-' + mergedCriterion.key + '_3'"
            type="text" minlength="4" maxlength="4"
            pattern="[0-9]*" inputmode="numeric" value="">
        </div>
      </div>
    </fieldset>
    <div v-if="isCriterionActive && criterion.criteria_keys && criterion.criteria_keys.length > 0" class="eligibility-filter__child">
      <template v-for="(childCriterion) in criterion.criteria_keys">
        <filter-child :key="childCriterion.key" :filter-group-key="mergedCriterion.key" :criterion="childCriterion" />
      </template>
    </div>
  </div>
</template>
<script>

import { createNamespacedHelpers } from 'vuex';
const { mapGetters } = createNamespacedHelpers('benefits');
const questionGraphMapState = createNamespacedHelpers('questionGraph').mapState;
export default {
  props: {
    criterion: {
      type: Object,
      default: () => {
        return {
          type: "boolean",
          key: "key_name"
        }
      }
    },
    criterionIndex: {
      type: Number,
      default: 0,
    },
    filterGroupKey: {
      type: String,
      default: "filterGroup"
    }
  },
  computed: {
    ...mapGetters(['getValueByEligibilityKey', 'getCriterionByEligibilityKey']),
    ...questionGraphMapState(['answers']),
    mergedCriterion () {
      return { ...this.criterion, ...this.getCriterionByEligibilityKey(this.criterion.key) }
    },
    isCriterionActive () {
      return false; // this.getValueByEligibilityKey(this.criterion.key);
    }
  },
  methods: {
    addAnswer (questionId, answer) {
      this.$store.commit('questionGraph/addAnswer', {
        questionId,
        answer,
      });
    },
    clearAnswer (questionId) {
      this.$store.commit('questionGraph/clearAnswer', { questionId });
    },
  }
};
</script>
<style type="scss" scoped>

.eligibility-filter__child {
  border-left: 2px solid #dee1e2;
  margin-left: .25rem;
}
</style>
