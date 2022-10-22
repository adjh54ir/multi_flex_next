import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import CommonConvertUtil from '../../src/apps/commons/utils/CommonConvertUtil';
import axios from 'axios';
import { CountryType } from '../../src/apps/commons/types/CountryTypes';

/**
 * 국가와 수도 맞추기 게임
 * @returns
 */
const main = () => {
	const btnRef = useRef<HTMLButtonElement>();

	// 국가/수도 정보를 가지고 있는 Object 파일
	const [countryObj, setCountryObj] = useState<Object>();

	// 국가와 수도가 함께 있는 배열 (Key + Value)
	const [countryArr, setCountryArr] = useState<string[]>([]);
	// 이전에 선택한 버튼 엘리먼트
	const [prevBtnElement, setPrevBtnElement] = useState<HTMLButtonElement | null>(null);
	// 선택했던 모든 엘리먼트
	const [accStyleArr, setAccStyleArr] = useState<HTMLButtonElement[] | null>(null);

	/**
	 * HTML 렌더링 이후 수행됨.
	 */
	useEffect(() => {
		initSetting();
	}, []);

	/**
	 * Object To Array => Key, Value 값으로 하나의 배열을 만듬.
	 */
	const initSetting = () => {
		let apiCountryObj = new Object();

		// Query String Option
		const serviceKey = `serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`;
		const returnType = 'JSON';
		const numbOfRows = 'numOfRows=10';
		// API URL
		const url = `http://apis.data.go.kr/1262000/CountryGnrlInfoService2/getCountryGnrlInfoList2?${serviceKey}&${returnType}&${numbOfRows}`;
		axios
			.get(url)
			.then((response) => {
				const reponseData = response.data.data;
				reponseData.map((rItem: CountryType.Country, rIdx: number) => {
					const { country_nm: countryNm, country_cptl_nm: countryCptlNm } = rItem;

					// 국가와 수도가 있는 경우만 수행함.
					if (countryNm && countryCptlNm) {
						if (countryCptlNm.includes('('))
							// @ts-ignore
							apiCountryObj[countryNm] = countryCptlNm.split('(')[0];
						else {
							// @ts-ignore
							apiCountryObj[countryNm] = countryCptlNm;
						}
					}
				});
				setCountryObj(apiCountryObj);
				const objKey: string[] = Object.keys(apiCountryObj); // Object Keys
				const objValue: string[] = Object.values(apiCountryObj); // Object values
				const totalArr: string[] = [];
				console.log(objKey);
				totalArr.push(...objKey, ...objValue);

				console.log(totalArr);
				const suffleArr: string[] = CommonConvertUtil.strArrToShuffleArr(totalArr);
				setCountryArr(suffleArr); // Object To Array
			})
			.catch((error) => {
				console.log(error);
			});
	};

	/**
	 * [공통함수] Object내에서 value로 Key 값을 찾는다.(Object value to Key)
	 * @param obj
	 * @param value
	 * @returns
	 */
	const getObjectValueToKey = (obj: object, value: string): string => {
		//@ts-ignore
		const objKey = Object.keys(obj).find((key) => obj[key] === value);
		if (objKey !== undefined) return objKey;
		else return '';
	};

	/**
	 * [공통함수] Object내에서 Key로 value 값을 찾는다.(Object key to value)
	 * @param obj
	 * @param key
	 */
	const getObjectKeyToValue = (obj: object, key: string) => {
		// @ts-ignore
		return obj[key];
	};

	/**
	 * 버튼 클릭 이벤트
	 * @param e
	 */
	const onClickBtn = (e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// 클릭한 버튼의 엘리먼트 정보
		const currentBtnElement = e.currentTarget;

		/**
		 * [STEP 1-1] 이전에 버튼을 클릭하지 않거나 세번 클릭을 하는 경우
		 * 1. 이전에 버튼을 클릭하지 않은 경우 : 스타일을 파란색으로 변경함
		 * 2. 세번 이상 버튼을 클릭 한 경우: 이전에 엘리먼트 스타일 모두 초기화
		 */
		if (prevBtnElement === null) {
			// 처음 혹은 세번 이상 클릭의 경우 스타일 배열에 누적이 되었을 경우 초기화를 진행하고 시작.
			if (accStyleArr) {
				for (let i = 0; i <= accStyleArr.length; i++) {
					if (accStyleArr[i] !== undefined) accStyleArr[i].style.color = '#ffffff';
				}
			}
			// [STEP1] 클릭한 현재값 스타일을 '파란색'으로 변경
			currentBtnElement.style.color = '#0000ff';

			// [STEP2] 처음 선택한 값을 히스토리로 누적
			setPrevBtnElement(currentBtnElement);

			// [STEP3] 현재 값을 스타일 배열에 누적
			setAccStyleArr([currentBtnElement]);
		} else {
			/**
			 * [STEP 1-2] 두번째 버튼을 클릭 하였을 경우
			 * 1. 첫번째 선택한 값과 비교하여 Object의 한쌍인지 여부를 확인한다
			 * 1.1. 한쌍 인 경우 : 해당 엘리먼트를 제거한다
			 * 1.2. 한쌍이 아닌 경우 : 이전에 선택한 엘리먼트와 현재 선택한 엘리먼트 색을 빨간색으로 변경함.
			 */
			// 이전에 선택한 엘리먼트 정보
			const { value: prevBtnValue, style: prevBtnStyle } = prevBtnElement;
			let pariValue = ''; // 선택한 값의 Key 혹은 Value 값
			let isMatching = false; // 매칭 여부

			/**
			 * 이전 값과 현재 값을 비교한다.
			 */
			// [STEP 2-1] 클릭한 값이 Key 인 경우 => Value를 반환해줌
			if (getObjectKeyToValue(countryObj!, prevBtnValue) !== undefined)
				pariValue = getObjectKeyToValue(countryObj!, prevBtnValue);
			// [STEP 2-2] 클릭한 값이 value 인 경우 -> key를 반환해줌
			else pariValue = getObjectValueToKey(countryObj!, prevBtnValue);

			// [STEP 3] 키 혹은 값을 매칭하여 변경한 값과 지금 선택한 값이 같으면 매칭
			if (currentBtnElement.value === pariValue) isMatching = true;

			/**
			 * [STEP4-1] 이전 값과 현재 값이 '같은' 경우
			 * - 전체 엘리먼트에서 제거한다.
			 */
			if (isMatching) {
				const reSetCountArr = countryArr.filter((cItem) => {
					if (cItem !== prevBtnValue && cItem !== currentBtnElement.value) return cItem;
				});
				setCountryArr(reSetCountArr);
				prevBtnElement.style.color = '#ffffff';
				currentBtnElement.style.color = '#ffffff';
			} else {
				/**
				 * [STEP4-2] 이전 값과 현재값이 '다른' 경우
				 * - 엘리먼트 스타일을 빨간색으로 표시함
				 * - 엘리먼트 스타일을 누적한다.
				 */
				prevBtnStyle.color = '#ff0000'; // 이전에 선택한 값
				currentBtnElement.style.color = '#ff0000'; // 지금 선택한 값
				// 이전에 선택한 값과 지금 선택한 엘리먼트 값 누적
				setAccStyleArr([...accStyleArr!, currentBtnElement]);
			}

			setPrevBtnElement(null); // [STEP 5] 처음 선택한 값 초기화
		}
	};

	return (
		<div className='p-12'>
			{/* header */}
			<div className='mb-10 border-b-2'>
				<h2>국가/수도 맞추기 게임</h2>
			</div>

			{/* API내에서 Object 값을 가져온다 */}
			{countryObj ? (
				// Object를 파싱해서 Array 값으로 가져온다
				countryArr.length > 0 ? (
					countryArr.map((rItem, rIdx) => {
						return (
							<button
								key={`btn-key-${rIdx}`}
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-5'
								//@ts-ignore
								onClick={(e) => onClickBtn(e)}
								value={rItem}
								//@ts-ignore
								ref={btnRef}>
								{rItem}
							</button>
						);
					})
				) : (
					<div>완벽합니다!</div>
				)
			) : (
				<div>API 연동이 필요합니다. 관리자에게 문의해주세요</div>
			)}
		</div>
	);
};
export default main;
