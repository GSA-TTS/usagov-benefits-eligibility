<template>
  <div class="eligibility-list-container border border-base-lighter border-width-2px radius-md margin-top-4">
    <h3 :class="['margin-0', 'padding-x-2', 'padding-y-1', 'font-sans-md'].concat(headingClasses)">
      {{ $t("eligibilityList.heading") }}
      <span
        v-if="showMatchingCount"
        class="print:display-none">
        ({{ $t("eligibilityList.you_must") }} {{ getTotalEligibleCriteria(benefitEligibilityCriteria) }}
        {{ $t("eligibilityList.of") }} {{ benefitEligibilityCriteria.length }}).
      </span>
    </h3>
    <client-only>
      <ul class="usa-icon-list grid-row padding-x-205 padding-top-205 padding-bottom-1">
        <li
          v-for="criterion in benefitEligibilityCriteria"
          :key="criterion.criteriaKey"
          class="usa-icon-list__item grid-col-6 padding-bottom-2"
          style="padding-top: 0; padding-left: 1.25rem">
          <div
            :class="[
              'usa-icon-list__icon',
              'print:display-none',
              {
                'text-success-dark text-bold': doesCriterionMatchSelection(criterion) === true,
              },
              {
                'text-base': doesCriterionMatchSelection(criterion) === null,
              },
              {
                'text-error-dark text-bold': doesCriterionMatchSelection(criterion) === false,
              },
            ]">
            <svg
              v-if="showIcons"
              class="usa-icon"
              :aria-labelledby="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`"
              role="img">
              <title
                v-if="doesCriterionMatchSelection(criterion) == true"
                :id="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`">
                {{ $t("eligibilityList.match") }}
              </title>
              <title
                v-else-if="doesCriterionMatchSelection(criterion) == false"
                :id="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`">
                {{ $t("eligibilityList.remove") }}
              </title>
              <title
                v-else
                :id="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`">
                {{ $t("eligibilityList.noMatch") }}
              </title>
              <use
                v-if="doesCriterionMatchSelection(criterion) == true"
                xlink:href="~/assets/img/sprite.svg#check_circle" />
              <use
                v-else-if="doesCriterionMatchSelection(criterion) == false"
                xlink:href="~/assets/img/sprite.svg#highlight_off" />
              <use
                v-else
                xlink:href="~/assets/img/sprite.svg#radio_button_unchecked" />
            </svg>
            <svg
              v-else
              class="usa-icon"
              :aria-labelledby="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`"
              role="img">
              <use xlink:href="~/assets/img/sprite.svg#check_circle" />
            </svg>
          </div>
          <div
            :class="[
              'usa-icon-list__icon',
              'display-none',
              'print:display-inline',
              {
                'text-success-dark text-bold': doesCriterionMatchSelection(criterion) === true,
              },
              {
                'text-base': doesCriterionMatchSelection(criterion) === null,
              },
              {
                'text-error-dark text-bold': doesCriterionMatchSelection(criterion) === false,
              },
            ]">
            <svg
              v-if="showIcons"
              class="usa-icon"
              role="img">
              <use
                v-if="doesCriterionMatchSelection(criterion) == true"
                xlink:href="~/assets/img/sprite.svg#check_circle" />
              <use
                v-else-if="doesCriterionMatchSelection(criterion) == false"
                xlink:href="~/assets/img/sprite.svg#highlight_off" />
              <use
                v-else
                xlink:href="~/assets/img/sprite.svg#radio_button_unchecked" />
            </svg>
            <svg
              v-else
              class="usa-icon"
              :aria-labelledby="`eligibility-icon-${criterion.criteriaKey}-title-${_uid}`"
              role="img">
              <use xlink:href="~/assets/img/sprite.svg#radio_button_unchecked" />
            </svg>
          </div>

          <div
            :class="[
              'usa-icon-list__content',
              {
                'text-success-dark text-bold': doesCriterionMatchSelection(criterion) === true,
              },
              {
                'text-base-dark': doesCriterionMatchSelection(criterion) === null,
              },
              {
                'print:text-base-darker': doesCriterionMatchSelection(criterion) === null,
              },
              {
                'text-error-dark text-bold': doesCriterionMatchSelection(criterion) === false,
              },
            ]">
            <span>
              <template v-if="criterion.label">
                {{ criterion.label }}
              </template>
              <template v-else>
                {{ getCriterionByEligibilityKey(criterion.criteriaKey).label }}
              </template>
              <template
                v-if="
                  getCriterionByEligibilityKey(criterion.criteriaKey).type === 'select' && criterion.acceptableValues
                ">
                {{ formatArrayWithSeparator(criterion.acceptableValues) }}.
              </template>
            </span>
          </div>
        </li>
      </ul>
    </client-only>
    <p
      class="text-white bg-base-darker print:text-black print:bg-white font-sans-xs padding-x-2 padding-y-1 margin-bottom-0 radius-bottom-sm">
      <strong>{{ $t("eligibilityList.additional") }}</strong>
      {{ $t("eligibilityList.review") }}
      <span class="print:display-none">{{ $t("accordion.apply") }}</span>
      <span class="display-none print:display-inline">{{ benefitSource }}</span>
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  props: {
    benefitEligibilityCriteria: {
      type: Array,
      required: false,
      default: /* istanbul ignore next */ () => {
        return [
          {
            criteriaKey: "error",
          },
        ]
      },
    },
    benefitSource: {
      type: String,
      required: false,
      default: "",
    },
    headingClasses: {
      type: Array,
      required: false,
      default: () => ["bg-base-lighter"],
    },
    showMatchingCount: {
      type: Boolean,
      required: false,
      default: true,
    },
    showIcons: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    ...mapGetters({
      doesCriterionMatchSelection: "criteria/doesCriterionMatchSelection",
      getCriterionByEligibilityKey: "criteria/getCriterionByEligibilityKey",
      getTotalEligibleCriteria: "criteria/getTotalEligibleCriteria",
      isCriterionSelected: "criteria/isCriterionSelected",
      getResponseByEligibilityKey: "criteria/getResponseByEligibilityKey",
      doesCriterionDateMatch: "criteria/doesCriterionDateMatch",
    }),
  },
  methods: {
    getCriterionLabel(criterion) {
      return criterion.label || this.getCriterionByEligibilityKey(criterion.criteriaKey).label
    },

    formatArrayWithSeparator(array = [], lastSeparator = "or") {
      return array.join(", ").replace(/, ((?:.(?!, ))+)$/, ` ${lastSeparator} $1`)
    },
  },
}
</script>

<style scoped>
.usa-icon-list {
  max-width: none;
}
</style>
