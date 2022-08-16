/**
 * [정의] moment Format Type 지정
 * @kind {enum}
 */
export const enum MOMENT_FORMAT_TYPE {
    year = 'YYYY',                  // 년도만 출력
    month = 'MM',                   // 달만 출력
    day = 'DD',                     // 일자만 출력
    semi = 'YYYY-MM-DD',            // 특수문자 있는 년도-달-일자 출력
    orgSemi = "YYYYMMDD",           // 특수문자 없는 년도달일자
    krSemi = "YYYY년 MM월 DD일",      // 한글로 구성된 년도 달 일자
    full = 'YYYY-MM-DD kk:mm:ss',   // 년도-달-일자 시간-분-초 출력
};



