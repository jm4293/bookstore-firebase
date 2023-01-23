# 도서판매 프로젝트
1. 회원가입 - firebase
2. 로그인 - firebase
3. 장바구니 - localstorage

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

## 실행 과정
- 클라이언트 실행 -> localhost:3000 접속

## 시작일
- 23.01.12

## 컴포넌트 순서
- 회원가입: SignUp.jsx -> Person.jsx -> Agree.jsx -> Register.jsx -> Home.jsx
- 로그인: SignIn.jsx -> Home.jsx

## 구현된 기능
- 관리자 로그인: ID: admin@gmail.com, PASSWORD: 123456, 관리자 로그인시 관리자페이지 버튼이 나타남 -> 관리자 페이지에서 상품 추가 가능
- 사용자 로그인: ID: abc@gmail.com, PASSWORD: 123456 or 회원가입하고 로그인 가능
