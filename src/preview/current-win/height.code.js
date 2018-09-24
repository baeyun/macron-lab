export default `
var currentWindow = require('macron').CurrentWindow;

document.getElementById('change-height').addEventListener(
  'click',
  function() {
    currentWindow.height(document.getElementById('change-height-input').value);
  }
)
`