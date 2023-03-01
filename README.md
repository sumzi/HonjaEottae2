# 혼자어때2

## 🐸 소개

혼자어때는 혼자 여행하는 사람들을 위한 전국 관광지 조회 사이트입니다. 키워드 검색, 지역별 관광지, 여행코스 추천, 내 주변 관광지를 조회할 수 있습니다. 
전국 관광지 공공데이터 API를 활용하여 개발했습니다.

[혼자어때](https://honjaeottae.store)

[Storybook](https://sumzi.github.io/HonjaEottae2/?path=/story/design-system-color--default)

## 🖥 서비스 화면

### 1. 키워드 검색

![search](https://user-images.githubusercontent.com/77325412/217603221-db5c05ed-3597-41c8-babf-a135d38ba918.gif)

- 키워드를 입력하여 관련 관광지 목록을 조회할 수 있습니다.

### 2. 지역 검색

![area](https://user-images.githubusercontent.com/77325412/217603279-48ead082-579c-4931-b8f4-92f6f0150a04.gif)

- 지역 버튼을 클릭하여 지역별 관광지 목록을 조회할 수 있습니다.

### 3. 여행 코스 검색

![course](https://user-images.githubusercontent.com/77325412/217603369-a2350865-9bba-403a-beef-92f18b0ce3c0.gif)

- 지역 버튼을 클릭하여 지역별 여행코스 목록을 조회할 수 있습니다.

### 4. 내주변관광지 조회

![location](https://user-images.githubusercontent.com/77325412/217603405-b49e8810-c66c-45e2-a071-9888ff7c6fbc.png)

- 현재 사용자 위치 기반으로 2km 이내 관광지 목록을 조회할 수 있습니다.

### 5. 관광지 상세보기

![detail1](https://user-images.githubusercontent.com/77325412/217603433-89c0143c-3a26-47d1-9e46-c59ee27a8186.gif)

- 관광지 상세정보, 설명, 이미지를 조회할 수 있습니다.

![detail2](https://user-images.githubusercontent.com/77325412/217603490-cefe1098-7111-4456-9f42-5c818cfa327b.gif)
   
- 여행코스 관련 데이터를 클릭시 여행코스 상세정보를 조회할 수 있습니다.

## **🛠** 기술 스택

![image](https://user-images.githubusercontent.com/77325412/222233671-79e3f436-5003-4c80-9d4f-58583411531d.png)



## 📁 폴더구조

```
src
├─apis                    : API 명세
├─assets                  : image, svg 파일을 모아둔 폴더
├─components              : 페이지를 구성하는 컴포넌트들을 모아둔 폴더
├─constants               : 상수 파일
├─hooks                   : custom hook을 모아둔 폴더
│  └─queries              : API를 통해 서버와 통신하는 훅을 역할에 분리하여 모아둔 폴더
├─pages                   : 도메인별 페이지 모아둔 폴더
├─styles                  : 프로젝트 스타일 관련 폴더
├─types                   : 타입선언 & 도메인별 타입 
└─utils                   : 유틸함수 
```
