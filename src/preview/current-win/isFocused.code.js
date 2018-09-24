export default
`// macron.CurrentWindow.isFocused()

document.getElementById('isFocused-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.isFocused();
  }
);
`