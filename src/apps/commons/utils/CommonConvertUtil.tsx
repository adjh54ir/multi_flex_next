import moment from 'moment';
//@ts-ignore
import base64 from 'base-64';
import { MOMENT_FORMAT_TYPE } from '../code/CommonCode';
/**
 * 데이터 변환 함수 유틸
 * @author adjh54ir
 *
 * @foramt A to B : A에서 B로 전환하는 함수 -> return B
 *
 */
class CommonConvertUtil {
	/**
	 * [공통함수] Date를 formating 된 String으로 반환해주는 함수
	 * @param dateValue : 날짜 값
	 * @param transdateFormat : 날짜를 변경할 값
	 * @param dateformat : 날짜 값에서 뽑아낼 정보
	 * @returns {string} 변환된 문자열
	 */
	dateToFormatDate = (
		dateValue: Date | string,
		transdateFormat: MOMENT_FORMAT_TYPE,
		dateformat?: MOMENT_FORMAT_TYPE,
	): string => {
		if (dateformat) {
			return moment(dateValue, dateformat).format(transdateFormat);
		} else {
			return moment(dateValue).format(transdateFormat);
		}
	};

	/**
	 * [공통함수] String을 base64로 인코딩/디코딩하는 함수
	 * @param {string} param    : 인코딩/디코딩 할 데이터 값
	 * @param {boolean} isEncode : 인코딩(true)/디코딩(false)
	 * @returns {string} 변환된 문자열
	 */
	stringToBase64 = (param: string, isEncode: boolean): string => {
		if (isEncode) {
			return base64.encode(param);
		} else {
			return base64.decode(param);
		}
	};

	/**
	 * [공통함수] blob 타입을 base64로 전환 함수
	 * @param {blob} blob Type
	 * @return {string} base64 Type
	 */
	blobToBase64 = (blob: any): any => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			// base64 converted!
			return reader.result; // 임시공간에 blob 데이터 저장
		};
	};

	/**
	 * [공통함수] 숫자를 '약수'로 반환해주는 함수
	 * @returns
	 */
	numberToDivisior = (paramNum: number, returnType: 'array' | 'string') => {
		const resultArr = [];
		for (let i = 1; i < paramNum; i++) {
			if (paramNum % i === 0) {
				resultArr.push(i);
			}
		}
		if (returnType === 'array') {
			return resultArr;
		} else if (returnType === 'string') {
			const resultStr = resultArr.toString().replace(/,/g, ' ');
			return resultStr;
		}
	};

	/**
	 * [공통함수] 숫자 배열을 랜덤으로 섞는 함수
	 * @param arr
	 * @returns
	 */
	numArrToShuffleArr = (arr: number[]): number[] => {
		return arr.sort(() => Math.random() - 0.5);
	};

	/**
	 * [공통함수] 문자열 배열을 섞어주는 함수
	 * @param arr
	 * @returns
	 */
	strArrToShuffleArr = (arr: string[]): string[] => {
		return arr.sort(() => Math.random() - 0.5);
	};

	/* *********************************************************************************************************
	 *  Object 변형 관련 Utils
	 **********************************************************************************************************/
	/**
	 * [공통함수] Object key와 value를 Array로 구성하는 함수
	 * @param obj
	 * @returns
	 */
	objectAllToArr = (obj: object): string[] | number[] => {
		const keyObj = Object.keys(obj);
		const valueObj = Object.values(obj);

		return keyObj.concat(valueObj);
	};

	/**
	 * [공통함수] Object 함수내에서 value로 Key값을 찾는다.
	 * @param obj
	 * @param value
	 * @returns
	 */
	objectValueToKey = (obj: object, value: string): string => {
		//@ts-ignore
		const objKey = Object.keys(obj).find((key) => obj[key] === value);
		if (objKey !== undefined) return objKey;
		else return '';
	};

	/**
	 * [공통함수] Object 함수내에서 Key로 value 값을 찾는다.
	 * @param obj
	 * @param key
	 */
	objectKeyToValue = (obj: object, key: string) => {
		// @ts-ignore
		return obj[key];
	};
}
export default new CommonConvertUtil();
