import { useEffect } from 'react';

const main = () => {
	useEffect(() => {}, []);

	const ulStyle =
		'w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white';
	const liStyle = 'w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600';
	const radioStyle =
		'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500';

	const fn_main = () => {
		// 가위 1 / 바위 2 / 보 3
	};

	return (
		<div>
			{/* header */}
			<div className='mb-10'>
				<h1>가위바위보 연승게임</h1>
			</div>

			{/* contents */}
			<div className='mb-8'>
				{/* section1  */}
				<div>
					<h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>가위바위보 선택</h3>
					<ul className={ulStyle}>
						<li className={liStyle}>
							<div className='flex items-center pl-3'>
								<input id='list-radio-license' type='radio' value='' name='list-radio' className={radioStyle} />
								<label
									htmlFor='list-radio-license'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
									가위
								</label>
							</div>
						</li>
						<li className={liStyle}>
							<div className='flex items-center pl-3'>
								<input id='list-radio-id' type='radio' value='' name='list-radio' className={radioStyle} />
								<label htmlFor='list-radio-id' className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
									바위
								</label>
							</div>
						</li>
						<li className={liStyle}>
							<div className='flex items-center pl-3'>
								<input id='list-radio-millitary' type='radio' value='' name='list-radio' className={radioStyle} />
								<label
									htmlFor='list-radio-millitary'
									className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'>
									보
								</label>
							</div>
						</li>
					</ul>
					<div>
						<button
							type='button'
							className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
							선택
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default main;
