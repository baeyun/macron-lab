export default `
var currentWindow = require('macron').CurrentWindow;

document.getElementById('change-width').addEventListener(
  'click',
  function() {
    currentWindow.width(document.getElementById('change-width-input').value);
  }
)
`