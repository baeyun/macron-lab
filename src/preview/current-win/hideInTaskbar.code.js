export default
`// macron.CurrentWindow.hideInTaskbar()

document.getElementById('hideInTaskbar-window-on').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.hideInTaskbar(true);
  }
);

document.getElementById('hideInTaskbar-window-off').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.hideInTaskbar(false);
  }
);
`