export default
`// macron.CurrentWindow.clone()

document.getElementById('clone-window').addEventListener(
  'click',
  function() {
    require('macron').CurrentWindow.clone();
  }
);
`