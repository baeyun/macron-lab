export default
`// macron.FS.read_dir_glob()

var fs = require('macron').FS;
var testFiles = ['js', 'txt', 'js', 'js', 'vue', 'ts'];

// Create demo directory in this directory
fs.mkdir('C:/Users/bukharim96/Desktop/MacronIsCool');

for (var i = 0; i < testFiles.length; i++) {
  fs.write_file(
    'C:/Users/bukharim96/Desktop/MacronIsCool/test-file-0' + i + '.' + testFiles[i],
    "I think this is test file number: " + i
  );
}

document.getElementById('read_dir_glob').addEventListener(
  'click',
  function() {
    alert(fs.read_dir_glob(
      'C:/Users/bukharim96/Desktop/MacronIsCool/',
      '*.js'
    ));
  }
);
`