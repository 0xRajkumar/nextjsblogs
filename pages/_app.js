import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { auth } from '../firebase'
import { useState, useEffect } from "react"
import 'react-toastify/dist/ReactToastify.css';




function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuser(user)
      }else{
      
        setuser(null)}
    })

  } ,[user])

  return (
    <>
      <Navbar user={user} />
      <Component user={user} {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
