import { useEffect } from 'react';

const closure = () => {
	useEffect(() => {
		console.log(counter.value()); // logs 0
		counter.increment();
		counter.increment();
		console.log(counter.value()); // logs 2
		counter.decrement();
		console.log(counter.value()); // logs 1
	}, []);

	/**
	 * 숫자를 늘리고 줄이는 함수 
	 */
	const counter = (function () {
		// 외부의 함수의 변수를 선언합니다.
		let count = 0;

		// 전달 받은 값을 
		const changeBy = (value: number) => {
			count += value;
		};

		return {
			// 값을 증가합니다.
			increment: (): void => {
				return changeBy(1);
			},

			// 값을 줄입니다.
			decrement: () => {
				return changeBy(-1);
			},

			// 값을 출력합니다.
			value: () => {
				console.log(count);
				return count;
			},
		};
	})();

	return <div></div>;
};
export default closure;
