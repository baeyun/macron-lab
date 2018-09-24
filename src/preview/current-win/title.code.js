export default `
var currentWindow = require('macron').CurrentWindow;

document.getElementById('change-title').addEventListener(
  'click',
  function() {
    currentWindow.title(document.getElementById('change-title-input').value);
  }
)
`