import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import pkg from "./package.json";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  dev: {
    assetPrefix: "http://localhost:3002",
  },
  output: {
    assetPrefix: "https://rsbuild-multi-versions-navigation.vercel.app",
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "navigation_app";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "navigation_app",
          exposes: {
            "./app": "./src/App.tsx",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: pkg.dependencies.react,
            },
            "react/jsx-dev-runtime": {
              singleton: true,
              requiredVersion: pkg.dependencies.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: pkg.dependencies["react-dom"],
            },
            "react-router-dom": {
              singleton: true,
              requiredVersion: pkg.dependencies["react-router-dom"],
            },
          },
        }),
      ]);
    },
  },
});
