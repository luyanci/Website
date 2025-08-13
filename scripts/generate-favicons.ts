#!/usr/bin/env node

import realFavicon from 'cli-real-favicon';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

/**
 * Generates favicons from master picture using cli-real-favicon.
 */
function generateFavicons(): void {
  console.log('⚙️ Generating favicons...');

  realFavicon.generateFavicon(
    {
      masterPicture: path.join(__dirname, '../logo.png'), // Adjust path if needed
      dest: path.join(__dirname, '../docs/public'),
      iconsPath: '/',
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#ffffff',
          margin: '14%'
        },
        desktopBrowser: {},
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            display: 'standalone'
          }
        }
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false
      },
      versioning: {
        paramName: 'v',
        paramValue: '1.0'
      }
    },
    () => {
      console.log('✅ Favicons generated successfully!');
    }
  );
}

generateFavicons();
