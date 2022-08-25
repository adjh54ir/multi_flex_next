import * as React from 'react';
import { useState, useEffect } from 'react';

const Coding0825 = () => {
	useEffect(() => {
		fn_question1();
	}, []);

	/**
	 * [프로그래머스] 2016년
	 */
	const fn_question1 = () => {
		let answer = '';
		let a = 5;
		let b = 24;

		// 요일
		let WEEKEND = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
		answer = WEEKEND[new Date(2016, a, b).getDay()];
		console.log(answer);
        

		let lastDay = new Date(2016, 1, 0).getDate(); // 마지막 날을 구하는 방법
		// let lastDay = new Date(2019, 1, 0).console.log(lastDay);
	};

	return <h1>간단한 코딩</h1>;
};
export default Coding0825;
