<template>
  <div />
</template>

<script>
let config, isElegible;
if (process.client) {
  const rules = require('usagov-benefits-eligibility-rules');
  config = rules.config;
  isElegible = rules.isElegible;
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
      case 'isElegible':
        if (typeof isElegible === 'function') {
          isElegible(event.data).then(({ events }) => {
            window.parent.postMessage({ event: 'isElegibleResult', events }, origin);
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
