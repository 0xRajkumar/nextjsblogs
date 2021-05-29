
import styles from '../styles/Home.module.css'
import styled from "styled-components";
import * as fa from 'react-icons/fa'
import  Home  from "../components/home/home";
import {db} from '../firebase'


export default function HomeC({Allblogs}) {
  return (
    <>
      <Home Allblogs={Allblogs} />      
    </>
  )
}


export async function getServerSideProps(context) {
  const querySnap = await db.collection('blogs').orderBy('createdAt', "desc")
    
    .get()
    const Allblogs = querySnap.docs.map(docSnap => {
    return {
      ...docSnap.data(),
      createdAt: docSnap.data().createdAt.toMillis(),
      id: docSnap.id
    }
  })
  // console.log(Allblogs)


  return {
    props: { Allblogs }, // will be passed to the page component as props
  }
}

