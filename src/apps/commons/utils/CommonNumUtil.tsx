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
	 * [공통함수] 범위내의 랜덤한 숫자 반화
	 * @param {number} range
	 */
	makeRandomNum = (range: number): number => {
		// 100까지의 범위 일 경우 101의 값을 가짐. 1000까지의 범위 일 경우 1001의 값을 가짐
		return Math.floor(Math.random() * range + 1);
	};
}
export default new CommonNumUtil();
