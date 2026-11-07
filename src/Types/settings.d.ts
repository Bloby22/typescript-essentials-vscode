export type SettingValue = unknown;

export type SettingsMap = Record<string, SettingValue>;

export type SettingsScope = 'global' | 'workspace';

export interface SettingsOptions {
  scope: SettingsScope;
  overwrite: boolean;
  createBackup: boolean;
}
