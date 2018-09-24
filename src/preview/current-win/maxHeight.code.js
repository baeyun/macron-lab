export default
`// macron.CurrentWindow.maxHeight()

document.getElementById('maxHeight-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.maxHeight(document.getElementById('change-maxHeight-input').value);
  }
);
`