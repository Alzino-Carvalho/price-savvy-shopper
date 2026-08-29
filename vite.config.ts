// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Gera HTML estático para todas as rotas (necessário para empacotar com Capacitor).
    prerender: { enabled: true, crawlLinks: true },
    // Fallback SPA: qualquer rota não pré-renderizada carrega o app no cliente.
    spa: { enabled: true },
  },
  // Fora do ambiente Lovable (build local), gera saída 100% estática — sem Worker.
  nitro: { preset: "static" },
});
