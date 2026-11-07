import * as vscode from 'vscode';

import { restoreSettings } from '../Services/backupService';

export async function resetSettings(): Promise<void> {
  const confirmation = await vscode.window.showWarningMessage(
    'Restore your previous VS Code settings from the latest backup?',
    { modal: true },
    'Restore'
  );

  if (confirmation !== 'Restore') {
    return;
  }

  try {
    const restored = await restoreSettings();

    if (!restored) {
      void vscode.window.showWarningMessage(
        'No settings backup is available.'
      );

      return;
    }

    void vscode.window.showInformationMessage(
      'Previous settings restored successfully.'
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

    void vscode.window.showErrorMessage(
      `Failed to restore settings: ${message}`
    );
  }
}
