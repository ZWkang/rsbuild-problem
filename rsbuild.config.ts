import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

import path from 'path';

function makePathAlias(name: string) {
  return path.resolve(__dirname, name);
}

console.log('makePathAlias', makePathAlias('src'));

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    alias: {
      '@': makePathAlias('src')
    }
  },
});
