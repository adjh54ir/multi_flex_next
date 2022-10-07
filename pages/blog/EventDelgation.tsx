import { LegacyRef, MutableRefObject, useEffect, useRef } from "react"

const EventDelgation = () => {

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 
        // onclickMenu()
    }, []);

    const onclickMenu = (e) => {
        console.log("onclick Menu")

        // console.log(e.target.attributes.getNamedItem("data-action").value);

        const eventAction = e.target.dataset.action;
        if (eventAction) progressMenu[eventAction]();

    }


    const progressMenu = () => {
        return {
            save: () => alert("저장하기 "),
            edit: () => alert("수정하기 "),
            delelte: () => alert("삭제하기 ")
        }
    }





    return (
        <div id="menu" ref={menuRef} data-action="data-save" style={{ backgroundColor: "red" }} onClickCapture={(e) => onclickMenu(e)}>
            <button id="save" type="button" data-action="data-save">저장하기 </button>
            <button id="edit" type="button" data-action="data-edit">수정하기 </button>
            <button id="delete" type="button" data-action="data-delete">삭제하기  </button>
        </div>
    )

}
export default EventDelgation