export default
`<h2>Sync file updates (plugins)</h2>

<p>Use <code>sync_file_updates(f: FileObject)</code> to sync the latest updates to a file. Only to be used by plugins.</p>
<p>
  If a file is not closed after an operation is performed on it, changes will not apply.
  To apply any changes made, use this method. The <i>FileObject</i> is a Python class that is inherited
  from the Python header file, meaning it is available in C/C++ programs too.
</p>
`