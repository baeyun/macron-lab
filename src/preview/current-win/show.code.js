export default
`// macron.CurrentWindow.show()

var currentWindow = require('macron').CurrentWindow;
var intervalID = null;

document.getElementById('start-interval').addEventListener(
  'click',
  function() {
    currentWindow.hide();
    
    intervalID = setInterval(function() {
      currentWindow.show();

      setTimeout(function() {
        currentWindow.hide();
      }, 1000);
    }, 3000);
  }
);

document.getElementById('stop-interval').addEventListener(
  'click',
  function() {
    clearInterval(intervalID);
  }
);
`