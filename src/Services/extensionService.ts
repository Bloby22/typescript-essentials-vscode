import * as vscode from 'vscode';

export interface RecommendedExtension {
  id: string;
  name: string;
}

export const recommendedExtensions: RecommendedExtension[] = [
  {
    id: 'PKief.material-icon-theme',
    name: 'Material Icon Theme'
  },
  {
    id: 'esbenp.prettier-vscode',
    name: 'Prettier'
  },
  {
    id: 'dbaeumer.vscode-eslint',
    name: 'ESLint'
  }
];

export function isExtensionInstalled(id: string): boolean {
  return vscode.extensions.getExtension(id) !== undefined;
}

export function getMissingExtensions(): RecommendedExtension[] {
  return recommendedExtensions.filter(
    (extension) => !isExtensionInstalled(extension.id)
  );
}

export async function checkRecommendedExtensions(): Promise<void> {
  const missing = getMissingExtensions();

  if (missing.length === 0) {
    return;
  }

  const names = missing.map((extension) => extension.name).join(', ');

  const selection = await vscode.window.showInformationMessage(
    `Recommended extensions are missing: ${names}`,
    'Open Extensions'
  );

  if (selection === 'Open Extensions') {
    await vscode.commands.executeCommand(
      'workbench.extensions.search',
      missing.map((extension) => extension.id).join(' ')
    );
  }
}
