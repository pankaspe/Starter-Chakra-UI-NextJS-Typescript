import type { NextPage } from 'next'
import Image from 'next/image'
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import websiteConfig from '../lib/config/website';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Home"
        description={websiteConfig.meta.subTitle}
      />
    </MainLayout>
  )
}

export default Home
