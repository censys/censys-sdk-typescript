import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    test: {
      globals: true,
      environment: "node",
    },
    define: {
      "process.env.ORG_ID": JSON.stringify(env.ORG_ID),
      "process.env.TOKEN": JSON.stringify(env.TOKEN),
    },
  };
});
