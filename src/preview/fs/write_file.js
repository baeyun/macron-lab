export default
`<h2>Write file (sync)</h2>

<p>
  Use <code>write_file(filePath: String, fileContents: String)</code> to create a file,
  where <i>filePath</i> is the relative/absolute file path and <i>fileContents</i> represents the actual file contents.
</p>

<p>
  Note: This doesn't write to existing files, it overrides them. Check <i>append_file</i>
  write content to existing files.
</p>

<button id="write_file">Create file</button>
`