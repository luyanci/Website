import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

function cleanUpFavicons(): void {
  const publicDir: string = path.join(__dirname, '../docs/public');
  const distDir: string = path.join(__dirname, '../docs/.vitepress/dist');
  
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
    'manifest.webmanifest',
    'browserconfig.xml',
    'robots.txt',
    'sw.js',
    '_headers',
    'HarmonyOS_Sans_SC.ttf'
  ];

  const cleanDirectory = (dir: string, label: string) => {
    if (!fs.existsSync(dir)) return;
    
    let removedCount = 0;
    const allFiles: string[] = fs.readdirSync(dir);

    console.log(`\n🧹 Cleaning ${label}...`);

    allFiles.forEach((file: string) => {
      const filePath: string = path.join(dir, file);
      const stat: fs.Stats = fs.statSync(filePath);

      if (stat.isFile()) {
        const isFaviconFile: boolean =
          /^(apple-touch-icon|apple-touch-startup|android-chrome|mstile|favicon|safari-pinned-tab)/.test(file);

        if (isFaviconFile && !keepFiles.includes(file)) {
          console.log(`🗑️ Removing unnecessary: ${file}`);
          fs.unlinkSync(filePath);
          removedCount++;
        } else if (keepFiles.includes(file)) {
          console.log(`✅ Keeping essential: ${file}`);
        }
      }
    });

    console.log(`📦 ${label}: Removed ${removedCount} files, kept essential files`);
  };

  cleanDirectory(publicDir, 'source directory');
  cleanDirectory(distDir, 'dist directory');
}

cleanUpFavicons();
