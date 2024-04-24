import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';
import preact from '@astrojs/preact';
import svelte from '@astrojs/svelte';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  outDir: '../dist/blazin-fastro',
  site: "https://anarchitecture.wiki",
  integrations: [
    lit(),
    preact(),
    svelte(),
    partytown(),
    sitemap(),
    tailwind({
      configFile: fileURLToPath(
        new URL('./tailwind.config.cjs', import.meta.url)
      ),
    }),
  ],
});
