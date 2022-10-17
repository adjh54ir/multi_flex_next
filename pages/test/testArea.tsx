import { useEffect } from 'react';

const testArea = () => {
	useEffect(() => {
		//
		mainTest();
	}, []);

	const mainTest = () => {
		/**
		 * str.toUpperCase()의 속성
		 * @return {string} : 대문자로 변환한 새로운 문자열입니다.
		 */
		// str.toUpperCase()

		/**
		 * str.toLowerCase()의 속성
		 * @return {string} :소문자로 변환된 호출 문자열을 나타내는 새 문자열입니다.
		 */
		// str.toLowerCase()

		/**
		 * 기본 사용 방법
		 */
		const lowerStr = 'hello';
		lowerStr.toUpperCase(); // "HELLO"

		const upperStr = 'HELLO';
		upperStr.toLowerCase(); // hello
	};

	return (
		<div>
			<div></div>
		</div>
	);
};
export default testArea;