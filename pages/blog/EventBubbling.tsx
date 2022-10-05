const EventBubbling = () => {

    const onClickParent = () => console.log("상위 요소가 호출되었습니다.")
    const onClickChild = () => console.log("하위 요소가 호출되었습니다.")
    const onClickLowestChild = () => console.log("최하위 요소가 호출되었습니다.")

    /**
     * 상위 요소를 클릭하면 하위 메소드까지 호출되도록 처리 
     */
    return (
        <div>
            <div style={{ backgroundColor: "red", width: 250 }} onClickCapture={onClickParent} >상위 요소
                <div style={{ backgroundColor: "blue", width: 250 }} onClickCapture={onClickChild}>하위 요소
                    <div style={{ backgroundColor: "yellow", width: 250 }} onClick={onClickLowestChild}>최하위 요소</div>
                </div>
            </div>
        </div>
    )
}
export default EventBubbling;