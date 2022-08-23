import { useEffect } from "react";

const coding0823 = () => {

    useEffect(() => {
        fn_question1();

    }, []);


    /**
     * 배열을 3개로 나누고 최소값 최대값 비교한다.
     * @returns 
     */
    const fn_question1 = () => {
        let answer = "";

        const k = 3;
        let bundleArr = [];


        // for (let i = 0; i < inputArr.length; i += k) {
        //     bundleArr.push(inputArr.slice(i, i + k));
        // }
        // console.log(bundleArr);


        // const filterArr = inputArr.filter((item, idx) => idx % 3 === 2);
        // console.log(filterArr);

        const _inputNumArr = [4, 2, 1, 5, 17, 23, 10, 11];

        // 숫자 '오름차순' 정렬
        _inputNumArr.sort((a: number, b: number) => a - b);


        // 숫자 '내림차순' 정렬
        _inputNumArr.sort((a: number, b: number) => b - a);
        console.log(..._inputNumArr);


        const _inpuAlphaArr = ["b", "C", "a", "D", "z", 'Z', 'h', "H"]

        // 문자열 '오름차순' 정렬 
        // 대소문자의 구분 O - 대문자 >> 소문자 순으로 정렬.
        _inpuAlphaArr.sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
        console.log(..._inpuAlphaArr);

        // 문자열 '내림차순' 정렬
        // 대소문자의 구분 O - 대문자 >> 소문자 순으로 정렬.
        _inpuAlphaArr.sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
        console.log(..._inpuAlphaArr);

        // 문자열의 '오름차순' 정렬 - 대소문자의 구분 X
        _inpuAlphaArr.sort((prev, curr) => prev.localeCompare(curr));
        console.log(..._inpuAlphaArr);

        // 문자열의 '내림차순' 정렬 - 대소문자의 구분 X
        _inpuAlphaArr.sort((prev, curr) => curr.localeCompare(prev));
        console.log(..._inpuAlphaArr);








        return answer;
    }

    return (
        <>
            <h1> 수고했어 오늘도~~</h1>
        </>
    )

}
export default coding0823;