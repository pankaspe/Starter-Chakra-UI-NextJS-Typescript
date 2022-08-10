import type { NextPage } from 'next'
import Image from 'next/image'
import MainLayout from "../components/layouts/MainLayout";
import Seo from "../components/Seo";
import Hero from '../components/Hero'

const Docs: NextPage = () => {
  return (
    <MainLayout>
      <Seo
        title="Docs"
        description="Documentation of Anzasca template"
      />
      <Hero 
         headline="Docs" 
         subHeadline="Documentation for Anzasca template" 
      />
    </MainLayout>
  )
}

export default Docs
