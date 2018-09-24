export default
`// macron.CurrentWindow.minHeight()

document.getElementById('minHeight-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.minHeight(document.getElementById('change-minHeight-input').value);
  }
);
`