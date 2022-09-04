import React, { useEffect, useState } from 'react';

const LottoComponent = () => {
	const [lottoGameCnt, setLottoGameCnt] = useState<number>(1); // 로도 게임 횟수
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
	const fn_generateLotto = () => {
		let _oneLottoArr: number[] = [];
		const _resultTotalArr: number[][] = [];

		// 	1게임의 경우 처리 방식
		while (true) {
			const _random_1_to_45: number = Math.floor(Math.random() * 45) + 1; // 로또의 번호 범위(1 ~ 45);

			// 7개의 숫자를 중복을 제외한 숫자로 구성
			if (!_oneLottoArr.includes(_random_1_to_45)) _oneLottoArr.push(_random_1_to_45);

			// 7자리가 완성되면 종료
			if (_oneLottoArr.length === 7) {
				_resultTotalArr.push(_oneLottoArr);
				// 선택한 게임 횟수만큼 배열의 수가 맞지 않으면 배열을 추가함.
				if (_resultTotalArr.length !== lottoGameCnt) {
					_oneLottoArr = []; // 초기화 하여서 재 번호 생성
				} else {
					break;
				}
			}
		}
		const _resultArr = _resultTotalArr.filter((item) => item.sort((a, b) => a - b));
		setLottoGameResult(_resultArr);
		console.log(_resultArr);
		console.log(_resultArr);
	};

	const fn_lottoCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		// 로또 번호
		const lotto_num = e.currentTarget.previousSibling?.nodeValue;
		console.log(lotto_num);
	};

	// ================================================================================================================================================================
	return (
		<div>
			{/* header */}
			<div>
				<h1>로또 게임 시작!</h1>
			</div>

			{/* contents */}
			<div className='overflow-x-auto relative mt-10'>
				<div className='mt-10'>
					<label htmlFor='countries' className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
						게임 횟수
					</label>
					<select
						id='countries'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						onChange={(e) => setLottoGameCnt(parseInt(e.target.value))}>
						<option selected>게임을 선택하시오</option>
						<option value={1}>1 게임</option>
						<option value={3}>3 게임</option>
						<option value={5}>5 게임</option>
						<option value={10}>10 게임</option>
					</select>
				</div>
				<div className='mt-10'>
					<button
						type='button'
						className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
						onClick={fn_generateLotto}>
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

			<div className='margin-bottom'>
				<div className='mt-5'>
					<label className='margin-bottom'>로또 결과 </label>
					<div>
						{lottoGameResult.length === 0 ? (
							<input type='text' value='게임을 생성해보세요~!' readOnly />
						) : (
							lottoGameResult.map((item, index) => {
								return (
									<div key={`lottoList-${index}`}>
										<input type='text' value={item.join(' ')} readOnly />
										<button type='button' className='margin-left' onClick={(e) => fn_lottoCopy(e)}>
											복사하기{' '}
										</button>
										<br />
									</div>
								);
							})
						)}
					</div>
				</div>
			</div>

			<div>{lottoGameResult.length > 0 && <label>1등 됩시닷</label>}</div>
		</div>
	);
};
export default LottoComponent;
