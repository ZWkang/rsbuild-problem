import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

import path from "path";

function pathJoin(name: string) {
  return path.join(__dirname, name);
}

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    bundlerChain: (config, { CHAIN_ID, env }) => {
      config.module.rules.delete(CHAIN_ID.RULE.SVG);
      const svgLoader = config.module.rule(CHAIN_ID.RULE.SVG);
      svgLoader
        .test(/\.svg$/i)
        .use("custom-load-vue")
        .loader(pathJoin("./plugin-svg.js"))
        .end();
    },
  },
  output: {
    polyfill: "off",
  },
});
