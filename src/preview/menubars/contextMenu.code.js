export default
`// macron.ContextMenu.register()

var contextMenu = require('macron').ContextMenu;

document.getElementById('set-context-menus').addEventListener(
  'click',
  function() {
    contextMenu.register('#green', [
      {header: "I am a green div item"},
      {header: "Rename..."},
      {header: "Delete File"},
      {seperator: true},
      {header: "Open Containing Folder..."}
    ]);
    
    contextMenu.register('#red', [
      {header: "Extracted from...", submenu: [
        {header: "Visual Studio Code"},
      ]},
      {header: "Checked Item", isCheckable: true, checked: true},
      {header: "Veggies...", submenu: [
        {header: "Onions"},
        {header: "Garlic"},
        {header: "Potatoes"},
        {header: "Turnip"},
        {header: "Lettuce"},
      ]},
      {header: "Go to Definition"},
      {header: "Peek Definition"},
      {header: "Go to Type Definition"},
      {header: "Find All References"},
      {seperator: true},
      {header: "Rename Symbol"},
      {header: "Change All Occurences"},
      {header: "Format Document"},
      {header: "Refactor..."},
      {header: "Source Action"},
      {seperator: true},
      {header: "Cut"},
      {header: "Copy"},
      {header: "Paste"},
      {seperator: true},
      {header: "Command Palette..."},
    ]);
  }
);
`