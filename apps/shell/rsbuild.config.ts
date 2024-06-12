import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import pkg from "./package.json";

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "shell";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "shell",
          remotes: {
            home:
              process.env.VERCEL_ENV === "production"
                ? "home@https://rsbuild-multi-versions.vercel.app/mf-manifest.json"
                : "home@http://localhost:3001/mf-manifest.json",
            navigation_app:
              process.env.VERCEL_ENV === "production"
                ? "navigation_app@https://rsbuild-multi-versions-navigation.vercel.app/mf-manifest.json"
                : "navigation_app@http://localhost:3002/mf-manifest.json",
          },
          shared: {
            react: {
              singleton: true,
              requiredVersion: pkg.dependencies.react,
            },
            // "react/jsx-dev-runtime": {
            //   singleton: true,
            //   requiredVersion: pkg.dependencies.react,
            // },
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
