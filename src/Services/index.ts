export {
  applyPreset
} from './settingsService';

export {
  initializeBackupService,
  createSettingsBackup,
  restoreSettings,
  clearSettingsBackup,
  hasSettingsBackup
} from './backupService';

export {
  recommendedExtensions,
  isExtensionInstalled,
  getMissingExtensions,
  checkRecommendedExtensions
} from './extensionService';

export type {
  RecommendedExtension
} from './extensionService';
