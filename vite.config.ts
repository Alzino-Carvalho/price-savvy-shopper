// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Dentro do ambiente Lovable (preview/publicação) o build continua igual: SSR no Worker.
// Fora dele (seu computador, `npm run build`) o build vira 100% estático para o Capacitor:
// nitro desligado + prerender de todas as rotas em dist/client.
const isLovableBuild = process.env["LOVABLE_SANDBOX"] === "1" || !!process.env["SANDBOX"];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    ...(isLovableBuild ? { server: { entry: "server" } } : {}),
    // Gera HTML estático de cada rota (necessário para empacotar com Capacitor).
    prerender: isLovableBuild ? undefined : { enabled: true, crawlLinks: true },
  },
  ...(isLovableBuild ? {} : { nitro: false as const }),
});
