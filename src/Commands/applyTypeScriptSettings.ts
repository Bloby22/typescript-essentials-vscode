import * as vscode from 'vscode';

import { typescriptPreset } from '../Presets';
import { applyPreset } from '../Services/settingsService';

export async function applyTypeScriptSettings(): Promise<void> {
  const confirmation = await vscode.window.showWarningMessage(
    'Apply recommended TypeScript development settings?',
    { modal: true },
    'Apply'
  );

  if (confirmation !== 'Apply') {
    return;
  }

  try {
    await applyPreset(typescriptPreset);

    void vscode.window.showInformationMessage(
      'TypeScript settings applied successfully.'
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

    void vscode.window.showErrorMessage(
      `Failed to apply TypeScript settings: ${message}`
    );
  }
}
