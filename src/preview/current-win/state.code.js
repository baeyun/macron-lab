export default
`// macron.CurrentWindow.state()

var currentWindow = require('macron').CurrentWindow;

document.getElementById('state-window').addEventListener(
  'click',
  function() {
    currentWindow.state("maximized");
    // currentWindow.state("minimized");
    // currentWindow.state("normal");
  }
);
`