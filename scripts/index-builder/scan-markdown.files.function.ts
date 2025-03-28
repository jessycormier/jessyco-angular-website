import path from 'path';
import { Category } from './category.interface';
import { extractFrontmatter } from './extract-frontmatter.function';
import { getMarkdownFiles } from './get-markdown-files.function';
import { getSubdirectories } from './get-sub-directories.function';
import { MarkdownItem } from './markdown-item.interface';

interface CategoriesAndLatest {
  categories: Category[];
  latest?: MarkdownItem[];
}

export async function scanMarkdownFiles(rootDir: string): Promise<CategoriesAndLatest> {
  const categories: Category[] = [];
  const subDirs = getSubdirectories(rootDir);
  let allItems: MarkdownItem[] = [];

  for (const subdir of subDirs) {
    const dirPath = path.join(rootDir, subdir);
    const files = getMarkdownFiles(dirPath);

    const items = files.map((filePath) => extractFrontmatter(subdir, filePath)).filter(Boolean) as MarkdownItem[];
    allItems = allItems.concat(items);

    categories.push({
      name: subdir.replace(/-/g, ' '),
      path: subdir,
      count: items.length,
      items: items.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id)),
    });
  }
  const sortedItems = allItems.sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));

  return {
    categories,
    latest: sortedItems.slice(0, 10),
  } as CategoriesAndLatest;
}
