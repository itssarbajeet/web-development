function updateDisplay(value) {
    document.querySelector('input[name="display"]').value += value;
  }
  
  function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
  }
  
  function deleteLastCharacter() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.querySelector('input[name="display"]');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  