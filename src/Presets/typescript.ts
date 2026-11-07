import type { EditorPreset } from '../Types/preset';

export const typescriptPreset: EditorPreset = {
  id: 'typescript',
  name: 'TypeScript Development',
  description: 'Optimized TypeScript development with IntelliSense, formatting, and code quality tools.',
  settings: {
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

    // IntelliSense
    'editor.quickSuggestions': {
      other: 'on',
      comments: 'off',
      strings: 'on'
    },
    'editor.suggestOnTriggerCharacters': true,
    'editor.parameterHints.enabled': true,
    'editor.inlineSuggest.enabled': true,
    'editor.suggest.showMethods': true,
    'editor.suggest.showFunctions': true,
    'editor.suggest.showVariables': true,
    'editor.suggest.showClasses': true,
    'editor.suggest.showInterfaces': true,
    'editor.suggest.showProperties': true,
    'editor.suggest.showKeywords': true,
    'editor.suggest.showModules': true,
    'editor.acceptSuggestionOnEnter': 'on',
    'editor.tabCompletion': 'on',
    'editor.snippetSuggestions': 'inline',

    // Editor
    'editor.tabSize': 2,
    'editor.insertSpaces': true,
    'editor.detectIndentation': false,
    'editor.linkedEditing': true,
    'editor.bracketPairColorization.enabled': true,
    'editor.guides.bracketPairs': 'active',
    'editor.guides.indentation': true,

    // Formatting
    'editor.formatOnSave': true,
    'editor.formatOnPaste': true,
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.codeActionsOnSave': {
      'source.fixAll.eslint': 'explicit'
    },

    // ESLint
    'eslint.enable': true,
    'eslint.run': 'onType',
    'eslint.validate': [
      'javascript',
      'typescript',
      'typescriptreact'
    ],

    // Prettier
    'prettier.requireConfig': true,
    'prettier.useEditorConfig': true,

    // Language Settings
    '[typescript]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    },
    '[typescriptreact]': {
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'editor.formatOnSave': true
    }
  }
};
