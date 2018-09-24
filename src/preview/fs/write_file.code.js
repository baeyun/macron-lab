export default
`// macron.FS.write_file()

document.getElementById('write_file').addEventListener(
  'click',
  function() {
    require('macron').FS.write_file('./my-pupps.txt', "Fred, Andy, Jibby and Iky.");
  }
);
`