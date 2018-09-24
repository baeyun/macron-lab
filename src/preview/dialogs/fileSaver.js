export default
`<h2>File saver</h2>

<p>Use <code>fileSaver(fileSaverOptions: Object)</code> to save a file to a directory.</p>

<h3>File saver options</h3>

<ul>
  <li><i>title</i> <b>String</b> - Dialog window title.</li>
  <li><i>content</i> <b>String</b> - Text content of the file to save.</li>
  <li><i>name</i> <b>String</b> - File name.</li>
  <li><i>initialDirectoryPath</i> <b>String</b> - Default path to save file. If not specified, last saved path will be used.</li>
  <li><i>defaultExtension</i> <b>String</b> - Default file extension.</li>
  <li><i>fileTypes</i> <b>Array</b> - Contains sublists that indicate the file types of the specified file. Sublists can only contain a file type followed by a file extension (in order).</li>
</ul>

<p>Returns the path to the saved file.</p>

<p>Check the example below and the editor for more details.</p>

<textarea id="content" placeholder="Enter file contents"></textarea>
<button id="fileSaver">Open dialog</button>
`