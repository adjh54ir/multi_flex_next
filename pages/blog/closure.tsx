import { useEffect } from "react"

const closure = () => {

    useEffect(() => {

    }, []);
    const makeFunc = () => {
        var name = "Mozilla";

        const displayName = () => {
            alert(name);
        }
        return displayName;
    }

    var myFunc = makeFunc();
    //myFunc변수에 displayName을 리턴함
    //유효범위의 어휘적 환경을 유지
    myFunc();
    //리턴된 displayName 함수를 실행(name 변수에 접근)


    return (
        <div>

        </div>
    )

}
export default closure