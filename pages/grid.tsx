import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const GridPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="h-full w-full text-2xl">Responsive Grid</h1>
      <div className="pt-5 grid grid-flow-row-dense gap-4 lg:grid-cols-4 md:grid-cols-2">
        <div className="col-span-2  h-100px w-100px text-center bg-violet-800 rounded border-white border-2">
          01
        </div>
        <div className="col-span-2  h-100px w-100px text-center bg-violet-800 rounded border-white border-2">
          02
        </div>
        <div className="col-span-2  h-100px w-100px text-center bg-violet-800 rounded border-white border-2">
          03
        </div>
        <div className="col-span-2  h-100px w-100px text-center bg-violet-800 rounded border-white border-2">
          03
        </div>
      </div>
    </div>
  );
};

GridPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{GridPage()}</Layout>;
};

export default GridPage;
