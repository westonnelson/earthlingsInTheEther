import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://astroship.web3templates.com",
  integrations: [tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), mdx({
    // `syntaxHighlight` inherited from Markdown

    // `gfm` overridden to `false`
    gfm: false,
    // Markdown config now ignored
    extendMarkdownConfig: false
    // No `remarkPlugins` applied
  }), sitemap()],
  output: "server",
  adapter: vercel()
});