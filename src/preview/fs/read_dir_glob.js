export default
`<h2>Read directory contents with patterns (advanced)</h2>

<p>
  Use <code>read_dir_glob: Array (path: String, pattern: String)</code> to read a directory's contents,
  where <i>path</i> is the relative/absolute directory path and pattern is a RegExp-like pattern to match
  contents.
  Returns a list of all files or sub-directories in it. Check the editor for a detailed example.
</p>

<button id="read_dir_glob">Read directory</button>
`