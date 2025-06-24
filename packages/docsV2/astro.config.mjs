// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/ukrcode",
  base: "/diui",
  integrations: [mdx(), preact()],
});
