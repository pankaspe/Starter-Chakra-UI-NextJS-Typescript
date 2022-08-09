import TopNav from '../navbars/TopNav'
import Hero from '../Hero'

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children } : Props) {
   return(
      <>      
         <TopNav />
         <Hero />
         {children}
      </>
   )
}