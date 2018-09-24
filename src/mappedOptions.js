export default [
  /**
   * Current Window
   */
  { value: 'activate', label: 'Current Window', isDisabled: true },
  { value: 'activate', label: 'Activate window', content: require('./preview/current-win/activate'), code: require('./preview/current-win/activate.code') },
  { value: 'clone', label: 'Clone current window', content: require('./preview/current-win/clone'), code: require('./preview/current-win/clone.code') },
  { value: 'close', label: 'Close window', content: require('./preview/current-win/close'), code: require('./preview/current-win/close.code')},
  { value: 'focus', label: 'Enable focus on window', content: require('./preview/current-win/focus'), code: require('./preview/current-win/focus.code') },
  { value: 'focus', label: 'Focus on start' },
  { value: 'frameless', label: 'Remove window frame', content: require('./preview/current-win/frameless'), code: require('./preview/current-win/frameless.code') },
  { value: 'height', label: 'Change height' },
  { value: 'hide', label: 'Hide window' },
  { value: 'hideInTaskbar', label: 'Hide from taskbar' },
  { value: 'hideOnStartup', label: 'Hide on start' },
  { value: 'isActive', label: 'Is window active' },
  { value: 'isFocused', label: 'Is window focused' },
  { value: 'isKeyboardFocused', label: 'Is keyboard focued' },
  { value: 'isVisible', label: 'Is visible' },
  { value: 'maxHeight', label: 'Change maximum height' },
  { value: 'maxWidth', label: 'Change maximum width' },
  { value: 'minHeight', label: 'Change minimum height' },
  { value: 'minWidth', label: 'Change minimum width' },
  { value: 'resizable', label: 'Toggle resizability' },
  { value: 'show', label: 'Display window' },
  { value: 'startupFromCenter', label: 'Startup window from center' },
  { value: 'state', label: 'Toggle window state (maximized, minimized)' },
  { value: 'title', label: 'Change window title', content: require('./preview/current-win/title'), code: require('./preview/current-win/title.code') },
  { value: 'width', label: 'Change width' },

  /**
   * FileSystem
   */
  { value: 'getcwd', label: 'FileSystem', isDisabled: true },
  { value: 'getcwd', label: 'Get current working directory' },
  { value: 'sync_file_updates', label: 'Sync file updates (internal)' },
  { value: 'read_file', label: 'Read file (sync)' },
  { value: 'write_file', label: 'Write file (sync)' },
  { value: 'append_file', label: 'Append content to file' },
  { value: 'clear_file', label: 'Clear file content' },
  { value: 'copy_file', label: 'Copy file to another destination' },
  { value: 'is_file', label: 'Check if path is file' },
  { value: 'is_dir', label: 'Check if path is directory' },
  { value: 'mkdir', label: 'Create directory' },
  { value: 'chdir', label: 'Change execution directory (unstable)' },
  { value: 'realpath', label: 'Get full path of a relative path' },
  { value: 'rename', label: 'Rename file or directory' },
  { value: 'unlink', label: 'Remove file from system' },
  { value: 'rmdir', label: 'Remove directory with contents' },
  { value: 'rmdir_empty', label: 'Remove empty directory' },
  { value: 'read_dir', label: 'Read directory contents' },
  { value: 'read_dir_glob', label: 'Read directory contents with patterns (advanced)' },

  /**
   * HTTP/HTTPS
   */
  { value: 'create_server', label: 'HTTP/HTTPS', isDisabled: true },
  { value: 'create_server', label: 'Create remote server' },
]