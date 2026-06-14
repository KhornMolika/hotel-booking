import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    proxy: {
      "/.well-known": {
        target: "http://localhost:5173", 
        bypass: (req, res) => {
          if (res) {
            res.statusCode = 404;
            res.end("Not found");
          }
          return;
        },
      },
    },
  },
});
