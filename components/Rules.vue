<template>
  <div>
    <div ref="iframeContainer" class="iframe-container" aria-hidden="true" />
    <dl>
      <dt>Results</dt>
      <dd ref="results" />
    </dl>
  </div>
</template>

<script>
import ruleEnginesPerEnv from '../services/ruleEngines.json';
import { featurePolicy } from '../services/config';

export default {
  mounted () {
    const origin = window.location.origin;
    const rules = ruleEnginesPerEnv[process.env.NODE_ENV];
    const ruleEngines = {};

    const iframeReady = [];
    const iframeReadyCb = [];
    const addIframePromise = () => { iframeReady.push(new Promise((resolve) => { iframeReadyCb.push(resolve) })) };
    addIframePromise();

    window.addEventListener("message", (event) => {
      // console.log(event);
      if (event.origin !== origin) {
        return;
      }
      const results = this.$refs.results;
      switch (event.data.event) {
      case 'ready':
        iframeReadyCb.pop()();
        break;
      case 'isEligibleResult':
        for (const sentEvent of event.data.events || []) {
          results.innerText += `${sentEvent.type}: ${JSON.stringify(sentEvent.params, null, 2)}\n`;
        }
        break;
      }

    }, false);

    const ready = () => {

      const iframeContainer = this.$refs.iframeContainer;

      for (const rule of rules) {
        const iframe = document.createElement('iframe');
        iframe.allow = featurePolicy.join('; ');
        iframe.src = rule;
        addIframePromise();
        iframeContainer.appendChild(iframe);
        ruleEngines[rule] = iframe;
      }
      iframeReadyCb.pop()();
    }

    document.addEventListener('DOMContentLoaded', ready, false);

    Promise.all(iframeReady).then(() => {
      for (const urlOrigin in ruleEngines) {
        ruleEngines[urlOrigin].contentWindow.postMessage({
          event: 'isEligible',
          facts: {
            "Name of species or unknown": "Black bear",
            "Diet (comma-separated list: berries, nuts, meat)": "nuts",
            "Hibernates (Boolean, 1 if true, 0 if false)": 1,
            "Aggression (Scale of 0-10)": 1,
            "Bear's name or unknown": "Pooh",
            "person.isAlive": 0,
            "armedForces.privateHeadstone": 1,
            "armedForces.privateCemetery": 1,
            "armedForces.status": "honorable discharge",
            "armedForces.commissionOfficer": 0,
            "armedForces.medalOfHonor": 1,
          }
        }, origin);
      }
    });

  },
}
</script>

<style>

</style>
