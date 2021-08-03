import './styles/snack.css';

class Snack {
  constructor() {
    this.snack = document.createElement('div');
  }

  init() {
    this.snack.classList.add('snack');
    document.querySelector('body').appendChild(this.snack);
  }

  showMessage(message) {
    this.snack.textContent = message;
    this.snack.classList.add('active');
    setTimeout(() => {
      this.snack.classList.remove('active');
    }, 4000);
  }
}

export { Snack as default };
