import * as vscode from 'vscode';

import type { EditorPreset } from '../Types/preset';

const BACKUP_KEY = 'typescriptEssentials.settingsBackup';

interface SettingBackup {
  key: string;
  value: unknown;
  existed: boolean;
}

interface SettingsBackup {
  presetId: string;
  createdAt: string;
  settings: SettingBackup[];
}

let extensionContext: vscode.ExtensionContext | undefined;

export function initializeBackupService(
  context: vscode.ExtensionContext
): void {
  extensionContext = context;
}

function getContext(): vscode.ExtensionContext {
  if (!extensionContext) {
    throw new Error('Backup service has not been initialized.');
  }

  return extensionContext;
}

export function hasSettingsBackup(): boolean {
  return getContext().globalState.get<SettingsBackup>(BACKUP_KEY) !== undefined;
}

export async function createSettingsBackup(
  preset: EditorPreset
): Promise<void> {
  const context = getContext();

  if (hasSettingsBackup()) {
    throw new Error(
      'A settings backup already exists. Restore it before applying another preset.'
    );
  }

  const settings: SettingBackup[] = [];

  for (const key of Object.keys(preset.settings)) {
    const configuration = vscode.workspace.getConfiguration();
    const inspection = configuration.inspect<unknown>(key);

    if (!inspection) {
      throw new Error(`Unknown VS Code setting: ${key}`);
    }

    settings.push({
      key,
      value: inspection.globalValue,
      existed: inspection.globalValue !== undefined
    });
  }

  const backup: SettingsBackup = {
    presetId: preset.id,
    createdAt: new Date().toISOString(),
    settings
  };

  await context.globalState.update(BACKUP_KEY, backup);
}

export async function restoreSettings(): Promise<boolean> {
  const context = getContext();
  const backup = context.globalState.get<SettingsBackup>(BACKUP_KEY);

  if (!backup) {
    return false;
  }

  const configuration = vscode.workspace.getConfiguration();

  for (const setting of backup.settings) {
    await configuration.update(
      setting.key,
      setting.existed ? setting.value : undefined,
      vscode.ConfigurationTarget.Global
    );
  }

  await context.globalState.update(BACKUP_KEY, undefined);

  return true;
}

export async function clearSettingsBackup(): Promise<void> {
  await getContext().globalState.update(BACKUP_KEY, undefined);
}
