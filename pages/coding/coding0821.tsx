import { useEffect } from 'react';

const coding0821 = () => {
	useEffect(() => {
		fn_question2();
	}, []);

	/**
	 * A,B와 B,A가 동일한 형태의 개수가 몇개 있는지 Counting 하기 
	 */
	const fn_question2 = () => {
		const arr = [
			[1, 3],
			[3, 1],
			[2, 5],
			[5, 2],
		];

		arr.map((item) => {

			

			// console.log(arr, item.reverse());

			

			// console.log(item.includes(item.reverse()));
		});
	};

	const fn_question1 = () => {
		const num = +3.145348;
		console.log(Math.abs(num)); // 3.145348

		const num2 = -3.145348;
		console.log(Math.abs(num2)); // 3.145348

		const strArr = ['a', 'A', 'c', 'e', 'b', 'd', 'D'];
		const numArr = [3, 2, 1, 4, 6, 7, 10, 22];

		// 문자열 '오름차순' 정렬
		const result = strArr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
		console.log(result);

		// 문자열 '내림차순' 정렬
		strArr.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));

		// const resultArr = str.sort((prev, curr) => prev.localeCompare(curr));

		// const resultNumArr = numArr.sort((prev, curr) => prev.localeCompare(curr));
	};

	return (
		<>
			<h1>아직.</h1>
		</>
	);
};
export default coding0821;
