import fs from 'fs';

export function getSubdirectories(rootDir: string): string[] {
  return fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}
