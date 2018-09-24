export default
`<h2>File picker</h2>

<p>Use <code>filePicker(filePickerOptions: Object)</code> to pick a file from a directory.</p>

<h3>File picker options</h3>

<ul>
  <li><i>title</i> <b>String</b> - Dialog window title.</li>
  <li><i>read</i> <b>Boolean</b> - Should return text content of the picked file.</li>
  <li><i>allowMultiPick</i> <b>Boolean</b> - Should allow multiple file picks.</li>
  <li><i>initialDirectoryPath</i> <b>String</b> - Default path to save file. If not specified, last saved path will be used.</li>
  <li><i>fileTypes</i> <b>Array</b> - Contains sublists that indicate the file types of the specified file. Sublists can only contain a file type followed by a file extension (in order).</li>
</ul>

<p>Returns the path to the picked file or its contents if read is true.</p>

<p>Check the example below and the editor for more details.</p>

<button id="filePicker">Open dialog</button>
`