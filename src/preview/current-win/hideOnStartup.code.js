export default
`// macron.CurrentWindow.hideOnStartup()

document.getElementById('hideOnStartup-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.hideOnStartup(true);
  }
);
`