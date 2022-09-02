import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const OtherPage: NextPageWithLayout = () => {
  return (
    <div className="h-full w-full">
      <h1 className="h-full w-full text-2xl">Other stuff</h1>
    </div>
  );
};

OtherPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{OtherPage()}</Layout>;
};
export default OtherPage;
