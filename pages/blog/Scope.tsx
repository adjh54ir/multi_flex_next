import { useEffect } from "react";

// 상위 함수 
const ScopeComponent = () => {

    const scopeChainVar = "스코프 체인";

    // 하위 함수 
    const fn_controlScope = () => {
        console.log(scopeChainVar);     // 렉시컬 스코프 
    };

    return (
        <></>
    )
}
export default ScopeComponent;