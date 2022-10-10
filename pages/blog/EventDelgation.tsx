import { useState } from 'react';

const EventDelgation = () => {
	const [btnIdx, setBtnIdx] = useState(0);

	const onclickMenu = (e) => {
		if (e.currentTarget) {
			const flag = e.currentTarget.children[btnIdx].getAttribute('data-action');
			if (flag === 'save') alert('저장하기');
			if (flag === 'edit') alert('수정하기');
			if (flag === 'delete') alert('삭제하기');
		}
	};

	return (
		<div id='menu' style={{ backgroundColor: 'red' }} onClick={(e) => onclickMenu(e)}>
			<button id='save' type='button' data-action='save_0' onMouseUp={() => setBtnIdx(0)}>
				저장하기
			</button>
			<button id='edit' type='button' data-action='edit_1' onMouseUp={() => setBtnIdx(1)}>
				수정하기
			</button>
			<button id='delete' type='button' data-action='delete_2' onMouseUp={() => setBtnIdx(2)}>
				삭제하기
			</button>
		</div>
	);
};
export default EventDelgation;
