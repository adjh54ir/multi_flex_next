import React, { useEffect } from 'react';
const coding0814 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // fn_arrayControl();
        // fn_test2();
        // fn_test3();
        // fn_test4();
        // fn_test5();
        // fn_test6();
        // fn_test7();
        // fn_test8();
        // fn_test9();
        fn_test10();
    }, []);

    /**
     * [프로그래머스] 제일 작은 수 제거하기
     */
    const fn_test10 = () => {
        const arr = [4, 3, 2, 1];
        let answer: number[] = [];

        if (arr.length >= 1) {
            if (arr.length === 1) {
                answer.push(-1);
            } else {
                const reduce = arr.reduce((prev, curr) => Math.min(prev, curr));
                const arrFilter = arr.filter((item) => item !== reduce);
                answer = arrFilter;
            }
        }
        console.log(answer);
        return answer;
    };

    /**
     * [프로그래머스] 콜라즈 추측
     */
    const fn_test9 = () => {
        // let answer = 0;
        // let num = 16;
        // // 제한 사항
        // if (num >= 1 && num <= 8000000) {
        // 	if (num === 1) {
        // 		answer = 0;
        // 	} else {
        // 		let _roopCnt = 0;
        // 		while (true) {
        // 			// 조건문
        // 			_roopCnt = _roopCnt + 1;
        // 			// 짝수
        // 			if (num % 2 === 0) {
        // 				num = num / 2;
        // 			}
        // 			// 홀수
        // 			else {
        // 				num = num * 3 + 1;
        // 			}
        // 			if (num === 1 || _roopCnt === 500) break;
        // 		}
        // 		_roopCnt === 500 ? (answer = -1) : (answer = _roopCnt);
        // 	}
        // 	console.log(answer);
        // }
        // return answer;
    };

    const fn_test8 = () => {
        const n = 3; // 최대공약수
        const m = 12; // 최소공배수

        var answer = [];
        var minNum = Math.min(n, m);
        var maxNum = Math.max(n, m);
        answer[0] = gcd(minNum, maxNum);
        answer[1] = lcm(minNum, maxNum);

        console.log(answer);
        return answer;
    };
    // 최대공약수

    /**
     * 최대 공약수
     * @param minNum
     * @param maxNum
     * @returns
     */
    const gcd = (minNum: number, maxNum: number): number => {
        return minNum % maxNum === 0 ? maxNum : gcd(maxNum, minNum % maxNum);
    };

    /**
     * 최소 공배수
     * @param minNum
     * @param maxNum
     * @returns
     */
    const lcm = (minNum: number, maxNum: number): number => {
        return (minNum * maxNum) / gcd(minNum, maxNum);
    };

    /**
     * [프로그래머스] 하샤드 수
     *  예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
     */
    const fn_test7 = () => {
        let answer = true;
        const x = 18;
        let resultVal = 0;

        // 제한 조건
        if (x >= 1 && x <= 10000) {
            const numSplit = String(x).split('');

            for (let i = 0; i < numSplit.length; i++) {
                resultVal += parseInt(numSplit[i]);
            }
            if (x % resultVal === 0) {
                answer = true;
            } else {
                answer = false;
            }
        }
    };

    /**
     * [프로그래머스] 약수 구하기
     */
    const fn_test6 = () => {
        const _input = 10;
        const resultArr = [];

        for (let i = 1; i <= _input; i++) {
            if (_input % i == 0) resultArr.push(i);
        }
        const _strFormatting = resultArr.toString().replace(/,/g, ' ');
        console.log(_strFormatting + ' ');
    };

    /**
     * [프로그래머스] 평균구하기
     */
    const fn_test5 = () => {
        let answer: number = 0;

        const _input = [1, 2, 3, 4];

        // 제한사항
        if (_input.length >= 1 && _input.length <= 10000) {
            // 평균 모든 값의 합 / 길이
            const _resultSum: number = _input.reduce((prev, curr) => prev + curr) / _input.length;
            answer = _resultSum;
        } else {
            console.error('유효한 값이 아닙니다.');
        }
    };

    /**
     * [프로그래머스] 핸드폰 번호가리기
     */
    const fn_test4 = () => {
        let answer = '';
        const phone_number1 = '01033334444';
        const phone_number2 = '027778888';

        const _star = '*';

        if (phone_number1.length >= 4 && phone_number1.length <= 20) {
            const result = _star.repeat(phone_number1.length - 4);
            const backPhoneNum = phone_number1.substring(phone_number1.length - 4, phone_number1.length);
            answer = result + backPhoneNum;
        }
        console.log(answer);
    };

    /**
     * [프로그래머스] 행렬의 덧셈
     * @param {number[][]} arr1
     * @param {number[][]} arr2
     * @return : 같은 행, 같은 열에 있는 배열에 대해 합을 구하자.
     */
    const fn_test3 = () => {
        let answer: number[][] = [[]];

        const arr1: number[][] = [
            [1, 2],
            [2, 3],
        ];
        const arr2: number[][] = [
            [3, 4],
            [5, 6],
        ];

        // 제약사항
        if (arr1.length <= 500 && arr2.length <= 500) {
            //[CAS1]
            for (let i = 0; i < arr1.length; i++) {
                answer[i] = [];
                for (let j = 0; j < arr1[i].length; j++) {
                    answer[i].push(arr1[i][j] + arr2[i][j]);
                }
            }

            answer.length = 0;

            // [CAS2]
            for (let x = 0; x < arr1.length; x++) {
                let sum = [];
                for (let y = 0; y < arr1[x].length; y++) {
                    sum.push(arr1[x][y] + arr2[x][y]);
                }
                answer.push(sum);
            }
            console.log(answer);

            // 초기화
            answer.length = 0;

            // arr1.map((item1, x) => {
            // 	let sum = [];
            // 	item1.map((item2, y) => {
            // 		sum.push(item2 + arr2[x][y]);
            // 	});
            // });
            // console.log();
        }

        return answer;
    };

    /**
     * @param {number} x: 정수 - 증가하는 값
     * @param {number} n: 자연수 - 배열 개수
     */
    const fn_test2 = () => {
        let answer: number[] = [];
        const x = 2,
            n = 5;
        // 제한 조건
        if (x >= -10000000 && x <= 10000000 && Number.isInteger(x) && n <= 1000) {
            for (let i = 1; i <= n; i++) {
                answer.push(i * 2);
            }
            console.log(answer);
        }

        return answer;
    };

    const fn_test1 = () => {
        const n = 5;
        const a = 3;

        const starHeightArr = [];
        const starWidth = '*'.repeat(n);

        for (let i = 0; i < 3; i++) {
            starHeightArr.push(starWidth);
        }

        const result = starHeightArr.join('\r\n');
        console.log(result);
    };

    const fn_arrayControl = () => {
        const _inputNumber = 38;

        // 입력값이 '정수'인지 유효성 검증
        if (Number.isInteger(_inputNumber)) {
            // 입력값이 1 이상 100 이하 유효성 검증
            if (1 <= _inputNumber && 100 >= _inputNumber) {
                console.log('정수이며 범위내의 값이 맞습니다.');
            }
        }

        // 1 이상 100 이하 유효성 검증
        if (1 <= _inputNumber && 100 >= _inputNumber) {
            // && 정수인지 체크
            if (Number.isInteger(_inputNumber)) {
                console.log('값이 맞습니다');
            }
        }
    };

    return <h1>여기는 스킬북 관리하는 컴포넌트</h1>;
};
export default coding0814;