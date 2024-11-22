import { defineConfig } from 'astro/config';

// in a real-world scenario, this would be provided a separate package
import customFrameworkRenderer from 'custom-renderer';

// importing the node adapter for SSR, preview mode
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({

  output: 'hybrid',

  integrations: [customFrameworkRenderer()],

  // the node adapter allows for server-side rendering and preview mode
  adapter: node({
    mode: 'standalone'
  })
});
