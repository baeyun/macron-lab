export default
`// macron.FS.clear_file()

// Create demo file in this directory
require('macron').FS.write_file('./content.txt', "I actually hate this content.");

document.getElementById('clear_file').addEventListener(
  'click',
  function() {
    require('macron').FS.clear_file('./content.txt');
  }
);
`