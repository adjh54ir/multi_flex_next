/**
 * 정규식 관련 유맅
 * @author adjh54ir
 */
// 모든 특수문자 정규식
class CommonRegExpUtil {
	/**
	 * [공통함수] 정규식 조작 메소드
	 */
	checkRegExp = (paramStr: string) => {

		// [
		//     0: "D.E.F"
		//     groups: undefined
		//     index: 9
		//     input: "ABBB.B.C.D.E.F.G.H.A"
		//     length: 1
		// ]

		// console.log(isRegExp); // true
	};

	/**
	 * [공통함수] 핸드폰 번호 정규식 적용
	 */
	checkPhoneNumber = (phoneNum: string, checkType: 'type1' | 'type2' | 'type3' | 'type4'): boolean => {
		let result: boolean = false;

		const _type1RegExp = /^[0-9]{7}$/;
		// const _type1RegExp2 = /^01([0|1|6|7|8|9])([0-9]{4})$/;
		const _type2RegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/; // OK
		const _type3RegExp = /^\+82[.-]-?(010)-?([0-9]{4})-?([0-9]{4})$/;
		const _type4RegExp = /^\+82[.-]-?(10)-?([0-9]{4})-?([0-9]{4})$/;

		switch (checkType) {
			// 01023205454 형태
			case 'type1':
				if (_type1RegExp.test(phoneNum) && phoneNum.length === 7) {
					result = true;
				}
				break;

			// 010-2320-5454
			case 'type2':
				if (_type2RegExp.test(phoneNum) && phoneNum.length === 11) {
					result = true;
				}
				break;

			// +82-010-2320-5454
			case 'type3':
				if (_type3RegExp.test(phoneNum) && phoneNum.length === 17) {
					result = true;
				}
				break;

			// +82-10-2320-5454
			case 'type4':
				if (_type4RegExp.test(phoneNum) && phoneNum.length === 16) {
					result = true;
				}
				break;
			default:
				return false;
		}

		return result;
	};
}
export default new CommonRegExpUtil();
