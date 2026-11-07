import * as vscode from 'vscode';

import type { EditorPreset } from '../Types/preset';

import {
  createSettingsBackup,
  hasSettingsBackup
} from './backupService';

export async function applyPreset(
  preset: EditorPreset
): Promise<void> {
  if (hasSettingsBackup()) {
    throw new Error(
      'Restore your previous settings before applying another preset.'
    );
  }

  const configuration = vscode.workspace.getConfiguration();

  // Validate settings before creating a backup
  for (const key of Object.keys(preset.settings)) {
    if (!configuration.inspect(key)) {
      throw new Error(`Unknown VS Code setting: ${key}`);
    }
  }

  // Save original settings
  await createSettingsBackup(preset);

  // Apply preset settings
  for (const [key, value] of Object.entries(preset.settings)) {
    await configuration.update(
      key,
      value,
      vscode.ConfigurationTarget.Global
    );
  }
}
