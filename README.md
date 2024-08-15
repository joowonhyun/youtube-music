
## 유튜브 뮤직 클론 코딩 (with TypeScript)
DEMO : https://youtube-music-gray.vercel.app/

## Tech Stack
- Next 14 (App Router), TypeScript, TailwindCSS + shadcn/ui, Zustand

## FILE TREE
- app : 파일 페이지 구성
- components : 공통 컴포넌트 구성 <br/>
  ┗ elements: 컴포넌트 공통 요소 <br/>
  ┗ ui : shadcn/ui 라이브러리 <br/><br/>
- hooks: 커스텀 훅 (주로 상태 관리)
- types: 컴포넌트 타입 모음

```bash
📦app
 ┣ 📂(site)
 ┃ ┣ 📂components
 ┃ ┃ ┗ Category.tsx
 ┃ ┣ error.tsx
 ┃ ┣ layout.tsx
 ┃ ┣ loading.tsx
 ┃ ┗ page.tsx
 ┣ 📂channel
 ┃ ┣ 📂[id]
 ┃ ┃ ┣ error.tsx
 ┃ ┃ ┣ layout.tsx
 ┃ ┃ ┣ loading.tsx
 ┃ ┃ ┗ page.tsx
 ┃ ┗ 📂components
 ┃ ┃ ┗ ChanneHead.tsx
 ┣ 📂explore
 ┃ ┣ 📂components
 ┃ ┃ ┗ Category.tsx
 ┃ ┣ error.tsx
 ┃ ┣ layout.tsx
 ┃ ┣ loading.tsx
 ┃ ┗ page.tsx
 ┣ 📂library
 ┃ ┣ 📂components
 ┃ ┃ ┗ Category.tsx
 ┃ ┣ error.tsx
 ┃ ┣ layout.tsx
 ┃ ┣ loading.tsx
 ┃ ┗ page.tsx
 ┣ 📂playlist
 ┃ ┣ error.tsx
 ┃ ┣ layout.tsx
 ┃ ┣ loading.tsx
 ┃ ┗ page.tsx
 ┣ .DS_Store
 ┣ error.tsx
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┗ loading.tsx

📦components
 ┣ 📂elements
 ┃ ┣ DarkButton.tsx
 ┃ ┣ IconButton.tsx
 ┃ ┣ Logo.tsx
 ┃ ┣ Navigator.tsx
 ┃ ┣ PlayListNav.tsx
 ┃ ┗ WhiteButton.tsx
 ┣ 📂player
 ┃ ┣ PlayerContent.tsx
 ┃ ┗ PlayerWrapper.tsx
 ┣ 📂ui
 ┃ ┣ avatar.tsx
 ┃ ┣ button.tsx
 ┃ ┣ carousel.tsx
 ┃ ┣ drawer.tsx
 ┃ ┣ dropdown-menu.tsx
 ┃ ┗ playerSlider.tsx
 ┣ ErrorMessage.tsx
 ┣ GenreCard.tsx
 ┣ GenreListCarousel.tsx
 ┣ Header.tsx
 ┣ HeaderBgChanger.tsx
 ┣ LoadingBar.tsx
 ┣ PagePadding.tsx
 ┣ PlayListCard.tsx
 ┣ PlayListCarousel.tsx
 ┣ PlayListHead.tsx
 ┣ Sidebar.tsx
 ┣ SongCard.tsx
 ┣ SongCardRowExpand.tsx
 ┣ SongListCarousel.tsx
 ┣ UserIcon.tsx
 ┗ themeProvider.tsx

📦hooks
 ┣ usePlayerState.ts
 ┗ useUIState.ts

📦types
 ┗ index.ts
```

## CONTENTS
1. 반응형 구성 페이지
2. 음악 플레이어 재생 기능 등 ('react-use' 내 useAudio)
