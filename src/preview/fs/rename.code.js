export default
`// macron.FS.rename()

require('macron').FS.mkdir('C:/Users/bukharim96/Desktop/ninjagirl');

document.getElementById('rename').addEventListener(
  'click',
  function() {
    require('macron').FS.rename(
      'C:/Users/bukharim96/Desktop/ninjagirl',
      'C:/Users/bukharim96/Desktop/ninja-lady'
    );
  }
);
`