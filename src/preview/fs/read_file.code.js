export default
`// macron.FS.read_file()

// Create demo file in this directory
require('macron').FS.write_file('./my-pupps.txt', "Fred, Andy, Jibby and Iky.");

document.getElementById('read_file').addEventListener(
  'click',
  function() {
    document.getElementById('contents').value = require('macron').FS.read_file(
      // Read demo file and display
      './my-pupps.txt'
    );
  }
);
`