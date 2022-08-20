import React, { useEffect } from 'react';
const coding0820 = () => {
	useEffect(() => {
		fn_question4();
	}, []);

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
