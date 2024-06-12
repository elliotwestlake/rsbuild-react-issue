import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

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
                ? "https://rsbuild-multi-versions.vercel.app/mf-manifest.json"
                : "http://localhost:3001/mf-manifest.json",
          },
          shared: ["react", "react-dom"],
        }),
      ]);
    },
  },
});
