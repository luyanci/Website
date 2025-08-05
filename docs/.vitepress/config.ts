import {
  defineConfig,
  resolveSiteDataByRoute,
  type HeadConfig
} from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'SukiSU-Ultra',
  description: 'Next-Generation Android Root Solution - Advanced kernel-based root management for Android devices with KernelSU integration',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  
  // Global performance optimizations
  cacheDir: './.vitepress/cache',
  ignoreDeadLinks: false,
  
  // Enhanced markdown with performance focus
  markdown: {
    math: true,
    linkify: true,
    typographer: true,
    lineNumbers: false, // Disable for faster rendering
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Optimized sitemap
  sitemap: {
    hostname: 'https://sukisu.org',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('404'))
        .map((item) => ({
          ...item,
          changefreq: item.url === '/' ? 'daily' : 
                     item.url.includes('/guide/') ? 'weekly' : 'monthly',
          priority: item.url === '/' ? 1.0 : 
                   item.url.includes('/guide/') ? 0.9 : 0.7
        }))
    }
  },

  // Critical performance transformations
  transformPageData(pageData) {
    const canonicalUrl = `https://sukisu.org${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')
    
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
      ['link', { rel: 'preload', href: '/logo.svg', as: 'image' }]
    )
    
    return pageData
  },

  head: [
    // Critical resource hints for global performance
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'dns-prefetch', href: '//github.com' }],
    ['link', { rel: 'dns-prefetch', href: '//t.me' }],
    ['link', { rel: 'dns-prefetch', href: '//sukisu.org' }],
    
    // Essential favicon setup - optimized for performance
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    
    // Apple Touch Icon (covers all iOS devices)
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    
    // Safari Pinned Tab
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#64edff' }],
    ['meta', { name: 'msapplication-square310x310logo', content: '/mstile-310x310.png' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],
    
    // Web App Manifest
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    
    // Theme and app configuration
    ['meta', { name: 'theme-color', content: '#64edff' }],
    ['meta', { name: 'application-name', content: 'SukiSU-Ultra' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'SukiSU-Ultra' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
    
    // Viewport and mobile optimization
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
    
    // Enhanced Open Graph for global sharing
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'SukiSU-Ultra' }],
    ['meta', { property: 'og:image', content: 'https://sukisu.org/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],
    ['meta', { property: 'og:url', content: 'https://sukisu.org/' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:locale:alternate', content: 'zh_CN' }],
    
    // Twitter optimization for global audience
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: '@sukisu_ultra' }],
    ['meta', { property: 'twitter:creator', content: '@sukisu_ultra' }],
    ['meta', { property: 'twitter:image', content: 'https://sukisu.org/og-image.png' }],
    
    // Additional SEO optimizations
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'bingbot', content: 'index, follow' }],
    ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
    
    // Global SEO optimization
    ['meta', { name: 'keywords', content: 'Android root, KernelSU, SukiSU-Ultra, Android kernel, root management, 安卓 root, カーネル, рут' }],
    ['meta', { name: 'author', content: 'SukiSU-Ultra Team' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    
    // Enhanced structured data for global search engines
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'SukiSU-Ultra',
      'description': 'Next-Generation Android Root Solution',
      'applicationCategory': 'SystemApplication',
      'operatingSystem': 'Android',
      'url': 'https://sukisu.org',
      'downloadUrl': 'https://github.com/sukisu-ultra/sukisu-ultra/releases',
      'supportingData': {
        '@type': 'DataCatalog',
        'name': 'Compatibility Database'
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'bestRating': '5',
        'ratingCount': '10000'
      },
      'author': {
        '@type': 'Organization',
        'name': 'SukiSU-Ultra Team',
        'url': 'https://github.com/sukisu-ultra'
      }
    })],
    
    // PWA optimization for global mobile users
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'SukiSU-Ultra' }],
    
    // Cloudflare Web Analytics
    ['script', { 
      defer: '', 
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      'data-cf-beacon': '{"token": "dcc5feef58bf4c56a170a99f4cec4798"}'
    }]
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sukisu-ultra/sukisu-ultra' },
      { 
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><path d="M44,24H4c0,0.338,0,1.662,0,2c0,11.028,8.972,20,20,20s20-8.972,20-20C44,25.662,44,24.338,44,24z"/><circle cx="24" cy="24" r="19" fill="#fff"/><circle cx="24" cy="24" r="19" fill="#fff"/><path d="M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4s20,8.972,20,20S35.028,44,24,44z M24,6C14.075,6,6,14.075,6,24	s8.075,18,18,18s18-8.075,18-18S33.925,6,24,6z"/><path d="M30.899,32.152c0.368-1.129,2.091-12.377,2.304-14.594c0.064-0.671-0.148-1.117-0.563-1.317	c-0.503-0.242-1.247-0.121-2.11,0.19c-1.184,0.427-16.325,6.856-17.2,7.228c-0.83,0.352-1.614,0.737-1.614,1.293	c0,0.391,0.232,0.611,0.872,0.84c0.666,0.237,2.343,0.746,3.334,1.019c0.954,0.263,2.04,0.035,2.649-0.343	c0.645-0.401,8.091-5.383,8.626-5.82c0.534-0.437,0.96,0.123,0.523,0.56c-0.437,0.437-5.548,5.397-6.222,6.084	c-0.818,0.834-0.237,1.698,0.311,2.044c0.627,0.395,5.136,3.419,5.815,3.904c0.679,0.485,1.368,0.705,1.998,0.705	S30.585,33.117,30.899,32.152z"/></svg>'
        }, 
        link: 'https://t.me/sukiksu' 
      }
    ],

    search: {
      provider: 'local'
    }
  },

  locales: {
    root: { 
      label: 'English',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Compatibility', link: '/guide/compatibility' },
          { text: 'Links', link: '/guide/links' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'Introduction', link: '/guide/' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Compatibility', link: '/guide/compatibility' },
                { text: 'Links', link: '/guide/links' }
              ]
            }
          ]
        }
      }
    },
    zh: { 
      label: '简体中文',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '兼容性', link: '/zh/guide/compatibility' },
          { text: '链接', link: '/zh/guide/links' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '开始使用',
              items: [
                { text: '介绍', link: '/zh/guide/' },
                { text: '安装', link: '/zh/guide/installation' },
                { text: '兼容性', link: '/zh/guide/compatibility' },
                { text: '链接', link: '/zh/guide/links' }
              ]
            }
          ]
        }
      }
    }
  },

  vite: {
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: 800,
      assetsInlineLimit: 8192,
      target: 'esnext',
      cssCodeSplit: true,
      sourcemap: false
    },
    
    server: {
      fs: {
        allow: ['..']
      }
    }
  }

})