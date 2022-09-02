import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return <div className="bg-white h-full w-full"> ssss dsds</div>;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{HomePage}</Layout>;
};

export default HomePage;
