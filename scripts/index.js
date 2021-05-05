import 'core-js';
import 'regenerator-runtime/runtime';

import "../styles/index.scss";
import axe from "./a11y";
import ruleEnginesPerEnv from './ruleEngines.json';

const origin = window.location.origin;
const rules = ruleEnginesPerEnv[process.env.NODE_ENV];
const ruleEngines = {};

axe();

window.addEventListener("message", (event) => {
  // console.log(event);
  if (event.origin !== origin) {
    return;
  }
  switch (event.data.event) {
  case 'isElegibleResult':
    const results = document.querySelector('#results');
    for (const event of event.data.events || []) {
      results.innerText += `${event.type}: ${JSON.stringify(event.params, null, 2)}\n`;
    }
    break;
  }

}, false);

const ready = () => {

  const featurePolicy = [
    "accelerometer 'none'",
    "ambient-light-sensor 'none'",
    "autoplay 'none'",
    "battery 'none'",
    "camera 'none'",
    "display-capture 'none'",
    "document-domain 'none'",
    "encrypted-media 'none'",
    "fullscreen 'none'",
    "geolocation 'none'",
    "gyroscope 'none'",
    "magnetometer 'none'",
    "microphone 'none'",
    "midi 'none'",
    "navigation-override 'none'",
    "payment 'none'",
    "picture-in-picture 'none'",
    "publickey-credentials-get 'none'",
    "usb 'none'",
    "wake-lock 'none'",
    "screen-wake-lock 'none'",
    "web-share 'none'",
    "xr-spatial-tracking 'none'",
  ];
  const iframeContainer = document.querySelector('.iframe-container');
  for (const rule of rules) {
    const iframe = document.createElement('iframe');
    iframe.width = 0;
    iframe.height = 0;
    iframe.allow = featurePolicy.join('; ');
    iframe.src = rule;
    iframeContainer.appendChild(iframe);
    ruleEngines[rule] = iframe;
  }
}

setTimeout(() => {
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
}, 250);

document.addEventListener('DOMContentLoaded', ready, false);
