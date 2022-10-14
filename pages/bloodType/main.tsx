import { useEffect, useRef, useState } from 'react';

enum BloodTypeEnum {
	'AType' = 'A',
	'BType' = 'B',
	'OType' = 'O',
	'ABType' = 'AB',
}

const main = () => {
	const mBloodType = useRef<HTMLSelectElement>(null); // 아빠의 혈액형
	const fBloodType = useRef<HTMLSelectElement>(null); // 엄마의 혈액형

	const [cBloodType, setCBloodType] = useState<string>();

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

			const cBloodTypeArr = [];
			const { AType, BType, OType, ABType } = BloodTypeEnum;

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

			if (cBloodTypeArr.length > 0) setCBloodType(cBloodTypeArr.join(', '));
		}
	};

	/**
	 * [함수] 자식 혈액형 출력
	 */
	const refactor_funcGenerateType = (): void => {
		const { current: fCurr } = fBloodType;
		const { current: mCurr } = mBloodType;

		let cBloodTypeArr = [];
		const { AType, BType, OType, ABType } = BloodTypeEnum;

		// 1. 선택된 값이 있는지 없는 여부 체크
		if (fCurr && mCurr) {
			const { value: fBloodTypeVal } = fCurr; // 아빠 혈액형 SELECT 값
			const { value: mBloodTypeVal } = mCurr; // 엄마 혈액형 SELECT 값
			const familyArr = [fBloodTypeVal, mBloodTypeVal]; // 엄마 아빠 혈액형 Array
			// [CASE1] 혈액형이 둘 다 동일 한 경우
			if (funcBloodDuplicate(familyArr)) {
				if (familyArr.includes(AType)) cBloodTypeArr.push(AType, OType); // A, A 인 경우
				if (familyArr.includes(BType)) cBloodTypeArr.push(BType, OType); // B, B 인 경우
				if (familyArr.includes(OType)) cBloodTypeArr.push(BType, OType); // O, O 인 경우
				if (familyArr.includes(ABType)) cBloodTypeArr.push(ABType, BType, ABType); // AB, AB 인 경우
			}
			// [CASE2] 혈액형이 서로 다른 경우
			else {
				// A 기본
				if (familyArr.includes(AType)) {
					if (familyArr.includes(BType)) cBloodTypeArr.push(AType, BType, OType, ABType); // A, B
					if (familyArr.includes(OType)) cBloodTypeArr.push(AType, OType); // A, O
					if (familyArr.includes(ABType)) cBloodTypeArr.push(AType, BType, ABType); // A, AB
				}
				// B 기본
				else if (familyArr.includes(BType)) {
					if (familyArr.includes(OType)) cBloodTypeArr.push(BType, OType); // B, O
					if (familyArr.includes(ABType)) cBloodTypeArr.push(AType, BType, ABType); // B, AB
				}
				// O 기본
				else if (familyArr.includes(OType)) if (familyArr.includes(ABType)) cBloodTypeArr.push(AType, BType); // O, AB
			}
		}
		if (cBloodTypeArr.length > 0) {
			const addCharArr: string[] = [];
			cBloodTypeArr.map((cItem) => {
				addCharArr.push(cItem.concat('형'));
			});
			setCBloodType(addCharArr.join(', '));
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
		<div className='p-10'>
			<div className='mb-10 border-b-2'>
				<h2>자식 혈액형 구하기 </h2>
			</div>
			<div>
				<div className='mb-10 flex flex-row w-full m-1'>
					<label htmlFor='fBloodType' className='basis-1/4 text-center'>
						아빠의 혈액형
					</label>
					<select id='fBloodType' className='ml-10 h-8 text-sm basis-3/4 text-center' ref={fBloodType} defaultValue='A'>
						<option value='A'>A형</option>
						<option value='B'>B형</option>
						<option value='O'>O형</option>
						<option value='AB'>AB형</option>
					</select>
				</div>
				<div className='mb-10 flex flex-row w-full'>
					<label htmlFor='mBloodType' className='basis-1/4 text-center'>
						엄마의 혈액형
					</label>
					<select id='mBloodType' className='ml-10 h-8 text-sm basis-3/4 text-center' ref={mBloodType} defaultValue='A'>
						<option value='A'>A형</option>
						<option value='B'>B형</option>
						<option value='O'>O형</option>
						<option value='AB'>AB형</option>
					</select>
				</div>
				<div className='ml-12 mb-10 text-center'>
					<button type='button' className='bg-blue-500 border rounded w-2/12' onClick={refactor_funcGenerateType}>
						자식 혈액형 알아보기
					</button>
				</div>
				<div className='mb-10 flex flex-row w-full'>
					<label htmlFor='cBloodType' className='h-10 basis-1/4 text-center'>
						자식의 혈액형
					</label>
					<input
						type='text'
						id='cBloodType'
						className='ml-10 basis-3/4 text-center'
						defaultValue={cBloodType}
						disabled={true}
					/>
				</div>
			</div>
		</div>
	);
};
export default main;
