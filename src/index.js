import Tooltip from './app-ui/tooltip';
import Dropdown from './app-ui/dropdown';
import Tabs from './app-ui/tabs';
import Snack from './app-ui/snack';

// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdown
const dropdowns = document.querySelectorAll('.dropdown');
console.log(dropdowns);
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create Tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// Snack
const snack = new Snack();
snack.init();
const btn = document.querySelector('.snack-trigger');
btn.addEventListener('click', () => [
  snack.showMessage('Hi! You clicked Me!!!'),
]);
