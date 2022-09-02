import { ReactElement } from 'react';
import Layout from '../components/layout';
import SideNav from '../components/SideNav';
import { NextPageWithLayout } from './_app';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="h-full w-full text-2xl">Nextjs Tailwind Playground</h1>
      <p className="pt-5 text-base">
        Just a small playground to test tailwind styling
      </p>
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{HomePage()}</Layout>;
};

export default HomePage;
