import { count } from 'console';
import { useEffect, useRef, useState } from 'react';

/**
 * 클로져를 이용한 계산기 모듈
 * @returns
 */
const main = () => {
	const textRef = useRef<HTMLInputElement>(null);
	const resultTextRef = useRef<HTMLInputElement>(null);
	const [calNum, setCalNum] = useState(0);
	let [resultNum, setResultNum] = useState(0);

	useEffect(() => {
		//
	}, []);

	const prettierIgnore = () => {
		const str = 'hello';
		// prettier-ignore
		const chgStr = str.toLowerCase().split('').map((sItem) => {if (sItem.length >= 10) console.log('10자리 이하입니다.');});
	};

	/**
	 * 클로저를 이용한 계산기 모듈
	 */
	const calculator = (num: number) => {
		let value = 0;

		return {
			sum: () => {
				if (resultTextRef.current) resultTextRef.current.value = (resultNum += num).toString();
			},
			sub: () => {
				if (resultTextRef.current) resultTextRef.current.value = (resultNum -= num).toString();
			},
			mul: () => {
				if (resultTextRef.current) resultTextRef.current.value = (resultNum *= num).toString();
			},
			div: () => {
				if (resultTextRef.current) resultTextRef.current.value = Math.floor((resultNum /= num)).toString();
			},
			clear: () => {
				if (resultTextRef.current) resultTextRef.current.value = (0).toString();
				if (textRef.current) textRef.current.value = (0).toString();
			},
		};
	};

	// ================================================================================================================
	return (
		<div>
			<div>
				<h1>클로저를 이용한 계산기</h1>
			</div>
			<div className='mt-10'>
				<label htmlFor='textRef'>
					연산값:
					<input type='number' id='textRef' defaultValue={0} ref={textRef} />
				</label>
			</div>

			<div className='mt-10'>
				<button
					type='button'
					className='ml-10'
					onClick={() => {
						if (textRef.current) calculator(Number(textRef.current.value)).sum();
					}}>
					더하기{' '}
				</button>
				<button
					type='button'
					className='ml-10'
					onClick={() => {
						if (textRef.current) calculator(Number(textRef.current.value)).sub();
					}}>
					빼기{' '}
				</button>
				<button
					type='button'
					className='ml-10'
					onClick={() => {
						if (textRef.current) calculator(Number(textRef.current.value)).mul();
					}}>
					곱하기{' '}
				</button>
				<button
					type='button'
					className='ml-10'
					onClick={() => {
						if (textRef.current) calculator(Number(textRef.current.value)).div();
					}}>
					나누기{' '}
				</button>
				<button
					type='button'
					className='ml-10'
					onClick={() => {
						if (textRef.current) calculator(Number(textRef.current.value)).clear();
					}}>
					클리어{' '}
				</button>
				<br />
			</div>

			<div className='mt-10'>
				<label htmlFor='resultRef'>
					{' '}
					결과값:
					<input type='number' id='resultRef' defaultValue={0} ref={resultTextRef} value={resultNum} />
				</label>
			</div>
		</div>
	);
};
export default main;
