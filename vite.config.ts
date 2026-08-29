import { defineConfig } from "@lovable.dev/vite-tanstack-config";
const isLovable = process.env.LOVABLE_SANDBOX === "1" || !!process.env.SANDBOX;
export default defineConfig({
  tanstackStart: {
    ...(isLovable ? { server: { entry: "server" } } : {}),
    prerender: { enabled: true, crawlLinks: true },
    spa: { enabled: false },
  },
  nitro: isLovable ? undefined : false,
});
