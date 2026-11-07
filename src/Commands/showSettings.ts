import * as vscode from 'vscode';

import { getAllPresets } from '../Presets';

export async function showSettings(): Promise<void> {
  const selected = await vscode.window.showQuickPick(
    getAllPresets().map((preset) => ({
      label: preset.name,
      description: `${Object.keys(preset.settings).length} settings`,
      detail: preset.description,
      preset
    })),
    {
      title: 'TypeScript Essentials',
      placeHolder: 'Select a preset to view its settings'
    }
  );

  if (!selected) {
    return;
  }

  const document = await vscode.workspace.openTextDocument({
    language: 'json',
    content: JSON.stringify(selected.preset.settings, null, 2)
  });

  await vscode.window.showTextDocument(document, {
    preview: true
  });
}
