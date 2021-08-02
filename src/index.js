import Tooltip from './app-ui/tooltip';
import Dropdown from './app-ui/dropdown';

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
