import { defineConfig } from "@umijs/max";
import routes from "./routes";

export default defineConfig({
  hash: true,
  routes,
  proxy: {
    "/api/": {
      target: "https://proapi.azurewebsites.net",
      changeOrigin: true,
      pathRewrite: { "^": "" },
    },
  },
  layout: {
    locale: true,
    title: "观麦科技",
  },
  model: {},
  antd: {},
  request: {},
  mfsu: {
    strategy: "normal",
  },
});
