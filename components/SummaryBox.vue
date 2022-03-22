<template>
  <div
    class="usa-summary-box margin-bottom-2"
    role="region"
    aria-labelledby="summary-box-key-information">
    <div class="usa-summary-box__body">
      <h3
        id="summary-box-key-information"
        class="usa-summary-box__heading">
        Start here
      </h3>
      <div class="usa-summary-box__text">
        <form class="usa-form">
          <fieldset class="usa-fieldset">
            <legend class="usa-legend usa-legend">Did you serve in the military?</legend>
            <div class="usa-radio">
              <input
                id="served-yes"
                class="usa-radio__input"
                type="radio"
                name="serve-in-military"
                value="yes"
                checked />
              <label
                class="usa-radio__label"
                for="served-yes"
                >Yes</label
              >
            </div>
            <div class="usa-radio">
              <input
                id="served-no"
                class="usa-radio__input"
                type="radio"
                name="serve-in-military"
                value="no" />
              <label
                class="usa-radio__label"
                for="served-no"
                >No</label
              >
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryBox",
}
</script>

<style
  lang="scss"
  scoped></style>
