/**
 * 공통 유틸 구성
 * @author adjh54ir
 * make** : 만들어주는 함수
 * get** : 데이터를 조회 해오는 함수
 *
 */
class CommonNumUtil {
	/**
	 * [공통함수] 숫자 및 숫자 범위에 대한 진위를 판단해주는 함수입니다.
	 * @param value
	 * @param min
	 * @param max
	 * @returns
	 */
	between = (value: number, min: number, max: number): boolean => {
		let isSuccess = false;
		if (Number.isInteger(value) && value >= min && value <= max) {
			isSuccess = true;
		}
		return isSuccess;
	};

	/**
	 * [공통함수] 1부터 RangeNum까지의 범위내의 랜덤한 숫자를 생성하는 함수입니다.
	 * @param {number}rangeNum
	 * @returns {number} 생성한 값 리턴
	 */
	makeRandomNum = (rangeNum: number): number => {
		// 100까지의 범위 일 경우 101의 값을 가짐. 1000까지의 범위 일 경우 1001의 값을 가짐
		return Math.floor(Math.random() * rangeNum + 1);
	};

	/**
	 * [공통함수] 1부터 Range까지의 범위의 배열을 생성합니다.
	 * @param {number} maxRange
	 * @returns {number[]} 생성한 배열 리턴
	 */
	makeRangeArr = (maxRange: number): number[] => {
		return Array.from(Array(maxRange + 1).keys()).slice(1);
	};

	/**
	 * [공통함수] 원하는 숫자를 반복해주는 함수를 생성합니다.
	 * @param {number} repeatCnt
	 * @param {number} repeatNum
	 * @returns {number[]} 생성한 배열 리턴
	 */
	makeSameNumArr = (repeatCnt: number, repeatNum: number): number[] => {
		return Array(repeatCnt).fill(repeatNum);
	};
}
export default new CommonNumUtil();
