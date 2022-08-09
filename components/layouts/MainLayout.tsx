import TopNav from '../navbars/TopNav'

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children } : Props) {
   return(
      <>      
         <TopNav />
         {children}
      </>
   )
}