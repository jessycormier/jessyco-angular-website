import fs from 'fs';
import path from 'path';
import { scanMarkdownFiles } from './scan-markdown.files.function';

/**
 * A function that outputs json to an index.json file.
 */
export async function generateIndexFile(rootDir: string)
{
  const categoriesAndLatest = await scanMarkdownFiles(rootDir);
  console.log('Categories found:', categoriesAndLatest);
  if (!categoriesAndLatest.categories || categoriesAndLatest.categories.length === 0) {
    console.warn('No categories found. Index file will not be created.');
    return;
  }

  const outputPath = path.join(rootDir, 'index.json');
  fs.writeFileSync(outputPath, JSON.stringify(categoriesAndLatest, null, 2), 'utf-8');
  console.log(`Index file updated/created at: ${outputPath}`);

  // Generate routes.txt
  const routes = [];
  for (const category of categoriesAndLatest.categories) {
    routes.push(`/${category.path}`);
    for (const item of category.items) {
      routes.push(`/${category.path}/${item.path.split('/').pop()}`);
    }
  }
  const routesPath = path.join(rootDir, 'routes.txt');
  fs.writeFileSync(routesPath, routes.join('\n'), 'utf-8');
  console.log(`Routes file updated/created at: ${routesPath}`);
}
