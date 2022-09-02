import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const GridPage: NextPageWithLayout = () => {
  return <div className="bg-white h-full w-full"> das</div>;
};

GridPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{GridPage}</Layout>;
};

export default GridPage;
