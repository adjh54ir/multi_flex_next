/**
 * 공통 유틸 구성
 * @author adjh54ir
 * make** : 만들어주는 함수
 * get** : 데이터를 조회 해오는 함수
 *
 */
class CommonNumUtil {
	/**
	 * [공통함수] 숫자 여부를 체크 - 강력한 체크
	 * @param value
	 * @returns
	 */
	isNumber = (value: number): boolean => {
		let result = false;
		const regExp = /[\d]*$/;
		let charCnt = 0;

		// 1. 숫자여부를 체크
		if (Number.isInteger(value)) {
			// 2. "1e23"에 대한 예외처리
			// prettier-ignore
			value.toString().split("").map((valItem)=>{
				if(regExp.test(valItem)) charCnt += 1;
			});
			charCnt === 0 ? (result = true) : (result = false);
		}

		return result;
	};

	/**
	 * [공통함수] 숫자 및 숫자 범위에 대한 진위를 판단해주는 함수입니다.
	 * @param value
	 * @param min
	 * @param max
	 * @returns
	 */
	betweenNum = (value: number, min: number, max: number): boolean => {
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
	makeRangeNumArr = (maxRange: number): number[] => {
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

	/**
	 * [공통함수] 지정한 시작값과 종료값에 대한 랜덤한 숫자 반환
	 * @param {number} minNum : 범위의 최소값
	 * @param {number} maxNum : 범위의 최대값
	 * @returns {number} resultNum : 랜덤 숫자 / 유효성 실패시 -1 반환
	 */
	makeRandomRangeNum = (minNum: number, maxNum: number): number => {
		let resultNum = -1;
		// 최대값은 최소값보다 커야 하고 둘다 정수여야 한다.
		if (minNum < maxNum && Number.isInteger(minNum) && Number.isInteger(maxNum)) {
			resultNum = Math.floor(Math.random() * maxNum + 1) + minNum;
		}
		return resultNum;
	};
}
export default new CommonNumUtil();
