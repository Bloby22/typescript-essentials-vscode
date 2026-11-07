export interface EditorPreset {
    id: string;
    name: string;
    description: string;
    settings: Record<string, unknown>;
}

export type PresetId = 'modern' | 'typescript' | 'custom';
