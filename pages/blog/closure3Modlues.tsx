import { useEffect } from 'react';

const closure3Modlues = () => {
	useEffect(() => {
		const closureCounter = counter();
		closureCounter.increment();
		closureCounter.increment();
		closureCounter.increment();
		console.log(closureCounter.value()); // 3
		closureCounter.decrement();
		closureCounter.decrement();
		closureCounter.decrement();
		console.log(closureCounter.value()); // 0
	}, []);

	/**
	 * 숫자를 세는 클로저를 이용한 모듈
	 * @returns
	 */
	const counter = () => {
		let count = 0;

		return {
			// 값을 증가합니다.
			increment: () => {
				return (count += 1);
			},

			// 값을 줄입니다.
			decrement: () => {
				return (count -= 1);
			},

			// 값을 출력합니다.
			value: () => {
				return count;
			},
		};
	};
};

export default closure3Modlues;
