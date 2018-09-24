export default
`// macron.CurrentWindow.activate()

var currentWindow = require('macron').CurrentWindow;

document.getElementById('activate-window').addEventListener(
  'click',
  function() {
    currentWindow.activate();
  }
);

document.getElementById('deactivate-window').addEventListener(
  'click',
  function() {
    currentWindow.activate();
  }
);

`