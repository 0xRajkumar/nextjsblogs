import Image from 'next/image'
import blogcss from './blog.module.css'


function Blog(props) {
    return (
        <>
            <section className={blogcss.section}>
                <div className={blogcss.heading_div}>

                    <h1>{props.title}</h1>
                </div>
                <div className={blogcss.image_div}>
                    <img src={props.imageUrl} width="800" height="450" />
                </div>
                <div className={blogcss.text_div}>
                    <p>{props.body}</p>
                </div>
               
            </section>

        </>
    )
}
export default Blog