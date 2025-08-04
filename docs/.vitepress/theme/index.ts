// Lean theme override that only loads what we need
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './style.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Only add enhancements that are actually used
    if (DefaultTheme.enhanceApp) {
      DefaultTheme.enhanceApp({ app, router, siteData })
    }
    
    // Optimize theme loading
    if (typeof window !== 'undefined') {
      // Load non-critical styles asynchronously
      const loadNonCriticalStyles = () => {
        // Remove unused VitePress features we don't need
        const unusedSelectors = [
          '[class*="VPSponsor"]',
          '[class*="VPTeamMembers"]', 
          '[class*="VPLastUpdated"]',
          '[class*="VPDocFooter"]'
        ]
        
        // Remove unused style blocks
        unusedSelectors.forEach(selector => {
          const elements = document.querySelectorAll(selector)
          elements.forEach(el => {
            if (el.parentNode) {
              el.parentNode.removeChild(el)
            }
          })
        })
      }
      
      // Run optimization after page load
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadNonCriticalStyles)
      } else {
        loadNonCriticalStyles()
      }
    }
  }
}

export default theme
