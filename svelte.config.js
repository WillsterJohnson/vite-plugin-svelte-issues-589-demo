import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import autoprefixer from "autoprefixer";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({
    script: true,
    style: { css: { postcss: { plugins: [autoprefixer()] } } },
  }),
  compilerOptions: {},

  kit: {
    adapter: adapter(),
    files: {
      appTemplate: "app/app.html",
      assets: "app/assets",
      errorTemplate: "app/error.html",
      hooks: {
        client: "app/client.hooks.ts",
        server: "app/server.hooks.ts",
      },
      lib: "app/lib",
      params: "app/params",
      routes: "app/routes",
    },
    typescript: {
      config(config) {
        config.compilerOptions.paths["@smelterial/smelterial"] = ["../src"];
        config.compilerOptions.paths["@smelterial/smelterial/*"] = ["../src/*"];
        return config;
      },
    },
  },

  package: {
    dir: "package",
    source: "src",
  },
};

export default config;
