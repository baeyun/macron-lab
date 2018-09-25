export default
`<h2>Creating context menus</h2>

<p>
  Crafting context menus in Macron is just so sweet. Registering a context menu is different to a menubar
  even though the API remains perfectly intact. These APIs are stored in an object with IDs relating to the
  registered context menu with which they could be referred to for reopening.
</p>

<p>
  To register a context menu, you need only the DOM query string of the HTML element you need to apply the
  context menu to and ofcourse the actual API which is works just the same as the menubar.
</p>

<h3>Demo</h3>

<p>
  Right click on any of the two <i>div</i> elements. Click on the button to set the context menus the right
  click again.
</p>

<div>
  <div id="green" style="display: 'inline'; width: 200px; height: 200px; background: green; margin:10px;float: left;"></div>
  <div id="red" style="display: 'inline'; width: 200px; height: 200px; background: red; margin:10px;float: right;"></div>
</div>

<button id="set-context-menus">Set menus</button>
`