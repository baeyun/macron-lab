export default
`// macron.CurrentWindow.maxWidth()

document.getElementById('maxWidth-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.maxWidth(document.getElementById('change-maxWidth-input').value);
  }
);
`