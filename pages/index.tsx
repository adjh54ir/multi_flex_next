import type { NextPage } from 'next';
import Header from './common/Header';
import Layout from './common/Layout';

const Home: NextPage = () => {
  return (
    <div>
      <Layout >
        <p>Hello Next.js</p>
      </Layout>
    </div>
  );
}

export default Home
