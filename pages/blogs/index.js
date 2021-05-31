import {db} from '../../firebase'
import BlogsPage from "../../components/blogs/BlogsPage"
export default function BlogsC({Allblogs , user}) {
  // console.log(user)
    return (
        <>
            <BlogsPage Allblogs={Allblogs} />
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