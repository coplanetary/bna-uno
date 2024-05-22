import { defineConfig, squooshImageService } from 'astro/config';
import lit from '@astrojs/lit';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import icon from 'astro-icon';
import compress from '@playform/compress';
import astrowind from './vendor/integration';
import path from 'path';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter.mjs';

console.log("current one", path.dirname(fileURLToPath(import.meta.url)));
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __dirdir = path.dirname(__dirname);
console.log("current two", __dirdir);
console.log("current three", path.resolve(path.join(__dirname, '..', 'fastronomy')));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// https://astro.build/config
export default defineConfig({
  outDir: '../dist/blazin-fastro',
  output: 'static',
  compressHTML: true,
  scopedStyleStrategy: "class",
  esbuildDeps: ['@copla/fastronomy'],
  site: "https://anarchitecture.wiki",
  integrations: [
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
      applyBaseStyles: false,
    }),
    lit(),
    preact(),
    svelte(),
    sitemap(),
    icon({
        include: {
          tabler: ['*'],
          'flat-color-icons': [
            'template',
            'gallery',
            'approval',
            'document',
            'advertising',
            'currency-exchange',
            'voice-presentation',
            'business-contact',
            'database',
          ],
        },
      },
    ),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './blazin-fastro/src/config.yaml',
    }),
  ],
  image: {
    service: squooshImageService(),
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '~/fastro': path.resolve(path.join(__dirname, '..', 'fastronomy/src')),
        '@copla/fastronomy': path.resolve(path.join(__dirname, '..', 'fastronomy')),
        '@copla/fastro-utils': path.resolve(path.join(__dirname, '..', 'fastro-utils')),
      },
    },
  },
});
