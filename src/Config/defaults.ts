import * as vscode from 'vscode';

export interface ExtensionSettings {
  autoApply: boolean;
  enableTypeScript: boolean;
  enableJavaScript: boolean;
  enableFormatting: boolean;
  enableAppearance: boolean;
  enableInlayHints: boolean;
  useMaterialIcons: boolean;
}

export const DEFAULT_SETTINGS: Readonly<ExtensionSettings> = {
  autoApply: false,
  enableTypeScript: true,
  enableJavaScript: true,
  enableFormatting: true,
  enableAppearance: true,
  enableInlayHints: true,
  useMaterialIcons: true
};

export const CONFIGURATION_SECTION = 'typescriptEssentials';

export function getExtensionSettings(): ExtensionSettings {
  const config = vscode.workspace.getConfiguration(
    CONFIGURATION_SECTION
  );

  return {
    autoApply: config.get<boolean>(
      'autoApply',
      DEFAULT_SETTINGS.autoApply
    ),
    enableTypeScript: config.get<boolean>(
      'enableTypeScript',
      DEFAULT_SETTINGS.enableTypeScript
    ),
    enableJavaScript: config.get<boolean>(
      'enableJavaScript',
      DEFAULT_SETTINGS.enableJavaScript
    ),
    enableFormatting: config.get<boolean>(
      'enableFormatting',
      DEFAULT_SETTINGS.enableFormatting
    ),
    enableAppearance: config.get<boolean>(
      'enableAppearance',
      DEFAULT_SETTINGS.enableAppearance
    ),
    enableInlayHints: config.get<boolean>(
      'enableInlayHints',
      DEFAULT_SETTINGS.enableInlayHints
    ),
    useMaterialIcons: config.get<boolean>(
      'useMaterialIcons',
      DEFAULT_SETTINGS.useMaterialIcons
    )
  };
}

export function getExtensionSetting<K extends keyof ExtensionSettings>(
  key: K
): ExtensionSettings[K] {
  return getExtensionSettings()[key];
}
