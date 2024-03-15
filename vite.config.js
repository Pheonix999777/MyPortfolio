import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/sass/variables.scss"; @import "./src/sass/mixins.scss";  @import "./src/sass/global.scss";',
      },
    },
  },
});
