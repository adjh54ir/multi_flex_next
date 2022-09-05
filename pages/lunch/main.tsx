import { RefObject, useEffect, useRef } from 'react';
import Winwheel from 'winwheel';
const main = () => {
	useEffect(() => {
		configWinWheel();
	});

	let canvasRef = useRef<any>();

	const configWinWheel = () => {
		canvasRef = new Winwheel({
			numSegments: 8, // Number of segments
			outerRadius: 212, // The size of the wheel.
			centerX: 217, // Used to position on the background correctly.
			centerY: 219,
			textFontSize: 28, // Font size.
			// Definition of all the segments.
			segments: [
				{ fillStyle: '#eae56f', text: 'Prize 1' },
				{ fillStyle: '#89f26e', text: 'Prize 2' },
				{ fillStyle: '#7de6ef', text: 'Prize 3' },
				{ fillStyle: '#e7706f', text: 'Prize 4' },
				{ fillStyle: '#eae56f', text: 'Prize 5' },
				{ fillStyle: '#89f26e', text: 'Prize 6' },
				{ fillStyle: '#7de6ef', text: 'Prize 7' },
				{ fillStyle: '#e7706f', text: 'Prize 8' },
			],
			// Definition of the animation
			animation: {
				type: 'spinToStop',
				duration: 5,
				spins: 8,
				callbackFinished: alertPrize,
			},
		});
	};

	const alertPrize = (indicatedSegmen: any) => {
		// Do basic alert of the segment text.
	};

	return (
		<div>
			<div className='mb-10'>
				<h1>점심메뉴 선택</h1>
			</div>

			<div>
				<div>오늘 점심은 무엇으로 할까요~?</div>

				<canvas id='canvas' width='500' height='500' ref={canvasRef}>
					Canvas not supported, use another browser.
				</canvas>
				<button type='button' onClick={'canvasRef.startAnimation()'}>
					Spin the Wheel
				</button>
			</div>
		</div>
	);
};
export default main;
