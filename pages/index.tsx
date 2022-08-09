import type { NextPage } from 'next'
import Image from 'next/image'
import MainLayout from "../components/layouts/MainLayout";
import Hero from '../components/Hero'
import Seo from "../components/Seo";
import websiteConfig from '../lib/config/website';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        description={websiteConfig.meta.subTitle}
      />
      <Hero 
        headline={websiteConfig.meta.title} 
        subHeadline={websiteConfig.meta.subTitle} 
      />
    </MainLayout>
  )
}

export default Home
