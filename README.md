# MULTI-FLEX 토이 프로젝트

## 프로젝트 설명

    해당 프로젝트는 여러가지 공통 유틸, 정규식 등을 관리하며 구성하고 싶었던 기능들을 구성하는 목적으로 작성한 프로젝트입니다.

<br>

## 프로젝트 개발환경

| 분류                      | 내용                                | 비고 |
| :------------------------ | ----------------------------------- | ---- |
| 언어                      | Javascript/ Typescript, HTML5, CSS3 | -    |
| 프레임워크                | React Framework, Next.js Framework  | -    |
| 패키지 매니져             | yarn                                | -    |
| 주요 라이브러리           | -                                   | -    |
| 기타 라이브러리           | momnet, base-64, envdot             | -    |
| 상태관리 라이브러리       | Context / Reudx,Redux-Saga          | -    |
| 데이터 통신 라이브러리    | React-Query                         | -    |
| 코드 컨벤션               | ESLint / Prettier                   | -    |
| UI 프레임워크 /라이브러리 | Tailwinn CSS, Emotion               | -    |
| 형상관리                  | Github                              | -    |

</br>

## 프로젝트 주요 기능

---

</br>

### 1. 모듈 기능

| 번호 | 모듈명                | 내용                                                         | 파일 경로            | 비고                                       |
| :--: | :-------------------- | :----------------------------------------------------------- | -------------------- | :----------------------------------------- |
|  1   | 로또 번호 생성 모듈   | 원하는 게임 수 만큼 로또 번호를 자동 생성해주는 기능         | lotto/main           | -                                          |
|  2   | 자식 혈액형 모듈      | 엄마, 아빠의 혈액형을 선택하여 자식의 혈액형을 도출하는 기능 | bloodType/main       | -                                          |
|  3   | 국가/수도 맞추기 모듈 | 국가/수도 맞추기 게임 기능                                   | matchingCountry/main | 외교부\_국가∙지역별 일반정보 Open API 활용 |

<br>

### 2. 유틸

- CommonStrUtil.tsx : 공통 문자열 관련 유틸
- CommonNumUtil.tsx : 공통 숫자 관련 유틸
- CommonConvertUtil.tsx: 공통 변환 유틸
- ConmmonRegExpUtils.tsx: 공통 정규식 유틸

- CommonCode.tsx: 공통 코드 관리
- CommonCodeRegExp.tsx: 정규식 코드 관리
