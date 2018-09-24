export default
`// macron.CurrentWindow.isKeyboardFocused()

document.getElementById('isKeyboardFocused-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.isKeyboardFocused();
  }
);
`