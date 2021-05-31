import Image from 'next/image'
import blogcss from './blog.module.css'
import { useState } from 'react'
import { db } from '../../firebase'

import { ToastContainer, toast } from 'react-toastify';
function Blog(props) {
    const allComments = props.allComments;
    // console.log(props.allComments)
    const [comment, setcomment] = useState("")
    const [onthespotcomment, setonthespotcomment] = useState([])
    function makeComment() {
        if (props.user) {
            if (!comment) {
                toast.warn('Please fill all detail', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else {
                // console.log(props)
                db.collection('blogs').doc(props.id).collection("comments").add({
                    text: comment,
                    name: props.user.displayName
                })
                toast.success('Posted', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setonthespotcomment((olditem) => {
                    return [...olditem, comment]
                })
                setcomment("")

            }
        }
        else {
            toast.error('Please login', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <>
            <section className={blogcss.section}>
                <div className={blogcss.heading_div}>

                    <h1>{props.title}</h1>
                </div>
                <div className={blogcss.image_div}>
                    <Image src={props.imageUrl} width="800" height="450" />
                </div>
                <div className={blogcss.text_div}>
                    <p>{props.body}</p>
                    <hr />

                    <div className={blogcss.comment_section}>
                        <h1>Comment Box</h1>

                        {
                            allComments.map((data, index) => {
                                return <div className={blogcss.comment_div} key={index}>
                                    <h4 > <span className={blogcss.name}>{data.name +":" }</span><span className={blogcss.text}> {data.text} </span> </h4>

                                </div>

                            })
                        }
                        {
                            onthespotcomment.map((data, index) => {
                                return <div className={blogcss.comment_div} key={index}>
                                    <h4 > <span className={blogcss.name}>{props.user.displayName}</span> <span className={blogcss.text}>{data} </span> </h4>

                                </div>

                            })
                        }
                        <div className={blogcss.comment_section_input}>
                            <input type="text" placeholder="Type comment" value={comment} onChange={(e) => { setcomment(e.target.value) }} />
                            <button onClick={makeComment} >Post</button>
                        </div>
                    </div>
                </div>

            </section>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default Blog

