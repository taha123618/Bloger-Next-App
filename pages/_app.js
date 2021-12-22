import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './components/Navbar'
import { auth } from '../firebase'
import {useEffect , useState} from 'react'

function MyApp({ Component, pageProps }) {
  // login ke bad kia or ktna dhekhna h 
 const [user, setUser] = useState(null) 
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      // after logout 
      else setUser(null)
    })
  }, [])

  return (
    <>
    <Head>
    {/* <!-- Compiled and minified CSS --> */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

    {/* <!-- Compiled and minified JavaScript --> */}
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </Head>
  <Navbar user={user}/>
  <Component {...pageProps} user={user} />
    </>
  )
}

export default MyApp
