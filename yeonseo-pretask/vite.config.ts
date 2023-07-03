import { defineConfig } from "vite";
//svg 컴포넌트로 import 플러그인
import svgr from "vite-plugin-svgr";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
