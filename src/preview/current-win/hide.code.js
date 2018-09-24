export default
`// macron.CurrentWindow.hide()

document.getElementById('hide-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.hide();
  }
);
`