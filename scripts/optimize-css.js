#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { glob } from 'glob'

console.log('🎯 Post-build CSS optimization starting...')

const distPath = 'docs/.vitepress/dist'

async function optimizeBuiltCSS() {
  try {
    // Find CSS files
    const cssFiles = await glob(join(distPath, '**/*.css'))
    console.log(`📁 Found ${cssFiles.length} CSS files`)
    
    let totalSaved = 0
    
    for (const cssFile of cssFiles) {
      const originalCSS = readFileSync(cssFile, 'utf8')
      const originalSize = Buffer.byteLength(originalCSS, 'utf8')
      
      // Remove unused VitePress features CSS patterns
      let optimizedCSS = originalCSS
        // Remove sponsor-related styles
        .replace(/\.VPSponsor[^}]*}/g, '')
        // Remove team member styles
        .replace(/\.VPTeamMembers?[^}]*}/g, '')
        // Remove footer styles if not used
        .replace(/\.VPDocFooter[^}]*}/g, '')
        // Remove carbon ads
        .replace(/\.VPCarbonAds[^}]*}/g, '')
        // Remove algolia search if using local search
        .replace(/\.VPAlgoliaSearchBox[^}]*}/g, '')
        // Remove custom block styles we don't use
        .replace(/\.custom-block\.(\w+)[^}]*}/g, '')
        // Remove badge styles if not used
        .replace(/\.badge[^}]*}/g, '')
        // Remove medium zoom styles
        .replace(/\.medium-zoom[^}]*}/g, '')
        // Remove empty rules
        .replace(/[^}]*{\s*}/g, '')
        // Remove duplicate whitespace
        .replace(/\s+/g, ' ')
        // Remove comments
        .replace(/\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\//g, '')
        // Optimize at-rules we don't need
        .replace(/@supports[^{]*{[^}]*}/g, '')
        // Remove empty lines
        .replace(/\n\s*\n/g, '\n')
        .trim()
      
      const optimizedSize = Buffer.byteLength(optimizedCSS, 'utf8')
      const saved = originalSize - optimizedSize
      totalSaved += saved
      
      if (saved > 0) {
        writeFileSync(cssFile, optimizedCSS)
        console.log(`✅ ${cssFile.replace(distPath, '')}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${((saved/originalSize)*100).toFixed(1)}% saved)`)
      } else {
        console.log(`ℹ️  ${cssFile.replace(distPath, '')}: No optimization needed`)
      }
    }
    
    console.log(`\n🎉 Total CSS savings: ${(totalSaved/1024).toFixed(1)}KB`)
    
  } catch (error) {
    console.error('❌ Optimization failed:', error)
  }
}

optimizeBuiltCSS()
