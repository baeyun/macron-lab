export default
`// macron.CurrentWindow.focus()

var currentWindow = require('macron').CurrentWindow;

document.getElementById('focus').addEventListener(
  'hover',
  function() {
    !currentWindow.focus() && currentWindow.focus();
  }
);
`