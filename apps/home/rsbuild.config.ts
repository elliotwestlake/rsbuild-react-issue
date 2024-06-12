import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: "http://localhost:3001",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "home";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "home",
          exposes: {
            "./app": "./src/App.tsx",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
});
