import React, { useEffect } from 'react';

const Coding0815 = () => {
    useEffect(() => {
        // fn_question1();
        // fn_question2();
        // fn_question3();
        fn_reverse();
    }, []);

    const fn_reverse = () => {
        const check = '-1.238923';

        console.log(parseInt(check));

        console.log(Number(check));
    };

    /**
     * [프로그래머스-3] 자연수를 뒤집어 배열로 만들기
     * @description for 역순
     * @description reverse()
     */
    const fn_question3 = () => {
        let answer = [];
        const n = 12345;
        answer = `${n}`
            .split('')
            .reverse()
            .map((item) => parseInt(item));
        console.log(answer);
    };

    /**
     * [프로그래머스-2] 정수의 내림차순 정렬
     * @description String.split()
     * @description Array.sort()
     * @description Array.join()
     * @description Number(String)
     */
    const fn_question2 = () => {
        const n = 118372;
        let answer = 0;

        answer = Number(
            n
                .toString()
                .split('')
                .sort((a: any, b: any) => b - a)
                .join(''),
        );

        console.log(answer);
        return answer;
    };

    /**
     * [프로그래머스-1] 정수 제곱근 판별
     * @description Math.sqrt(n) : 제곱근 값 구하기
     */
    const fn_question1 = () => {
        let answer = 0;
        const n = 121; // 11의 제곱근이면 11+1의 제곱근으로 리턴
        if (Number.isInteger(Math.sqrt(n))) {
            const numberSqrt = Math.sqrt(n);
            answer = Math.pow(numberSqrt + 1, 2); // 2 제곱근을 구한
        } else {
            answer = -1;
        }
        console.log(answer);
        return answer;
    };

    return (
        <div>
            <h1>광복절은 역시 코딩테스트지~</h1>
        </div>
    );
};
export default Coding0815;