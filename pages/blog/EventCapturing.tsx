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

    const EventCapturing = () => {

        const onClickParent = () => console.log("상위 요소가 호출되었습니다.")
        const onClickChild = () => console.log("하위 요소가 호출되었습니다.")
        const onClickLowestChild = () => console.log("최하위 요소가 호출되었습니다.")

        /**
         * 상위 요소를 클릭하면 하위 메소드까지 호출되도록 처리 
         */
        return (
            <div>
                <div style={{ backgroundColor: "red", width: 250 }} onClick={onClickParent} >상위 요소
                    <div style={{ backgroundColor: "blue", width: 250 }} onClick={onClickChild}>하위 요소
                        <div style={{ backgroundColor: "yellow", width: 250 }} onClickCapture={onClickLowestChild}>최하위 요소</div>
                    </div>
                </div>
            </div>
        )

    }
    export default EventCapturing;