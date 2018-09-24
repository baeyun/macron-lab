export default
`// macron.FS.realpath()

require('macron').FS.mkdir('./MyKittyCollection');

document.getElementById('realpath').addEventListener(
  'click',
  function() {
    alert(require('macron').FS.realpath('./MyKittyCollection'));
  }
);
`