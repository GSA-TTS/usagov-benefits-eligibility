<template>
  <div />
</template>

<script>

// TODO: ADD TESTS AND REMOVE TEST COVERAGE THRESHOLD OVERRIDE
// FOR THIS COMPONENT IN /jest.config.s

let config, isEligible;
if (process.client) {
  const rules = require('usagov-benefits-eligibility-rules');
  config = rules.config;
  isEligible = rules.isEligible;
}

export default {
  layout: 'rules',
  mounted () {
    const origin = window.location.origin;

    window.addEventListener("message", (event) => {
      // console.log(event);
      if (!event.data) {
        return;
      }

      switch (event.data.event) {
      case 'isEligible':
        if (typeof isEligible === 'function') {
          isEligible(event.data).then(({ events }) => {
            window.parent.postMessage({ event: 'isEligibleResult', events }, origin);
          });
        }
        break;
      case 'config':
        if (typeof config === 'function') {
          config(event.data.event);
        }
        break;
      }
    }, false);

    window.parent.postMessage({ event: 'ready' }, origin);
  },
}
</script>

<style>

</style>
