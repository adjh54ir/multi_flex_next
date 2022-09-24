/**
 * 리터럴 방식을 이용한 정규표현식 모음
 * @description 모든 정규식을 관리하는 코드 페이지
 * @description 해당 정규식을 호출하고 REGEXP_NUMBER.test(value) 값을 통해 true/false 반환을 받는다.
 */

/**
 * [정규식 모음-1] '문자열'에 대한 정규식
 */
// 영문만 입력에 대한 정규식
export const REGEXP_EN = /[a-zA-Z]/g;

// 한글만 입력에 대한 정규식
export const REGEXP_KR = /[ㄱ-ㅎ가-힣]/g;

// 영문 && 한글만 입력에 대한 정규식
export const REGEXP_CHAR = /[a-zA-Zㄱ-ㅎ가-힣]/g;

// 영문 && 한글 && 숫자만 입력에 대한 정규식
export const REGEXP_CHAR_NUM = /[0-9a-zA-Zㄱ-ㅎ가-힣]/g;

// 모든 특수문자에 대한 정규식
export const REGEXP_SPCIALCHAR = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;

// 특수문자 제외에 대한 정규식
export const REGEXP_NOT_SPCIALCHAR = /[^A-Za-z0-9]/gi;
export const REGEXP_NOT_SPCIALCHAR_TYPE2 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

// 사용자 이메일에 대한 정규식
export const REGEXP_USER_EMAIL = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

// 사용자 아이디에 대한 정규식 - 영문 4~10자리
export const REGEXP_USER_ID = /^[A-Za-z0-9]{4,10}$/;

// 사용자 패스워드에 대한 정규식 - 대소문자 + 숫자 + 특수문자 조합으로 10 ~ 128자리로 정의 한다.
export const REGEXP_USER_PW_TYPE1 = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,128}$/;

/**
 * [정규식 모음-2] 숫자에 대한 정규식
 * @description: 일반적인 정규식
 */

// 숫자만 이용하는 정규식
export const REGEXP_NUMBER = /[0-9]/g;

// 숫자가 아닌것에 대한 정규식
export const REGEXP_NO_NUMBER = /[^0-9]/g;

/**
 * [정규식 모음] 핸드폰 번호에 대한 정규식
 * @description: 핸드폰 번호에 대한 정규
 */
// 핸드폰 번호 타입1에 대한 정규식 => ex) 01023205454
export const REGEXP_PHONE_TYPE1 = /^[0-9]{7}$/;
export const REGEXP_KR_PHONE = /^\d{11}$/;

// 핸드폰 번호 타입2에 대한 정규식 => ex) 010-2320-5454
export const REGEXP_PHONE_TYPE2 = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
export const REGEXP_PHONE = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 핸드폰 번호 타입3에 대한 정규식 => ex) +82-010-2320-5454
export const REGEXP_PHONE_TYPE3 = /^\+82[.-]-?(010)-?([0-9]{4})-?([0-9]{4})$/;

// 핸드폰 번호 타입4에 대한 정규식 => ex) +82-10-2320-5454
export const REGEXP_PHONE_TYPE4 = /^\+82[.-]-?(10)-?([0-9]{4})-?([0-9]{4})$/;

/**
 * [정규식 모음-3] 날짜에 대한 정규식
 * @description: 날짜에 대한 정규식
 */
// [Soft] 날짜에 대한 타입1에 대한 정규식 => ex) 2022-08-03 (YYYY-MM-DD)
export const REGEXP_DATE_TYPE1 = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

// [Soft] 날짜에 대한 타입2에 대한 정규식 => ex) 2022/08/03 (YYYY/MM/DD)
export const REGEXP_DATE_TYPE2 = /^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])$/;

// [Soft] 날짜에 대한 타입에 대한 정규식 => ex) 2022.08.03 (YYYY.MM.DD)
export const REGEXP_DATE_TYPE3 = /^\d{4}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])$/;

// [Hard] 날짜에 대한 정규식 => 19xx 20xx년도에 대해서 추가함 -- 강력하게 유효성 검증
export const REGEXP_DATE_TYPE4 = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;

/**
 * [정규식 모음-4] 시간에 대한 정규식
 * @description: 날짜에 대한 정규식
 */
// 시간에 대한 타입1에 대한 정규식 => ex) 13:47(HH24:mm)
export const REGXP_TIME_TYPE1 = /^([1-9]|[01][0-9]|2[0-3]):([0-5][0-9])$/;
