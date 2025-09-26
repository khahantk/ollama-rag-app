import * as fs from 'fs';

export function loadTextFile(path: string): string {
  return fs.readFileSync(path, 'utf-8');
}
