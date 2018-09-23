export default `
const { CurrentWindow } = require('macron')

document.getElementById('change-title').addEventListener(
  'click',
  () => CurrentWindow.title('Hello')
)
`