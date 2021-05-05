import 'core-js';
import { config, isElegible } from 'usagov-benefits-eligibility-rules';

const origin = window.location.origin;

window.addEventListener("message", (event) => {
  // console.log(event);
  if (!event.data) return;
  switch (event.data.event) {
  case 'isElegible':
    if (typeof isElegible === 'function') {
      isElegible(event.data).then(({ events }) => {
        window.parent.postMessage({ event: 'isElegibleResult', events }, origin);
      });
    }
    break;
  case 'config':
    if (typeof config === 'function') config(event.data.event);
    break;
  }
}, false);

window.parent.postMessage({ event: 'ready' }, origin);
