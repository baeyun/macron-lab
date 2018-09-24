export default
`// macron.FS.getcwd()

document.getElementById('getcwd').addEventListener(
  'click',
  function() {
    alert(require('macron').FS.getcwd());
  }
);
`