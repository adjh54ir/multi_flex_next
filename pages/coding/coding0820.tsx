import React, { useEffect } from 'react';
const coding0820 = () => {
	useEffect(() => {
		fn_question9();
	}, []);

	/**
	 * [프로그래머스-9] 두 정수 사이의 합
	 */
	const fn_question9 = () => {
		var a = 3;
		var b = 5;
		var answer = 0;
		let resultNum = 0;

		if (a >= b) {
			for (let i = b; i <= a; i++) {
				resultNum += i;
			}
		} else if (a < b) {
			for (let i = a; i <= b; i++) {
				resultNum += i;
			}
		}
		answer = resultNum;
		console.log(answer);

		return answer;
	};

	/**
	 * [프로그래머스-8]문자열 내 마음대로 정렬하기
	 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
	 */
	const fn_question8 = () => {
		let strings = ['sun', 'bed', 'car'];
		let n = 1;
		// strings = ['abce', 'abcd', 'cdx'];
		// n = 2;
		let answer: string[] = [];

		// 유효성이 통과하면 수행
		if (isValidate8(strings, n)) {
			answer = strings.sort((a, b) => {
				if (a[n] > b[n]) return 1;
				else if (a[n] < b[n]) return -1;
				else return a > b ? 1 : -1;
			});
		}

		console.log(answer);
		return answer;
	};

	const isValidate8 = (strings: string[], n: number) => {
		let isSucess = false;
		const regExp = /^[a-z]*$/;

		// strings는 길이 1 이상, 50이하인 배열입니다.
		if (strings.length >= 1 && strings.length <= 50) {
			// strings의 원소는 소문자 알파벳으로 이루어져 있습니다. && strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
			strings.map((item) => {
				console.log(regExp.test(item));
				if (regExp.test(item) && item.length >= 1 && item.length <= 100 && item.length > n) {
					isSucess = true;
				} else {
					isSucess = false;
				}
			});
		} else {
			isSucess = false;
		}
		return isSucess;
	};

	/**
	 * [프로그래머스-7] 문자열 내 p와 y의 개수
	 * s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return
	 * @description toLowerCase() / toUppserCase(); 를 활용
	 */
	const fn_question7 = () => {
		var answer = true;
		var s = 'pPoooyY';

		let pCnt = 0;
		let yCnt = 0;

		s.toLowerCase()
			.split('')
			.map((item) => {
				if (item === 'p') pCnt += 1;
				if (item === 'y') yCnt += 1;
			});
		if (pCnt !== yCnt) {
			answer = false;
		}
		console.log(answer);
		return answer;
	};

	/**
	 * [프로그래머스-6] 문자열의 내림차순 배치하기
	 * @returns
	 */
	const fn_question6 = () => {
		var s = 'Zbcdefg';
		var answer = '';
		let result = [];

		const descSortArr = s.split('').sort((a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0)); // 오름 차순
		const ascSortArr = s.split('').sort((a: any, b: any) => (a > b ? -1 : a < b ? 1 : 0)); // 내림 차순
		result = [...ascSortArr];
		answer = result.join('');
		console.log(answer);

		return answer;
	};

	/**
	 * [프로그래머스-5] 문자열 다루기 기본
	 * @returns
	 */
	const fn_question5 = () => {
		var answer = true;
		var s = 'abcd';
		s = '-1234';
		const regExp = /^[\D]$/; // 숫자에 대한 유효성
		const regExp2 = /^[0-9]$/; // 숫자에 대한 유효성

		// 의심1 공백은 제외

		// 숫자에 대한 유효성 검증
		if (s.length >= 4 && s.length <= 6) {
			s.split('').map((item) => {
				// 부호가 있는 경우 숫자로
				if (!(item === '+' || item === '-' || item === '')) {
					if (regExp.test(item)) answer = false;
				}
			});
		} else {
			answer = false;
		}

		console.log(answer);

		// if(regExp.test(s))

		// if (s.length >= 4 && s.length <= 8) {
		// 	s.split('').map((item) => {
		// 		console.log(item, item.search(/\D/));
		// 		// 숫자만 유효성
		// 		if (item.trim().search(/\D/) !== -1) {
		// 			answer = false;
		// 		}
		// 	});
		// } else answer = false;

		// answer = s.split('').search(/\/D/g) < 0;

		// if (s.length >= 4 && s.length <= 8) {
		// 	let convertAscii = '';
		// 	// 1. 반복문을 순환하여 index 반환
		// 	for (const idx in s.split('')) {
		// 		convertAscii += `${s.charCodeAt(parseInt(idx))} `; // 2. 문자열 -> ASCII 코드로 변경
		// 	}
		// 	// 3. ASCII 코드로 문자열 검토
		// 	convertAscii.split(' ').map((item) => {
		// 		// 4. 빈 값은 수행하지 않음
		// 		if (item.trim() !== '') {
		// 			const parseintItem = parseInt(item);
		// 			// 5. 유효성에 문제가 생기면 false로 리턴한다.
		// 			if (!(parseintItem >= 48 && parseintItem <= 57)) answer = false; // 숫자
		// 		}
		// 	});
		// }
		// console.log(answer);
		return answer;
	};

	/**
	 * [프로그래머스-4] 서울에서 김서방 찾기
	 */
	const fn_question4 = () => {
		var answer = '';
		var seoul = ['Jane', 'Kim'];

		let resultIdx = 0;

		if (seoul.length >= 1 && seoul.length <= 1000) {
			seoul.map((item, idx) => {
				if (item.length >= 1 && item.length <= 20) {
					if (item === 'Kim') resultIdx = idx;
				} else console.log('유효하지 않는 값 입니다.');
			});
		} else {
			console.log('유효하지 않는 값 입니다.');
		}

		answer = `김서방은 ${resultIdx}에 있다`;
		console.log(answer);
		return answer;
	};

	/**
	 * TODO: [프로그래머스-3] 소수 찾기
	 */
	const fn_question3 = () => {
		var answer = 0;
		var n = 10;

		const arr = new Array(n + 1).fill(true);

		for (let i = 2; i <= n; ++i) {
			// 이미 소수가 아닌 인덱스는 건너뛴다.
			if (arr[i] === false) {
				continue;
			}
			// 배수는 소수가 아니라 0으로 설정
			for (let k = i * 2; k <= n; k += i) {
				arr[k] = false;
			}
		}
		// 소수의 갯수를 구한다.
		for (let i = 2; i <= n; ++i) {
			if (arr[i] === true) {
				answer++;
			}
		}
		console.log(answer);
		return answer;
	};

	/**
	 * [프로그래머스-2] 수박수박수박수박수박수?
	 * @description repeat()
	 * @description Math.floor() : 소수점 버림
	 */
	const fn_question2 = () => {
		var answer = '';
		var n = 8;
		if (n === 1) answer = '수';
		else if (n === 2) answer = '수박';
		else {
			answer = '수박'.repeat(Math.floor(n / 2));
			if (n % 2 !== 0) answer = `${answer}수`;
		}
		console.log(answer);

		return answer;
	};

	/**
	 * [프로그래머스-1] 문자열을 정수로 바꾸기
	 */
	const fn_question1 = () => {
		let answer = 0;
		let s = '1234';
		if (1 <= s.length && 5 >= s.length) {
			answer = Number(s);
		}

		console.log(answer);
		return answer;
	};

	return (
		<>
			<h1 className=''>에릭슨 엘지를 위해서 코테 연습!!!</h1>
		</>
	);
};
export default coding0820;
