import { useEffect } from 'react';
import CommonConvertUtil from '../../src/apps/commons/utils/CommonConvertUtil';

const testArea = () => {
	useEffect(() => {
		//
		mainTest();
	}, []);

	const mainTest = () => {
		/**
		 * 응용 사용 방법 -4: 배열을 무작위로 섞어서 정렬 한다.
		 */
		const strArr9 = ['가', '나', '다', '라', '마'];
		strArr9.sort(() => Math.random() - 0.5); // 랜덤 셔플 함수 수행
		console.log(strArr9);

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
