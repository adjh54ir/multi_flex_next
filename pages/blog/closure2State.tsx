import { useState } from 'react';

const closure2State = () => {
	const [count, setCount] = useState(0);

	const onClickBtnHandler = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<div>
				<button type='button' onClick={onClickBtnHandler}>
					클로저 테스트
				</button>
			</div>
			<div>
				<input type='text' value={count} />
			</div>
		</div>
	);
};
export default closure2State;
