/**
 * 공통 유틸 구성
 * @author adjh54ir
 * make** : 만들어주는 함수
 * get** : 데이터를 조회 해오는 함수
 *
 */
class CommonNumUtil {
	/**
	 * 숫자 및 숫자 범위 비교 함수
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
	 * [공통함수] 1부터 범위내의 랜덤한 숫자 
	 * @param {number} range 범위
	 * @return {number} 랜덤 숫자 
	 */
	makeRandomNum = (range: number): number => {
		// 100까지의 범위 일 경우 101의 값을 가짐. 1000까지의 범위 일 경우 1001의 값을 가짐
		return Math.floor(Math.random() * range + 1);
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
		return resultNum



	};
}
export default new CommonNumUtil();
