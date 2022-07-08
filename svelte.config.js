import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    },
    vite: {
      define: {
        'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
      },
      ssr: {
        noExternal: ["svelte-hero-icons"],
      },
      resolve: {
        alias: {
          $src: path.resolve('src/'),
          $lib: path.resolve('src/lib/'),
          $cmp: path.resolve('src/lib/components/'),
        }
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

export default config;
