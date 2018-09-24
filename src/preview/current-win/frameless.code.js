export default
`// macron.CurrentWindow.frameless()

var currentWindow = require('macron').CurrentWindow;

document.getElementById('toggle-frameless-window-on').addEventListener(
  'click',
  function() {
    currentWindow.frameless(true);
  }
)

document.getElementById('toggle-frameless-window-off').addEventListener(
  'click',
  function() {
    currentWindow.frameless(false);
  }
)
`