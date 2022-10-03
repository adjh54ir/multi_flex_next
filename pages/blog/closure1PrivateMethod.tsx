import { useEffect } from 'react';

/**
 * 클로저를 이용한 Private Method 구현하기
 * @returns
 */
const closure1PrivateMethod = () => {
	useEffect(() => {
		const closureCounter = counter();
		console.log(closureCounter.value()); // logs 0
		closureCounter.increment();
		closureCounter.increment();
		console.log(closureCounter.value()); // logs 2
		closureCounter.decrement();
		console.log(closureCounter.value()); // logs 1
	}, []);

	/**
	 * 숫자를 늘리고 줄이는 함수
	 */
	const counter = () => {
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
	};

	return <div></div>;
};
export default closure1PrivateMethod;
