import React, { useEffect } from 'react';
const coding0818 = () => {
	useEffect(() => {
		fn_question3();
	}, []);

	/**
	 * [프로그래머스-3] 시저의 암호
	 */
	const fn_question3 = () => {
		var answer = '';
		const s = 'a B z';
		const n = 1;

		const empty = s.replace(/ /g, '');
		console.log(empty);

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
