# LONDOT — 브랜드 소개 원페이지 사이트

Vite + React + Tailwind 기반. GitHub Pages 배포 가능.

## 로컬 실행
```bash
npm install
npm run dev
```

## GitHub 저장소 연결
```bash
git init
git remote add origin https://github.com/USERNAME/REPO.git
git add .
git commit -m "Add LONDOT brand intro site"
git branch -M main
git push -u origin main
```

## GitHub Pages 배포
1) `vite.config.js`의 `base` 값을 `"/REPO/"`로 변경하세요. 사용자/조직 페이지가 아니라 **프로젝트 페이지** 배포 시 필요합니다.
2) gh-pages 브랜치에 정적 파일을 배포합니다.
```bash
npm run deploy
```
3) GitHub → Settings → Pages → Branch: `gh-pages` 선택.

배포 URL 예시: `https://USERNAME.github.io/REPO`

## 구성
- React 18, Vite 5
- TailwindCSS 3
- framer-motion, lucide-react
- 컴포넌트: `src/LONDOTHome.jsx`

작성일: 2025-09-18
