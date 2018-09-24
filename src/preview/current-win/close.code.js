export default
`// macron.CurrentWindow.close()

document.getElementById('close-window').addEventListener(
  'click',
  () => require('macron').CurrentWindow.close()
);
`