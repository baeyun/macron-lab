export default
`// macron.CurrentWindow.isActive()

document.getElementById('isActive-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.isActive();
  }
);
`