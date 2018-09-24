export default
`// macron.CurrentWindow.resizable()

document.getElementById('resizable-window-off').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.resizable(true);
  }
);

document.getElementById('resizable-window-on').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.resizable(false);
  }
);
`