/* eslint-disable no-constant-condition */
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MOMENT_FORMAT_TYPE } from '../code/CommonCode';
import { REGXP_DATE_TYPE1 } from '../code/CommonRegCode';
import CommonNumUtil from './CommonNumUtil';
/**
 * 공통 유틸 구성
 * @author adjh54ir
 * make** : 만들어주는 함수
 * get** : 데이터를 조회 해오는 함수
 *
 */
class CommonStrUtil {
	/**
	 * 빈값 여부 체크 함수(string, array, Object, Array<Object>)
	 * @param {string | string[] | Object | Array<Object>} value : 빈값 체크를 하려는 값
	 * @returns {boolean} 빈값 여부 반환
	 */
	isEmpty = (value: string | string[] | Object | Array<Object>): boolean => {
		if (
			value === '' ||
			value === 'null' ||
			value === null ||
			value === undefined ||
			(value !== null && typeof value === 'object' && !Object.keys(value).length)
		) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * UUID 난수 생성 함수
	 * @param {boolean} isHypen : UUID 하이픈 존재 여부
	 * @returns {string} 난수 문자열
	 */
	makeUUID = (isHypen: boolean): string => {
		let _result: string = '';
		if (isHypen) {
			_result = uuidv4();
		} else {
			_result = uuidv4().replace(/\-/g, '');
		}
		return _result;
	};

	/**
	 * [공통함수] 대문자 + 숫자 조합의 랜덤문자 생성 함수
	 * @param {int} length 조합 숫자 개수
	 * @returns {string} 난수 문자열
	 */
	makeVrfcCode = (length: number): string => {
		const _vrfcCode = Array(length)
			.fill(0)
			.map((x) => Math.random().toString(36).charAt(2))
			.join('')
			.toUpperCase();
		return _vrfcCode;
	};

	/**
	 * [함수] AWS Publie Burket GET
	 * @param {stirng} burketUrl
	 * @param {stirng} fileName
	 * @param {'png' | 'jpg'} fileType
	 * @returns
	 */
	getAWSPublicBurket = async (burketUrl: string, fileName: string, fileType: 'png' | 'jpg'): Promise<string> => {
		const _result = `${burketUrl}/${fileName}.${fileType}`;
		return _result;
	};

	/**
	 * [공통함수] 내 브라우져 정보 조회
	 * @returns {string} 브라우져 정보 문자열
	 */
	getUserBrowserAgent = (): string => {
		const _resultUserAgent = window.navigator.userAgent;
		return _resultUserAgent;
	};

	/**
	 * 파일 다운로드 기능 (Vanilla JS)
	 * @param {string} file_url
	 * @param {string} file_name
	 */
	fileDownload = (file_url: string, file_name: string) => {
		// 파일 다운로드
		const element = document.createElement('a');
		element.setAttribute('href', file_url);
		// const random_num = Math.floor(Math.random() * 10000001); // 랜덤 숫자로 채번
		element.setAttribute('download', `${file_name}.jpeg`);
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	/**
	 * [함수] video 태그의 카메라 권한 요청
	 */
	cameraAuthority = () => {
		const video: any = document.querySelector('#videoElement');
		const { mediaDevices } = navigator;
		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices
				.getUserMedia({ video: true }) // 비디오만 사용
				.then((stream) => {
					if (video) video.srcObject = stream; // 받아온 값을 스트림으로 출력
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			alert('카메라 권한 체크를 허용 해 주세요');
		}
	};

	/**
	 * [함수] 사진 캡쳐 기능
	 */
	takePicutre = () => {
		const img = document.querySelector('img');

		navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
			// Do something with the stream.
			const track = mediaStream.getVideoTracks()[0];
			// @ts-ignore
			let imageCapture = new ImageCapture(track);

			// 이미지 캡쳐 및 파일 다운로드 기능
			imageCapture
				.takePhoto()
				.then((blob: any) => {
					if (img) {
						img.classList.remove('hidden');
						const image_url = URL.createObjectURL(blob);
						img.src = image_url; // blob URL
					}
				})
				.catch((error: string) => {
					console.log('takePhoto() error: ', error);
				});
		});
	};

	/**
	 * 특정 날짜의 요일 반환 함수
	 * @param year
	 * @param day
	 * @returns
	 */
	dayStr = (year: number, day: number): string | 'SUN' | 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' => {
		let answer = '';
		const WEEKEEND = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

		if (CommonNumUtil.between(year, 0, 2040)) {
			const monthNum = day.toString().substring(0, 2);
			const dayNum = day.toString().substring(2, 4);
			const searchDay = new Date(`${year}-${monthNum}-${dayNum}`).getDay();
			for (let i = 0; i < WEEKEEND.length; i++) {
				if (i === searchDay) {
					answer = WEEKEEND[i];
				}
			}
		}
		return answer;
	};

	/**
	 * [공통함수] 시작일과 종료일에 대한 계산 함수
	 * @param {Date | string} startDate : 시작일자
	 * @param {Date | string} endDate   : 종료일자
	 * @returns {number} resultCnt : 실패 시 (-1) 이외에는 종료일자 - 시작일자 값
	 */
	compareDay = (startDate: Date | string, endDate: Date | string): number => {
		let resultCnt = 0; // 최종 반환 값
		let compare_start_date: Date | string = startDate; // 비교가 될 값
		let compare_end_date: Date | string = endDate;

		if (typeof startDate === 'string') {
			// Format 검증(YYYY-MM-DD)
			if (REGXP_DATE_TYPE1.test(startDate)) {
				// format이 맞이면 Date 타입으로 변환
				compare_start_date = new Date(startDate);
			} else {
				console.log('파라미터 첫번째 값이 유효성 YYYY-MM-DD 형태가 아닙니다.');
				resultCnt = -1;
			}
		}
		if (typeof endDate === 'string') {
			if (REGXP_DATE_TYPE1.test(endDate)) {
				compare_end_date = new Date(endDate);
			} else {
				console.log('파라미터 첫번째 값이 유효성 YYYY-MM-DD 형태가 아닙니다.');
				resultCnt = -1;
			}
		}

		// Date 타입 일 경우 수행함.
		if (
			typeof compare_start_date === 'object' &&
			compare_start_date instanceof Date &&
			typeof compare_end_date === 'object' &&
			compare_end_date instanceof Date
		) {
			let interval = 0;

			if (compare_start_date > compare_end_date) interval = compare_start_date.getTime() - compare_end_date.getTime();
			else interval = compare_end_date.getTime() - compare_start_date.getTime();

			resultCnt = Math.floor(interval / (1000 * 60 * 60 * 24)) + 1; // 퇴사일 - 입사일
			return resultCnt;
		} else {
			console.log('발생할 일은 없지만 에러 입니다.');
			return (resultCnt = -1);
		}
	};

	/**
	 * [공통함수] 주말을 제외한 시작시간~종료시간간에 일한 시간 반환
	 * @param {Date} startDate      : 시작일자
	 * @param {Date} endDate        : 종료일자
	 * @param {boolean} isWoringDay : 일한 시간 반환여부/ true: 일한시간 false: 주말
	 * @returns
	 */
	workingDay = (startDate: Date, endDate: Date, isWoringDay: boolean): number => {
		let resultCnt = 0;

		let woringCnt = 0;
		let weekeendCnt = 0;
		while (true) {
			var temp_date = startDate;
			if (temp_date.getTime() > startDate.getTime()) {
				console.log('count : ' + woringCnt);
				break;
			} else {
				var tmp = temp_date.getDay();
				// 주말 인 경우
				if (tmp === 0 || tmp === 6) {
					weekeendCnt++;
				}
				// 평일 인 경우
				else {
					woringCnt++;
				}
				temp_date.setDate(endDate.getDate() + 1);
			}
		}
		if (isWoringDay) resultCnt = woringCnt;
		else resultCnt = weekeendCnt;
		return resultCnt;
	};

	/**
	 * [함수] AWS Publie Burket Insert
	 * @param {string} fileContent
	 * @param {string} fileName
	 * @returns {Promise<number>} 성공(200)
	 */
	// insertAWSPublicBurket = async (fileContent: string, fileName: string): Promise<number> => {
	//     // [STEP1] AWS 연결 환경 구성
	//     AWS.config.update({
	//         accessKeyId: "",            // 접근키(AccessKey)
	//         secretAccessKey: "",        // 비밀키(SecretKey)
	//         region: ""                  // 리전
	//     });

	//     // [STEP2] 환경 구성 데이터로 S3 객체 생성
	//     const _s3: AWS.S3 = new AWS.S3();
	//     // [STEP3] 버킷 전송 데이터 환경 설정
	//     const _burketDataSet: PutObjectRequest = {
	//         Bucket: "",                         // S3 버킷명
	//         Key: `Upload/StudyManage/${fileName}`,     // 저장 할 디렉토리 및 파일 명
	//         Body: fileContent,                           // 파일 정보
	//     }
	//     // [STEP3] 버킷 데이터 전송
	//     const _requestResponse: PromiseResult<AWS.S3.PutObjectOutput, AWS.AWSError> = await _s3.putObject(_burketDataSet).promise();
	//     // [STEP4] 버킷 데이터 전송 응답 코드
	//     return _requestResponse.$response.httpResponse.statusCode;
	// }
}

export default new CommonStrUtil();