import * as vscode from 'vscode';

import { registerCommands } from './Commands';
import { initializeBackupService, checkRecommendedExtensions } from './Services';
import { Logger, getErrorMessage } from './Utils';

export function activate(context: vscode.ExtensionContext): void {
  Logger.initialize(context);

  Logger.info('TypeScript Essentials is activating.');

  initializeBackupService(context);
  registerCommands(context);

  Logger.info('Commands registered successfully.');

  void checkRecommendedExtensions().catch((error: unknown) => {
    Logger.error('Failed to check recommended extensions.', error);

    void vscode.window.showWarningMessage(
      `Extension check failed: ${getErrorMessage(error)}`
    );
  });

  Logger.info('TypeScript Essentials activated successfully.');
}

export function deactivate(): void {
  Logger.info('TypeScript Essentials is deactivating.');
}
