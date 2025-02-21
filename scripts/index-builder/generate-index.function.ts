import fs from 'fs';
import path from 'path';
import { scanMarkdownFiles } from './scan-markdown.files.function';

/**
 * A function that outputs json to an index.json file.
 */
export async function generateIndexFile(rootDir: string) {
  const categories = await scanMarkdownFiles(rootDir);
  const outputPath = path.join(rootDir, 'index.json');
  fs.writeFileSync(outputPath, JSON.stringify(categories, null, 2), 'utf-8');
  console.log(`Index file updated/created at: ${outputPath}`);
}
