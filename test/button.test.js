/**
 * @jest-environment jsdom
 */

const { showMessage } = require('../script');

describe('Button click test', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="myButton">Click Me</button>
      <div id="message"></div>
    `;
  });

  test('should display new welcome message when button is clicked', () => {
    const button = document.getElementById('myButton');
    button.addEventListener('click', showMessage);
    button.click();

    const message = document.getElementById('message');
    expect(message.textContent).toBe('Ahoy, matey! Welcome aboard to the new text!');

  });
});




