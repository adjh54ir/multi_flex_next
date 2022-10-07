const EventCapturing = () => {

    const onClickParent = (e) => {
        e.stopPropagation();
        console.log("상위 요소가 호출되었습니다.")
    }
    const onClickChild = (e) => {
        e.stopPropagation();
        console.log("하위 요소가 호출되었습니다.")
    }
    const onClickLowestChild = (e) => {
        e.stopPropagation();
        console.log("최하위 요소가 호출되었습니다.");
    }
    return (
        <div>
            <div style={{ backgroundColor: "red", width: 250 }} onClickCapture={(e) => onClickParent(e)} >상위 요소
                <div style={{ backgroundColor: "blue", width: 250 }} onClickCapture={(e) => onClickChild(e)}>하위 요소
                    <div style={{ backgroundColor: "yellow", width: 250 }} onClickCapture={(e) => onClickLowestChild(e)}>최하위 요소</div>
                </div>
            </div>
        </div>
    )
}
export default EventCapturing;