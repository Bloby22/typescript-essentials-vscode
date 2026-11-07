import type { EditorPreset, PresetId } from '../Types/preset';
import { modernPreset } from './modern';
import { typescriptPreset } from './typescript';
import { customPreset } from './custom';

export const presets: Record<PresetId, EditorPreset> = {
  modern: modernPreset,
  typescript: typescriptPreset,
  custom: customPreset
};

export function getPreset(id: PresetId): EditorPreset {
  return presets[id];
}

export function getAllPresets(): EditorPreset[] {
  return Object.values(presets);
}

export function hasPreset(id: string): id is PresetId {
  return Object.prototype.hasOwnProperty.call(presets, id);
}

export { modernPreset, typescriptPreset, customPreset };
