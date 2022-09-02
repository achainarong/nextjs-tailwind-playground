import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const OtherPage: NextPageWithLayout = () => {
  return <div className="bg-white h-full w-full"> das</div>;
};

OtherPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{OtherPage}</Layout>;
};
export default OtherPage;
