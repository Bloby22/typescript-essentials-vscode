import * as vscode from 'vscode';

import { applySettings } from './applySettings';
import { applyTypeScriptSettings } from './applyTypeScriptSettings';
import { resetSettings } from './resetSettings';
import { showSettings } from './showSettings';

export function registerCommands(
  context: vscode.ExtensionContext
): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'typescriptEssentials.applySettings',
      applySettings
    ),
    vscode.commands.registerCommand(
      'typescriptEssentials.applyTypeScriptSettings',
      applyTypeScriptSettings
    ),
    vscode.commands.registerCommand(
      'typescriptEssentials.resetSettings',
      resetSettings
    ),
    vscode.commands.registerCommand(
      'typescriptEssentials.showSettings',
      showSettings
    )
  );
}
