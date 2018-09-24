export default
`// macron.CurrentWindow.focus()

var macron = require('macron')

document.getElementById('focus').addEventListener(
  'click',
  () => !macron.CurrentWindow.focus() && macron.CurrentWindow.focus()
)
`