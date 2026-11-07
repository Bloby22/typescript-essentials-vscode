import type { EditorPreset } from '../Types/preset';

export const modernPreset: EditorPreset = {
  id: 'modern',
  name: 'Modern Workspace',
  description: 'A clean and modern Visual Studio Code workspace.',
  settings: {
    // Appearance
    'workbench.colorTheme': 'Dark Modern',
    'workbench.startupEditor': 'none',
    'workbench.editor.enablePreview': false,
    'workbench.editor.showTabs': 'multiple',
    'workbench.editor.tabSizing': 'fit',
    'workbench.editor.highlightModifiedTabs': true,
    'workbench.activityBar.location': 'default',
    'workbench.sideBar.location': 'left',
    'workbench.statusBar.visible': true,
    'workbench.tree.indent': 18,
    'workbench.tree.renderIndentGuides': 'always',

    // Window
    'window.commandCenter': true,
    'window.titleBarStyle': 'custom',
    'window.menuBarVisibility': 'compact',
    'window.zoomLevel': 0,

    // Editor
    'editor.fontFamily': 'Cascadia Code, JetBrains Mono, Consolas, monospace',
    'editor.fontSize': 14,
    'editor.fontWeight': '400',
    'editor.fontLigatures': true,
    'editor.lineHeight': 24,
    'editor.letterSpacing': 0.2,
    'editor.wordWrap': 'off',
    'editor.minimap.enabled': false,
    'editor.renderLineHighlight': 'all',
    'editor.renderWhitespace': 'selection',
    'editor.cursorStyle': 'line',
    'editor.cursorBlinking': 'smooth',
    'editor.cursorSmoothCaretAnimation': 'on',
    'editor.smoothScrolling': true,
    'editor.mouseWheelZoom': true,
    'editor.stickyScroll.enabled': true,
    'editor.padding.top': 12,
    'editor.padding.bottom': 12,

    // Explorer
    'explorer.compactFolders': false,
    'explorer.confirmDelete': true,
    'explorer.confirmDragAndDrop': true,
    'explorer.fileNesting.enabled': true,
    'explorer.fileNesting.expand': false,
    'explorer.fileNesting.patterns': {
      'package.json': 'package-lock.json, npm-shrinkwrap.json',
      'tsconfig.json': 'tsconfig.*.json',
      '.env': '.env.*',
      'README.md': 'LICENSE, CONTRIBUTING.md'
    },

    // Terminal
    'terminal.integrated.defaultProfile.windows': 'PowerShell',
    'terminal.integrated.fontFamily': 'Cascadia Code',
    'terminal.integrated.fontSize': 13,
    'terminal.integrated.cursorStyle': 'line',
    'terminal.integrated.cursorBlinking': true,
    'terminal.integrated.smoothScrolling': true,
    'terminal.integrated.tabs.enabled': true,

    // Git
    'git.autofetch': true,
    'git.confirmSync': true,
    'git.decorations.enabled': true,
    'scm.diffDecorations': 'all',

    // Breadcrumbs
    'breadcrumbs.enabled': true,
    'breadcrumbs.filePath': 'on',
    'breadcrumbs.symbolPath': 'on',

    // Navigation
    'workbench.editor.navigationScope': 'editorGroup',
    'workbench.list.smoothScrolling': true,
    'workbench.list.openMode': 'singleClick',

    // Files
    'files.autoSave': 'off',
    'files.encoding': 'utf8',
    'files.eol': '\n',
    'files.trimTrailingWhitespace': true,
    'files.insertFinalNewline': true
  }
};
