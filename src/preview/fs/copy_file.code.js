export default
`// macron.FS.copy_file()

// Create demo file in this directory
require('macron').FS.write_file('./content.txt', "Some content...");

document.getElementById('copy_file').addEventListener(
  'click',
  function() {
    require('macron').FS.copy_file('./content.txt', 'C:/Users/bukharim96/Desktop/content-but-on-desktop.txt');
  }
);
`