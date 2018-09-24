export default
`// macron.FS.unlink()

// Create demo file in this directory
require('macron').FS.write_file('C:/Users/bukharim96/Desktop/my-pupps.txt', "Fred, Andy, Jibby and Iky.");

document.getElementById('unlink').addEventListener(
  'click',
  function() {
    require('macron').FS.unlink('C:/Users/bukharim96/Desktop/my-pupps.txt');
  }
);
`