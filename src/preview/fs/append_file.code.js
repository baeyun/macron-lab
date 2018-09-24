export default
`// macron.FS.append_file()

// Create demo file in this directory
require('macron').FS.write_file('./my-cats.txt', "Kitty, Dark Night, Small Girl and Whitto.");

document.getElementById('append_file').addEventListener(
  'click',
  function() {
    require('macron').FS.append_file(
      // Append content to demo file
      './my-cats.txt',
      document.getElementById('contents').value
    );
  }
);
`