import React, { MouseEvent, useEffect, useState } from 'react';

const main = () => {
	const [lottoGameCnt, setLottoGameCnt] = useState<number>(0); // 로도 게임 횟수
	const [lottoGameResult, setLottoGameResult] = useState<number[][]>([]);

	useEffect(() => {
		// fn_initSetting();
	}, []);

	/**
	 * [함수] 로또 번호 생성기
	 * @description : 로또의 번호의 범위는 1 ~ 45 범위이다.
	 * @description : 로또의 번호는 6개이다. + 보너스 번호 1개이다.
	 * 6개 중 6개 맞으면 1등
	 * 6개 중 5개 + 보너스 숫자 맞으면 2등
	 * 6개 중 5개 맞으면 3등
	 * 6개 중 4개 맞으면 4등
	 * 6개 중 3개 맞으면 5등
	 * 6개 중 2개 나 1개 맞으면 6등 - 미 당첨
	 */
	const funcGenerateLotto = () => {
		let oneLottoArr: number[] = [];
		const resultTotalArr: number[][] = [];
		if (lottoGameCnt === 0) alert("로또 게임 수를 선택해주세요");
		else {
			// 	1게임의 경우 처리 방식
			while (true) {
				const _random_1_to_45: number = Math.floor(Math.random() * 45) + 1; // 로또의 번호 범위(1 ~ 45);
				// 7개의 숫자를 중복을 제외한 숫자로 구성
				if (!oneLottoArr.includes(_random_1_to_45)) oneLottoArr.push(_random_1_to_45);
				// [탈출] 7자리가 완성되면 종료
				if (oneLottoArr.length === 7) {
					resultTotalArr.push(oneLottoArr);
					// 선택한 게임 횟수만큼 배열의 수가 맞지 않으면 배열을 추가함.
					if (resultTotalArr.length !== lottoGameCnt) oneLottoArr = []; // 초기화 하여서 재 번호 생성
					else break;
				}
			}
		}
		// 숫자 정렬
		const _resultArr = resultTotalArr.filter((item) => item.sort((a, b) => a - b));
		setLottoGameResult(_resultArr);
	};

	/**
	 * [함수] 로또 번호 클립보드 복사하기 기능
	 * @param e 
	 */
	const funcLottoCopy = async (e: MouseEvent) => {
		if (e.currentTarget.previousElementSibling) {
			const siblingVal = e.currentTarget.previousElementSibling.getAttribute("value");
			if (siblingVal) await navigator.clipboard.writeText(siblingVal)
			alert("클립보드에 복사 되었습니다. 붙여넣기를 해주세요")
		}
	};

	// ================================================================================================================================================================
	return (
		<div>
			{/* header */}
			<div className='mb-10'>
				<h1>로또 게임 기능</h1>
			</div>

			{/* contents */}
			<div className='mb-8'>
				<label htmlFor='gameCnt' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
					게임 횟수
				</label>
				<div className='flex flex-row w-full'>
					<div className='basis-3/4'>
						<select
							id='gameCnt'
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							onChange={(e) => setLottoGameCnt(parseInt(e.target.value))}
							defaultValue={lottoGameCnt}>
							<option value={0}>게임을 선택하시오</option>
							<option value={1}>1 게임</option>
							<option value={3}>3 게임</option>
							<option value={5}>5 게임</option>
							<option value={10}>10 게임</option>
						</select>
					</div>
					<div className='basis-1/4'>
						<button
							type='button'
							className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
							onClick={funcGenerateLotto}>
							게임 생성
						</button>
						<button
							type='button'
							className='text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
							onClick={() => setLottoGameResult([])}>
							게임 초기화
						</button>
					</div>
				</div>
				<div className='w-3/12'></div>
			</div>

			<div className=''>
				<label htmlFor='gameResult' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
					로또 결과
				</label>
				<div>
					{lottoGameResult.length === 0 ? (
						<input
							type='text'
							id='search'
							className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='게임을 생성해보세요'
							readOnly
						/>
					) : (
						lottoGameResult.map((item, index) => {
							return (
								<div key={`lottoList-${index}`}>
									<div className='relative'>
										<input
											type='text'
											id='gameResult'
											className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
											placeholder='게임을 선택해주세요'
											value={item.join(' ')}
											readOnly
										/>
										<button
											type='button'
											className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
											onClick={(e) => funcLottoCopy(e)}>
											복사하기{' '}
										</button>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};
export default main;
