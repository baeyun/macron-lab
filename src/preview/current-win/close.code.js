export default
`// macron.CurrentWindow.close()

document.getElementById('close-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.close();
  }
);
`