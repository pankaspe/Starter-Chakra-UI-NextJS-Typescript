import Head from "next/head";
import websiteConfig from '../lib/config/website';
import { useRouter } from 'next/router';

export interface Seo {
   title?: string,
   description: string,
   hero?: string,
}

const Seo: React.FC<Seo> = ({ title, description }) => {

  const path = useRouter().pathname;
  
  return (
    <>
      <Head>
        <title>
          {path === "/" 
            ? websiteConfig.meta.title 
            : `${websiteConfig.meta.title}  - ${title}`
          }
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
 }
 
 export default Seo;