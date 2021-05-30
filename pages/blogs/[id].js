import { useState } from 'react'
import { db } from '../../firebase'
import { useRouter } from 'next/router'
import Blog from '../../components/myblog/blog'




export default function BlogC({ Allblogs, allComments, user }) {
   
    const router = useRouter()
   
    const id = router.query;
    // console.log(allComments)
  
    var result = Allblogs.find((obj) => {
        return obj.title.split(" ").join("_") === id.id
    })

    // console.log(result)

    return (
        <Blog {...result} allComments={allComments} user={user} />
    )






}



export async function getServerSideProps(context) {

    const id = context.query.id

    // console.log(id.id)
    const querySnap = await db.collection('blogs').orderBy('createdAt', "desc").get()
    const Allblogs = querySnap.docs.map(docSnap => {
        return {
            ...docSnap.data(),
            createdAt: docSnap.data().createdAt.toMillis(),
            id: docSnap.id
        }
    })


    var result = Allblogs.find((obj) => {
        return obj.title.split(" ").join("_") === id
    })
    // console.log(result)
    // console.log(Allblogs[1].id)
    const allcommentsnap = await db.collection('blogs').doc(result.id).collection("comments").get()
    const allComments = allcommentsnap.docs.map((commentsnap) => {
        return commentsnap.data()
    })
    // console.log(allComments)

    return {
        props: { Allblogs, allComments } // will be passed to the page component as props
    }
}