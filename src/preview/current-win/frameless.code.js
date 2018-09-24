export default
`// macron.CurrentWindow.frameless()

const currentWindow = require('macron').CurrentWindow

document.getElementById('toggle-frameless-window-on').addEventListener(
  'click',
  () => currentWindow.frameless(true)
)

document.getElementById('toggle-frameless-window-off').addEventListener(
  'click',
  () => currentWindow.frameless(false)
)
`