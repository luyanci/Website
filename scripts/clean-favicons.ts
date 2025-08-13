#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Cleans up unnecessary favicon files in the docs/public folder.
 */
function cleanUpFavicons(): void {
  const publicDir: string = path.join(__dirname, '../docs/public');
  console.log('🧹 Cleaning up unnecessary favicon files...');

  const keepFiles: string[] = [
    'favicon.ico',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'apple-touch-icon.png',
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'safari-pinned-tab.svg',
    'og-image.png',
    'logo.svg',
    'site.webmanifest',
    'browserconfig.xml',
    'robots.txt',
    'sw.js'
  ];

  let removedCount = 0;

  const allFiles: string[] = fs.readdirSync(publicDir);

  allFiles.forEach((file: string) => {
    const filePath: string = path.join(publicDir, file);
    const stat: fs.Stats = fs.statSync(filePath);

    if (stat.isFile()) {
      const isFaviconFile: boolean =
        /^(apple-touch-icon|android-chrome|mstile|favicon|safari-pinned-tab)/.test(file);

      if (isFaviconFile && !keepFiles.includes(file)) {
        console.log(`🗑️ Removing unnecessary: ${file}`);
        fs.unlinkSync(filePath);
        removedCount++;
      } else if (keepFiles.includes(file)) {
        console.log(`✅ Keeping essential: ${file}`);
      }
    }
  });

  console.log(`\n🎉 Cleanup complete! Removed ${removedCount} unnecessary files`);
  console.log(`📦 Kept ${keepFiles.length} essential files for optimal performance`);
}

cleanUpFavicons();
