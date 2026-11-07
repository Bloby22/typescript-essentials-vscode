import type { SettingsMap, SettingsScope } from './settings';

export interface SettingsBackup {
  id: string;
  createdAt: string;
  presetId: string;
  scope: SettingsScope;
  settings: SettingsMap;
}
