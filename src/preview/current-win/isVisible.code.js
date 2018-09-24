export default
`// macron.CurrentWindow.isVisible()

document.getElementById('isVisible-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.isVisible();
  }
);
`