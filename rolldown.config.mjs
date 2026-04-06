import babel from "@rolldown/plugin-babel";
import { createRequire } from "module";
import { defineConfig } from "rolldown";
const require = createRequire(import.meta.url);
const pkg = require("./package.json");
const banner = `/*!
  niconicomments-plugin-niwango v${pkg.version}
  (c) 2023 xpadev-net https://xpadev.net
  Released under the ${pkg.license} License.
*/`;

export default defineConfig({
  input: "src/main.ts",
  tsconfig: "./tsconfig.json",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    name: "PluginNiwango",
    banner,
  },
  plugins: [
    babel({
      presets: ["@babel/preset-typescript", "@babel/preset-env"],
    }),
  ],
});
