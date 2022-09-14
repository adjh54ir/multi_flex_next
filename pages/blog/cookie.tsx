import { useEffect } from 'react';
import CommonStrUtil from '../../src/apps/commons/utils/CommonStrUtil';

const cookieComponent = () => {
	useEffect(() => {
		fn_cookie();
	}, []);

	const fn_cookie = () => {
		
        // 1. key = value 형태로 쿠키를 저장한다. (만료기간 X)
		// document.cookie = 'cookieKey = cookie value; path=/; expires= 349857349857';

        // console.log(CommonStrUtil.getCookie("userId"));
        CommonStrUtil.setCookie("userId", "adjh54", 1);

        // CommonStrUtil.deleteCookie("userId");

		// Read Cookie
		let allCookie = document.cookie;
		console.log(allCookie);
	};

	return (
		<div>
			<div>
				<h1>쿠키에 대해서 이해합니다.</h1>
			</div>
		</div>
	);
};
export default cookieComponent;
