import Alert from './alert'
import Footer from './footer'
import Navbar from './navbar'
import LastestProjects from './lastestprojects'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
    
      <Meta />
      <Navbar/>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>

      <LastestProjects/>
      </div>
      
      <Footer />
    </>
  )
}

export default Layout
