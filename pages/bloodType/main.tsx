import { useEffect, useRef, useState } from 'react';

enum bloodType {
	'AType' = 'A',
	'BType' = 'B',
	'OType' = 'O',
	'ABType' = 'AB',
}

const main = () => {
	const mBloodType = useRef<HTMLSelectElement>(null); // 아빠의 혈액형
	const fBloodType = useRef<HTMLSelectElement>(null); // 엄마의 혈액형

	const [cBloodType, setCBloodType] = useState<string[]>();

	useEffect(() => {
		//
	}, []);

	/**
	 * [함수] 자식 혈액형 출력
	 */
	const funcGenerateType = (): void => {
		if (mBloodType.current && fBloodType.current) {
			const fBloodTypeVal = fBloodType.current.value;
			const mBloodTypeVal = mBloodType.current.value;
			console.log(fBloodTypeVal, mBloodTypeVal);

			const cBloodTypeArr = [];
			const { AType, BType, OType, ABType } = bloodType;

			// A형 일 경우
			if (fBloodTypeVal === AType) {
				if (mBloodTypeVal === AType) cBloodTypeArr.push(AType, OType);
				if (mBloodTypeVal === BType) cBloodTypeArr.push(AType, BType, OType, ABType);
				if (mBloodTypeVal === OType) cBloodTypeArr.push(AType, OType);
				if (mBloodTypeVal === ABType) cBloodTypeArr.push(AType, BType, ABType);
			}
			// B형 일 경우
			if (fBloodTypeVal === BType) {
				if (mBloodTypeVal === AType) cBloodTypeArr.push(AType, BType, OType, ABType);
				if (mBloodTypeVal === BType) cBloodTypeArr.push(BType, OType);
				if (mBloodTypeVal === OType) cBloodTypeArr.push(BType, OType);
				if (mBloodTypeVal === ABType) cBloodTypeArr.push(AType, BType, ABType);
			}

			// O형 일 경우
			if (fBloodTypeVal === OType) {
				if (mBloodTypeVal === AType) cBloodTypeArr.push(AType, OType);
				if (mBloodTypeVal === BType) cBloodTypeArr.push(BType, OType);
				if (mBloodTypeVal === OType) cBloodTypeArr.push(OType);
				if (mBloodTypeVal === ABType) cBloodTypeArr.push(AType, BType);
			}
			// AB형 일 경우
			if (fBloodTypeVal === ABType) {
				if (mBloodTypeVal === AType) cBloodTypeArr.push(AType, BType, ABType);
				if (mBloodTypeVal === BType) cBloodTypeArr.push(AType, BType, ABType);
				if (mBloodTypeVal === OType) cBloodTypeArr.push(AType, BType);
				if (mBloodTypeVal === ABType) cBloodTypeArr.push(AType, BType, ABType);
			}

			if (cBloodTypeArr.length > 0) setCBloodType(cBloodTypeArr);
		}
	};

	/**
	 * [함수] 자식 혈액형 출력
	 */
	const refactor_funcGenerateType = (): void => {
		const { current: fCurr } = fBloodType;
		const { current: mCurr } = mBloodType;

		const cBloodTypeArr: String[] = [];
		const { AType, BType, OType, ABType } = bloodType;

		if (fCurr && mCurr) {
			const { value: fBloodTypeVal } = fCurr; // 아빠 혈액형 SELECT 값
			const { value: mBloodTypeVal } = mCurr; // 엄마 혈액형 SELECT 값
			const familyArr = [fBloodTypeVal, mBloodTypeVal]; // 엄마 아빠 혈액형 Array

			// if (familyArr.includes(AType)) {
			// 	// 중복 인 경우
			// 	if (funcBloodDuplicate(familyArr)) cBloodTypeArr.push(AType, OType);
			//     if()
			// }

			console.log(cBloodTypeArr);
		}
	};

	/**
	 * 엄마, 아빠 중복여부 체크
	 * @param familyArr
	 * @returns
	 */
	const funcBloodDuplicate = (familyArr: string[]): boolean => {
		let isDuplicate = false;
		if (Array.from(new Set(familyArr)).length === 1) isDuplicate = true;
		return isDuplicate;
	};

	return (
		<div>
			<div className='mb-10'>
				<h1>자식 혈액형 구하기 </h1>
			</div>
			<div className='mb-10'>
				<label htmlFor='fBloodType'>
					아빠의 혈액형
					<select id='fBloodType' className='ml-10' ref={fBloodType}>
						<option value='A'>A형</option>
						<option value='B'>B형</option>
						<option value='O'>O형</option>
						<option value='AB'>AB형</option>
					</select>
				</label>
			</div>
			<div className='mb-10'>
				<label htmlFor='mBloodType'>
					엄마의 혈액형
					<select id='mBloodType' className='ml-10' ref={mBloodType}>
						<option value='A'>A형</option>
						<option value='B'>B형</option>
						<option value='O'>O형</option>
						<option value='AB'>AB형</option>
					</select>
				</label>
			</div>
			<div className='mb-10'>
				<button type='button' onClick={refactor_funcGenerateType}>
					혈액형은?
				</button>
			</div>

			<div>
				<label htmlFor='mBloodType'>
					자식의 혈액형
					<input type='text' id='mBloodType' value={cBloodType} />
				</label>
			</div>
		</div>
	);
};
export default main;
