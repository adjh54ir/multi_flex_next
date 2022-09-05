import type { NextPage } from 'next';
import Image from 'next/image';
/**
 * 메인 페이지
 * @returns
 */
const Home: NextPage = () => {
	return (
		<div className='text-center'>
			<div className='mb-10 '>
				<h1 className='text-3xl font-bold underline'>나만의 프로젝트</h1>
			</div>
			<div>
				<Image src={require('../public/images/ThoTho.png')} alt='nono' />
			</div>
		</div>
	);
};

export default Home;
