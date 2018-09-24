export default
`// macron.FS.is_dir()

var fs = require('macron').FS;

fs.mkdir('./assets')

document.getElementById('is_dir').addEventListener(
  'click',
  function() {
    alert(fs.is_dir('./assets'));
  }
);
`