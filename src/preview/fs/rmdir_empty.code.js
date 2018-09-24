export default
`// macron.FS.rmdir_empty()

// Create demo file in this directory
require('macron').FS.mkdir('C:/Users/bukharim96/Desktop/PuppsCollection2');

document.getElementById('rmdir_empty').addEventListener(
  'click',
  function() {
    require('macron').FS.rmdir_empty('C:/Users/bukharim96/Desktop/PuppsCollection2');
  }
);
`