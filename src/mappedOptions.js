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
  { value: 'height', label: 'Change height', content: require('./preview/current-win/height'), code: require('./preview/current-win/height.code') },
  { value: 'hide', label: 'Hide window', content: require('./preview/current-win/hide'), code: require('./preview/current-win/hide.code') },
  { value: 'hideInTaskbar', label: 'Hide from taskbar', content: require('./preview/current-win/hideInTaskbar'), code: require('./preview/current-win/hideInTaskbar.code') },
  { value: 'hideOnStartup', label: 'Hide on start', content: require('./preview/current-win/hideOnStartup'), code: require('./preview/current-win/hideOnStartup.code') },
  { value: 'isActive', label: 'Is window active', content: require('./preview/current-win/isActive'), code: require('./preview/current-win/isActive.code') },
  { value: 'isFocused', label: 'Is window focused', content: require('./preview/current-win/isFocused'), code: require('./preview/current-win/isFocused.code') },
  { value: 'isKeyboardFocused', label: 'Is keyboard focused', content: require('./preview/current-win/isKeyboardFocused'), code: require('./preview/current-win/isKeyboardFocused.code') },
  { value: 'isVisible', label: 'Is visible', content: require('./preview/current-win/isVisible'), code: require('./preview/current-win/isVisible.code') },
  { value: 'maxHeight', label: 'Change maximum height', content: require('./preview/current-win/maxHeight'), code: require('./preview/current-win/maxHeight.code') },
  { value: 'maxWidth', label: 'Change maximum width', content: require('./preview/current-win/maxWidth'), code: require('./preview/current-win/maxWidth.code') },
  { value: 'minHeight', label: 'Change minimum height', content: require('./preview/current-win/minHeight'), code: require('./preview/current-win/minHeight.code') },
  { value: 'minWidth', label: 'Change minimum width', content: require('./preview/current-win/minWidth'), code: require('./preview/current-win/minWidth.code') },
  { value: 'resizable', label: 'Toggle resizability', content: require('./preview/current-win/resizable'), code: require('./preview/current-win/resizable.code') },
  { value: 'show', label: 'Show window', content: require('./preview/current-win/show'), code: require('./preview/current-win/show.code') },
  { value: 'startupFromCenter', label: 'Startup window from center', content: require('./preview/current-win/startupFromCenter'), code: require('./preview/current-win/startupFromCenter.code') },
  { value: 'state', label: 'Toggle window state (maximized, minimized)', content: require('./preview/current-win/state'), code: require('./preview/current-win/state.code') },
  { value: 'title', label: 'Change window title', content: require('./preview/current-win/title'), code: require('./preview/current-win/title.code') },
  { value: 'width', label: 'Change width', content: require('./preview/current-win/width'), code: require('./preview/current-win/width.code') },

  /**
   * Dialogs
  */
  { value: 'fileSaver', label: 'Dialogs', isDisabled: true },
  { value: 'fileSaver', label: 'File saver', content: require('./preview/dialogs/fileSaver'), code: require('./preview/dialogs/fileSaver.code') },
  { value: 'filePicker', label: 'File picker', content: require('./preview/dialogs/filePicker'), code: require('./preview/dialogs/filePicker.code') },
  { value: 'directoryPicker', label: 'Directory picker', content: require('./preview/dialogs/directoryPicker'), code: require('./preview/dialogs/directoryPicker.code') },
  
  /**
   * FileSystem
   */
  { value: 'getcwd', label: 'FileSystem', isDisabled: true },
  { value: 'getcwd', label: 'Get current working directory', content: require('./preview/fs/getcwd'), code: require('./preview/fs/getcwd.code') },
  { value: 'sync_file_updates', label: 'Sync file updates (plugins)', content: require('./preview/fs/sync_file_updates'), code: require('./preview/fs/sync_file_updates.code') },
  { value: 'read_file', label: 'Read file (sync)', content: require('./preview/fs/read_file'), code: require('./preview/fs/read_file.code') },
  { value: 'write_file', label: 'Write file (sync)', content: require('./preview/fs/write_file'), code: require('./preview/fs/write_file.code') },
  { value: 'append_file', label: 'Append content to file (async)', content: require('./preview/fs/append_file'), code: require('./preview/fs/append_file.code') },
  { value: 'clear_file', label: 'Clear file content (sync)', content: require('./preview/fs/clear_file'), code: require('./preview/fs/clear_file.code') },
  { value: 'copy_file', label: 'Copy file to another destination', content: require('./preview/fs/copy_file'), code: require('./preview/fs/copy_file.code') },
  { value: 'is_file', label: 'Check if path is file', content: require('./preview/fs/is_file'), code: require('./preview/fs/is_file.code') },
  { value: 'is_dir', label: 'Check if path is directory', content: require('./preview/fs/is_dir'), code: require('./preview/fs/is_dir.code') },
  { value: 'mkdir', label: 'Create directory', content: require('./preview/fs/mkdir'), code: require('./preview/fs/mkdir.code') },
  { value: 'chdir', label: 'Change execution directory (plugins)', content: require('./preview/fs/chdir'), code: require('./preview/fs/chdir.code') },
  { value: 'realpath', label: 'Get full path of a relative path', content: require('./preview/fs/realpath'), code: require('./preview/fs/realpath.code') },
  { value: 'rename', label: 'Rename file or directory', content: require('./preview/fs/rename'), code: require('./preview/fs/rename.code') },
  { value: 'unlink', label: 'Remove file from system (sync)', content: require('./preview/fs/unlink'), code: require('./preview/fs/unlink.code') },
  { value: 'rmdir', label: 'Remove directory with contents', content: require('./preview/fs/rmdir'), code: require('./preview/fs/rmdir.code') },
  { value: 'rmdir_empty', label: 'Remove empty directory', content: require('./preview/fs/rmdir_empty'), code: require('./preview/fs/rmdir_empty.code') },
  { value: 'read_dir', label: 'Read directory contents', content: require('./preview/fs/read_dir'), code: require('./preview/fs/read_dir.code') },
  { value: 'read_dir_glob', label: 'Read directory contents with patterns (advanced)', content: require('./preview/fs/read_dir_glob'), code: require('./preview/fs/read_dir_glob.code') },

  /**
   * Menus
   */
  { value: 'macronMenubar', label: 'Menus', isDisabled: true },
  { value: 'macronMenubar', label: 'Creating advanced menubars', content: require('./preview/menubars/macronMenubar'), code: require('./preview/menubars/macronMenubar.code') },
  { value: 'contextMenu', label: 'Creating context menus', content: require('./preview/menubars/contextMenu'), code: require('./preview/menubars/contextMenu.code') },
]