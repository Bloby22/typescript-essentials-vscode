import type { EditorPreset } from '../Types/preset';

export const customPreset: EditorPreset = {
  id: 'custom',
  name: 'Bloby Custom Settings',
  description: 'Personal Visual Studio Code settings optimized for TypeScript and JavaScript development.',
  settings: {
    // Appearance
    'workbench.colorTheme': 'Dark Modern',
    'workbench.iconTheme': 'material-icon-theme',
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

    // Material Icon Theme
    'material-icon-theme.activeIconPack': 'nest',
    'material-icon-theme.hidesExplorerArrows': false,
    'material-icon-theme.folders.theme': 'specific',

    // Editor
    'editor.fontFamily': 'Cascadia Code, JetBrains Mono, Consolas, monospace',
    'editor.fontSize': 14,
    'editor.fontWeight': '400',
    'editor.fontLigatures': true,
    'editor.lineHeight': 24,
    'editor.letterSpacing': 0.2,
    'editor.tabSize': 2,
    'editor.insertSpaces': true,
    'editor.detectIndentation': false,
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
    'editor.linkedEditing': true,
    'editor.padding.top': 12,
    'editor.padding.bottom': 12,
    'editor.bracketPairColorization.enabled': true,
    'editor.guides.bracketPairs': 'active',
    'editor.guides.indentation': true,

    // Paste
    'editor.formatOnPaste': false,
    'editor.autoIndent': 'advanced',
    'editor.trimAutoWhitespace': true,

    // IntelliSense
    'editor.quickSuggestions': {
      other: 'on',
      comments: 'off',
      strings: 'on'
    },
    'editor.suggestOnTriggerCharacters': true,
    'editor.parameterHints.enabled': true,
    'editor.inlineSuggest.enabled': true,
    'editor.acceptSuggestionOnEnter': 'on',
    'editor.tabCompletion': 'on',
    'editor.snippetSuggestions': 'inline',

    // TypeScript
    'typescript.validate.enable': true,
    'typescript.suggest.enabled': true,
    'typescript.suggest.autoImports': true,
    'typescript.suggest.completeFunctionCalls': true,
    'typescript.updateImportsOnFileMove.enabled': 'always',
    'typescript.preferences.importModuleSpecifier': 'relative',
    'typescript.preferences.importModuleSpecifierEnding': 'js',
    'typescript.preferences.quoteStyle': 'single',

    // TypeScript Inlay Hints
    'typescript.inlayHints.parameterNames.enabled': 'all',
    'typescript.inlayHints.parameterTypes.enabled': true,
    'typescript.inlayHints.variableTypes.enabled': true,
    'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
    'typescript.inlayHints.enumMemberValues.enabled': true,

    // JavaScript
    'javascript.validate.enable': true,
    'javascript.suggest.enabled': true,
    'javascript.suggest.autoImports': true,
    'javascript.updateImportsOnFileMove.enabled': 'always',
    'javascript.preferences.quoteStyle': 'single',

    // Formatting
    'editor.formatOnSave': true,
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': 'explicit'
    },

    // ESLint
    'eslint.enable': true,
    'eslint.run': 'onType',
    'eslint.validate': [
      'javascript',
      'javascriptreact',
      'typescript',
      'typescriptreact'
    ],

    // Prettier
    'prettier.requireConfig': true,
    'prettier.useEditorConfig': true,
    'prettier.singleQuote': true,
    'prettier.semi': true,
    'prettier.tabWidth': 2,
    'prettier.trailingComma': 'none',

    // Language Settings
    '[typescript]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    },
    '[typescriptreact]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    },
    '[javascript]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    },
    '[javascriptreact]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    },

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

    // Files
    'files.autoSave': 'off',
    'files.encoding': 'utf8',
    'files.eol': '\n',
    'files.trimTrailingWhitespace': true,
    'files.insertFinalNewline': true,

    // Search
    'search.exclude': {
      '**/node_modules': true,
      '**/dist': true,
      '**/coverage': true,
      '**/.git': true
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
    'breadcrumbs.symbolPath': 'on'
  }
};
