export default
`// macron.CurrentWindow.startupFromCenter()

document.getElementById('startupFromCenter-window-on').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.startupFromCenter(true);
  }
);

document.getElementById('startupFromCenter-window-off').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.startupFromCenter(false);
  }
);
`