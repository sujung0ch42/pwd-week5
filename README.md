# Ajou Campus Foodmap

아주대학교 주변 맛집을 둘러보고, 새로운 맛집을 제보하는 React 웹 서비스입니다.
(아주대학교 디지털미디어학과 · 실전웹서비스개발 5주차 과제)

- 제작자: 202422211 장수정
- GitHub: https://github.com/sujung0ch42/pwd-week5
- 배포 주소(Vercel): 배포 후 추가 예정

## 주요 기능

| 기능 | 설명 |
| --- | --- |
| 맛집 목록 | 가상 데이터로 맛집 카드(사진, 위치, 가격대, 평점, 설명)를 보여줍니다. |
| 카테고리 필터 | 전체 · 한식 · 중식 · 일식 · 양식 · 아시안 · 분식 · 카페 |
| 좋아요 | 카드의 하트를 누르면 `localStorage`(`likedRestaurants`, `restaurantLikes`)에 저장되어 새로고침 후에도 유지됩니다. |
| 맛집 상세 | `/restaurant/:id` 에서 추천 메뉴 등 상세 정보를 보여줍니다. |
| 인기 TOP 5 | 평점이 높은 순서로 5곳을 보여줍니다. |
| 맛집 제보 | React Hook Form으로 입력값을 검사하고, `localStorage`의 `pwd-week5-submissions` 키에 저장합니다. |
| 반응형 | 모바일 화면에서도 메뉴와 카드가 깨지지 않도록 구성했습니다. |

## 사용 기술

React 19 · Vite · React Router v7 · Emotion · React Hook Form · Axios · TanStack React Query · React Icons · React Toastify · React Spinners · Vercel

## 실행 방법

```bash
npm install
npm run dev       # 개발 서버 (http://localhost:5173)
npm run lint      # 코드 검사
npm run build     # 배포용 빌드 (dist/)
npm run preview   # 빌드 결과 확인 (http://localhost:4173)
```

Node.js 24.x 를 권장합니다.

## 폴더 구조

```
src/
├── components/   Header, NotFound, PopularRestaurants, RestaurantCard, RestaurantList, SubmitRestaurant
├── pages/        HomePage, ListPage, DetailPage, PopularPage, SubmitPage
├── services/     api.jsx   (가상 맛집 데이터)
├── styles/       GlobalStyles.jsx
├── App.jsx       라우팅과 전체 레이아웃
└── main.jsx      진입점
```

## 데이터와 저장 방식

- 맛집 목록은 `src/services/api.jsx` 의 가상 데이터입니다. (id 4~6은 "실습용 예시"로 추가한 데이터입니다.)
- 좋아요와 제보는 서버 없이 **현재 브라우저의 LocalStorage** 에만 저장됩니다. 다른 브라우저나 다른 사이트 주소(로컬, Production, Preview)와는 공유되지 않습니다.

## 배포

GitHub 저장소를 Vercel에 연결해 `main` 브랜치에 push 할 때마다 자동 배포됩니다.
`vercel.json` 의 rewrites 설정으로 `/list`, `/restaurant/1` 같은 주소로 직접 접속하거나 새로고침해도 동작합니다.
