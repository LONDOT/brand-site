import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change base to "/REPO_NAME/" when deploying to GitHub Pages under a project repo.
export default defineConfig({
  plugins: [react()],
  base: "/brand-site/",  // repo 이름인 brand-site로 설정
});
