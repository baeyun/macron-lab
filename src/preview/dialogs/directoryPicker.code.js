export default
`// macron.Dialog.directoryPicker()

document.getElementById('directoryPicker').addEventListener(
  'click',
  function() {
    require('macron').Dialog.directoryPicker({
      title: 'Pick folder',
      initialDirectoryPath: 'C:/Users/bukharim96/Desktop/macron_tests/'
    });
  }
);
`