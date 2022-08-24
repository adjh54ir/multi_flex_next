import { useEffect } from 'react';

/**
 * 08월 24일 목요일 코딩테스트
 * @returns
 */
const coding0824 = () => {
	useEffect(() => {
		fn_question1();
	}, []);

	/**
	 * [프로그래머스] 가운데 글자 가져오기
	 */
	const fn_question1 = () => {
		let answer = '';
		let s = 'abcdef';

		if (fn_question1_validation(s)) {
			s.length % 2 === 0
				? (answer = s.substring(s.length / 2 - 1, s.length / 2 + 1))
				: (answer = s.substring(Math.floor(s.length / 2), Math.floor(s.length / 2) + 1));
		}
		console.log(answer);
		return answer;
	};

	const fn_question1_validation = (s: string) => {
		let isSucess = false;
		if (s.length >= 1 && s.length <= 100) {
			isSucess = true;
		}
		return isSucess;
	};

	return (
		<>
			<h1>껄껄껄</h1>
		</>
	);
};
export default coding0824;
