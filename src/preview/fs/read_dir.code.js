export default
`// macron.FS.read_dir()

var fs = require('macron').FS;
var testFiles = new Array(12);

// Create demo directory in this directory
fs.mkdir('C:/Users/bukharim96/Desktop/MacronIsCool');

testFiles.forEach(function(e, i) {
  fs.write_file(
    'C:/Users/bukharim96/Desktop/MacronIsCool/test-file-0' + i + '.txt',
    "I think this is test file number: " + i
  );
});

document.getElementById('read_dir').addEventListener(
  'click',
  function() {
    alert(fs.read_dir('C:/Users/bukharim96/Desktop/MacronIsCool'));
  }
);
`