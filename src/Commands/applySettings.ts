import * as vscode from 'vscode';

import { getAllPresets } from '../Presets';
import { applyPreset } from '../Services/settingsService';

export async function applySettings(): Promise<void> {
  const presets = getAllPresets();

  const selected = await vscode.window.showQuickPick(
    presets.map((preset) => ({
      label: preset.name,
      description: preset.id,
      detail: preset.description,
      preset
    })),
    {
      placeHolder: 'Select a settings preset',
      title: 'TypeScript Essentials'
    }
  );

  if (!selected) {
    return;
  }

  const confirmation = await vscode.window.showWarningMessage(
    `Apply the "${selected.preset.name}" preset to your VS Code settings?`,
    { modal: true },
    'Apply'
  );

  if (confirmation !== 'Apply') {
    return;
  }

  try {
    await applyPreset(selected.preset);

    void vscode.window.showInformationMessage(
      `Preset "${selected.preset.name}" applied successfully.`
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);

    void vscode.window.showErrorMessage(
      `Failed to apply settings: ${message}`
    );
  }
}
