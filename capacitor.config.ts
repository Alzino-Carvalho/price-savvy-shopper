import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.eprecohein",
  appName: "É Preço Hein",
  webDir: "dist",
  server: {
    // Durante o desenvolvimento o app nativo carrega o preview ao vivo.
    // Para publicar nas lojas, remova o bloco "server" e use o build local (webDir).
    url: "https://id-preview--9ce306db-b8eb-4130-9f53-a2510ecf325c.lovable.app?forceHideBadge=true",
    cleartext: true,
  },
  android: { backgroundColor: "#ffffff" },
  ios: { contentInset: "always" },
};

export default config;
