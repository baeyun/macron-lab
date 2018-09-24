export default
`// macron.Dialog.filePicker()

document.getElementById('filePicker').addEventListener(
  'click',
  function() {
    require('macron').Dialog.filePicker({
      title: 'Pick file...',
      read: true,
      allowMultiPick: true,
      initialDirectoryPath: 'C:/Users/bukharim96/Desktop/macron_tests/', // initial save path
      fileTypes: [ // 'Save As' types
        ['All files', '.*'],
        ['Text', '.txt'],
        ['HTML', '.html'],
        ['JavaScript', '.js'],
        ['CSS', '.css'],
        ['Markdown', '.md']
      ]
    });
  }
);
`