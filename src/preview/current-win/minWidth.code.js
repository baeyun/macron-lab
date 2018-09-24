export default
`// macron.CurrentWindow.minWidth()

document.getElementById('minWidth-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.minWidth(document.getElementById('change-minWidth-input').value);
  }
);
`