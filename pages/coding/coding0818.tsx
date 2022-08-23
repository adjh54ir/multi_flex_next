import React, { useEffect } from 'react';
const coding0818 = () => {
	useEffect(() => {
		fn_question3();
	}, []);

	/**
	 * [프로그래머스-3] 시저의 암호
	 * 조건 a -> z -> a / A -> Z -> A
	 * charCodeAt: string.charCodeAt(string 인덱스); // "happy".charCodeAt(0) - 104
	 * fromCharCode : String.fromCharCode(ASCII 번호) // String.fromCharCode(65) - A
	 */
	const fn_question3 = () => {
		// const s = 'a B z';
		const s = 'AB';
		const n = 1;
		let answer = '';
		let asciiCodeArr: any[] = [];

		// [STEP1] 문자열을 ASCII 코드 형태로 변형한다.
		s.split('').map((item, idx) => {
			// 공백은 제외한다.
			if (item !== ' ') {
				asciiCodeArr.push(s.charCodeAt(idx));
			} else {
				asciiCodeArr.push('');
			}
		});
		// [97, '', 66, '', 122]

		// [STEP2] 아스키 코드 전체 -> 문자열 변환
		let resultConverStr = '';

		asciiCodeArr.map((item) => {
			console.log(item);
			if (item !== '') {
				const intItem = parseInt(item); // org 아스키코드 번호(string -> number 파싱)
				let asciiNum = intItem + n; // ASCII 코드 이동(n) 값
				// [CASE1] 대문자 인 경우
				if (intItem >= 65 && intItem <= 90) {
					if (asciiNum > 90) asciiNum = asciiNum - 90 + 64; // 소문자가 넘어가는 경우 91 = 91 - 90 + 65
				}
				// [CASE2] 소문자 인 경우
				else if (intItem >= 97 && intItem <= 122) {
					if (asciiNum > 122) asciiNum = asciiNum - 122 + 96; // 대문자가 넘어가는 경우 124 = 124 - 122 + 97
				}
				// 최종 값 추가
				resultConverStr += String.fromCharCode(asciiNum);
			}
			// 공백일 경우
			else {
				resultConverStr += ' ';
			}
		});
		answer = resultConverStr.trim();
		console.log(answer);
		return answer;
	};

	/**
	 * [프로그래머스-2] 이상한 문자 만들기
	 */
	const fn_question2 = () => {
		var answer = 0;
		const n = 0;

		let remakeArr = [];

		if (n === 0) {
			answer = 0;
		} else {
			for (let i = 1; i <= n; i++) {
				if (n % i === 0) remakeArr.push(i);
			}
			answer = remakeArr.reduce((curr, prev) => curr + prev);
		}

		console.log(answer);
		return answer;
	};

	/**
	 * [프로그래머스-1] 이상한 문자 만들기
	 * @description toLowerCase() / toUpperCase()
	 * @description split(')
	 */
	const fn_question1 = () => {
		var answer = '';
		// 짝수번째
		const remakeArr: string[] = [];
		const s = 'try hello world';
		const strArr = s.split(' ');

		strArr.map((item) => {
			let itemArr: string[] = [];
			item
				.toLowerCase()
				.trim()
				.split('')
				.map((item2, idx2) => {
					idx2 % 2 === 0 ? itemArr.push(item2.toUpperCase()) : itemArr.push(item2);
				});
			remakeArr.push(itemArr.join(''));
		});
		answer = remakeArr.join(' ');

		return answer;
	};

	return (
		<>
			<h1 className=''>잠들기전에 코테 즐교~</h1>
		</>
	);
};
export default coding0818;
