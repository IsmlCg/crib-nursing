import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Specify the output directory
  },
  optimizeDeps: {
    include: [
      "react-contexify",
      "react-select",
      "react-bootstrap-table2-filter",
    ],
  },
});
