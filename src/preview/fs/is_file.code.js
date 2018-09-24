export default
`// macron.FS.is_file()

var fs = require('macron').FS;

fs.write_file('./file.jsx', 'export default lazyRecompose() => <MyComponent/>);')

document.getElementById('is_file').addEventListener(
  'click',
  function() {
    alert(fs.is_file('./file.jsx'));
  }
);
`