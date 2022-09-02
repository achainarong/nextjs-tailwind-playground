import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return <div className="bg-white">asdasd aasd as das</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{Home}</Layout>;
};

export default Home;
