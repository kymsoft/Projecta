
import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: "Projecta",
  description: "Discover and Share AI Prompts"
}
const Layout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className='main'>
          <div className="gradient"/>
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
