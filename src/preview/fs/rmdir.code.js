export default
`// macron.FS.rmdir()

// Create demo file in this directory
require('macron').FS.mkdir('C:/Users/bukharim96/Desktop/PuppsCollection');
require('macron').FS.write_file('C:/Users/bukharim96/Desktop/PuppsCollection/Fred.txt', "Fred was my first pupp. He liked cats.");

document.getElementById('rmdir').addEventListener(
  'click',
  function() {
    require('macron').FS.rmdir('C:/Users/bukharim96/Desktop/PuppsCollection');
  }
);
`