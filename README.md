# 도서판매 프로젝트
1. 회원가입 - firebase
2. 로그인 - firebase
3. 장바구니 - firebase or localstorage

## 개발언어
- React
- redux-toolkit
- firebase

## 추가 패키지
- styled-components
  - npm install styled-components
  - version: 5.3.6

- react-router-dom
  - npm install react-router-dom --save
  - version: 6.4.2

- firebase
  - npm install firebase
  - version: 9.15.0

## 실행 방법
- npm start
- https://bookstore-6c407.firebaseapp.com/

## 진행 상황
- firebase 아이디/비밀번호 로그인 구현
- redux로 로그인이 되어있는지 확인 구현(Header와 Detail에서 사용)
- 관리자 아이디 접속하면 관리자 페이지 버튼 구현
- 관리자 페이지에서 상품 추가 구현
- 홈페이지에 있는 상품 클릭시 상품 상세보기 화면 구현
- 아이디마다 장바구니 구현을 위해 firebase에 저장 및 진행중

## 로그인 정보
- 관리자 로그인
  - ID: admin@gmail.com
  - PASSWORD: 123456
  - 관리자 로그인시 관리자페이지 버튼이 나타남 -> 관리자 페이지에서 상품 추가 가능
- 사용자 로그인
  - ID: abc@gmail.com
  - PASSWORD: 123456
  - 또는 회원가입하고 로그인 가능

## 컴포넌트 순서
- 회원가입: SignUp.jsx -> Person.jsx -> Agree.jsx -> Register.jsx -> Home.jsx
- 로그인: SignIn.jsx -> Home.jsx
