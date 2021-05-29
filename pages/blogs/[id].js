import { useState } from 'react'
import { db } from '../../firebase'
import { useRouter } from 'next/router'
import Blog from '../../components/myblog/blog'




export default function BlogC({ Allblogs }) {
    const router = useRouter()
    console.log(router)
    const id = router.query;
    console.log(id.id)
    var result = Allblogs.find((obj)=>{
    return obj.title.split(" ").join("_") === id.id
    })
     
    // console.log(result)

    return (
        <Blog {...result} />
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