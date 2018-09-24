export default
`// macron.Dialog.fileSaver()

document.getElementById('fileSaver').addEventListener(
  'click',
  function() {
    require('macron').Dialog.fileSaver({
      title: 'Save this file as...',
      content: document.getElementById('content').value,
      name: 'macron_file_test',
      initialDirectoryPath: 'C:/Users/bukharim96/Desktop/macron_tests/', // Set this to a custom path
      defaultExtension: 'txt',
      fileTypes: [
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