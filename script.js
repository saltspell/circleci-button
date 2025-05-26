function showMessage() {
  const message = document.getElementById('message');
  if (message) {
    message.textContent = 'Ahoy, matey! Welcome aboard to the new text!';
    message.classList.add('visible');
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    if (button) {
      button.addEventListener('click', showMessage);
    }
  });
}

if (typeof module !== 'undefined') {
  module.exports = { showMessage };
}






