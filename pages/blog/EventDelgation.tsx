<<<<<<< HEAD
import { LegacyRef, MouseEvent, MutableRefObject, useEffect, useRef } from "react"

const EventDelgation = () => {

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 
        // onclickMenu()
    }, []);

    /**
     * [함수] 메뉴를 클릭하면 수행하는 함수 
     * @param e 
     */
    const onclickMenu = (e: MouseEvent<HTMLDivElement>) => {
        console.log(e.currentTarget.childNodes);

        const childNodes = e.currentTarget.children;

        console.log(childNodes);




    }


    const progressMenu = () => {
        return {
            save: () => alert("저장하기 "),
            edit: () => alert("수정하기 "),
            delelte: () => alert("삭제하기 ")
        }
    }
    return (
        <div id="menu" ref={menuRef} data-action="data-save" style={{ backgroundColor: "red" }} onClick={(e) => onclickMenu(e)}>
            <button id="save" type="button" data-action="data-save">저장하기 </button>
            <button id="edit" type="button" data-action="data-edit">수정하기 </button>
            <button id="delete" type="button" data-action="data-delete">삭제하기  </button>
        </div>
    )

}
export default EventDelgation
=======
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
>>>>>>> 942ca4935d944a7363698ab6a41ca2b64bfe68d3
