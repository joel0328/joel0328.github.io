export const STATUS_MARK = {
  active: '●',
  planned: '◌',
  shelved: '◐',
  done: '○',
} as const;

export type Status = keyof typeof STATUS_MARK;

export const STATUS_ORDER: Status[] = ['active', 'planned', 'shelved', 'done'];

export function projectNumber(index: number): string {
  return String(index + 1).padStart(2, '0');
}
