import 'core-js';
import 'regenerator-runtime/runtime';
import 'uswds'

import "../styles/index.scss";
import axe from "./a11y";
import ruleEnginesPerEnv from './ruleEngines.json';
import { featurePolicy } from './config';

const origin = window.location.origin;
const rules = ruleEnginesPerEnv[process.env.NODE_ENV];
const ruleEngines = {};

axe();

const iframeReady = [];
const iframeReadyCb = [];
const addIframePromise = () => { iframeReady.push(new Promise((resolve) => { iframeReadyCb.push(resolve) })) };
addIframePromise();

window.addEventListener("message", (event) => {
  // console.log(event);
  if (event.origin !== origin) {
    return;
  }
  switch (event.data.event) {
  case 'ready':
    iframeReadyCb.pop()();
    break;
  case 'isElegibleResult':
    const results = document.querySelector('#results');
    for (const event of event.data.events || []) {
      results.innerText += `${event.type}: ${JSON.stringify(event.params, null, 2)}\n`;
    }
    break;
  }

}, false);

const ready = () => {

  const iframeContainer = document.querySelector('.iframe-container');

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
      event: 'isElegible',
      facts: {
	"Name of species or unknown": "Black bear",
	"Diet (comma-separated list: berries, nuts, meat)": "nuts",
	"Hibernates (Boolean, 1 if true, 0 if false)": 1,
	"Aggression (Scale of 0-10)": 1,
	"Bear's name or unknown": "Pooh",
      }
    }, origin);
  }
});
