import { useEffect } from "react";

const Coding0819 = () => {
    useEffect(() => {
        // fn_convert_alphabat();
        fn_question1();
    }, []);

    /**
     * [프로그래머스-1] 시저의 암호
     */
    const fn_question1 = () => {
        var answer = '';
        const s = 'AB';
        const n = 1;
        let convertAscii = "";

        // 문자열을 ASCII 코드 형태로 변형한다. => 구분자 (" ")
        s.split("").map((item, idx) => {
            // 공백은 제외한다.
            item !== " " ? convertAscii += `${s.charCodeAt(idx)} ` : convertAscii += ""
        });

        // [응용] 아스키 코드 전체 -> 문자열 변환
        let convertStr = "";        // 최종 결과 값
        convertAscii.split(" ").map((item) => {
            const intItem = parseInt(item);     // org 아스키코드 번호
            let asciiNum = intItem + n;

            if (item !== "") {
                // [CASE1] 대문자 인 경우  
                if (intItem >= 65 && intItem <= 90) {
                    // 소문자가 넘어가는 경우 91 = 91 - 90 + 65


                    asciiNum > 90 ? asciiNum = (asciiNum - 90) + 64 : asciiNum;

                    // if (asciiNum > 90) asciiNum = (asciiNum - 90) + 64;
                }
                // [CASE2] 소문자 인 경우 
                else if (intItem >= 97 && intItem <= 122) {
                    // 대문자가 넘어가는 경우 124 = 124 - 122 + 97
                    if (asciiNum > 122) asciiNum = (asciiNum - 122) + 96;
                }
                convertStr += `${String.fromCharCode(asciiNum)} `
            } else {
                convertStr += ""
            }
        });

        answer = convertStr.trim();
        console.log(answer)
        return answer
    };

    const fn_convert_alphabat = () => {

        const inputStr = "Hello";

        // 문자열 -> 아스키코드 번호
        const stringToAsciiNum = inputStr.charCodeAt(0);
        console.log(stringToAsciiNum);      // 72

        // 아스키코드 번호 -> 문자열
        const asciiToString = String.fromCharCode(72);
        console.log(asciiToString);         // H


        // [응용] 문자열 전체 -> 아스키코드로 변환
        let convertAscii = "";
        Array.from(inputStr).map((item, idx) => {
            convertAscii += `${inputStr.charCodeAt(idx)} `;
        });
        console.log(convertAscii);      // 72 101 108 108 111 

        // [응용] 아스키 코드 전체 -> 문자열 변환
        let convertStr = "";
        convertAscii.split(" ").map((item, idx) => {
            convertStr += String.fromCharCode(parseInt(item));
        })
        console.log(convertStr);        // Hello
    }


    const fn_str_to_array = () => {

        const str = "hello";
        //@ts-ignore
        const strArr = [...str];
        console.log(strArr);


        const strArr2 = Array.from(str);
        console.log(strArr2);
    }


    return (
        <h1>하루에 하나씩은 풀어야징!!</h1>
    )

}
export default Coding0819;