import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.eprecohein",
  appName: "É Preço Hein",
  webDir: "dist",
  // Modo produção: o app usa o build local em dist/.
  // Para testar com o preview online durante o desenvolvimento,
  // descomente e ajuste o bloco "server" abaixo.
  android: { backgroundColor: "#ffffff" },
  ios: { contentInset: "always" },
};

export default config;
