import Link from 'next/link'
import Image from 'next/image'
import blogscardcss from './blogscard.module.css'
export default function BlogsCard(props) {
    let link = props.title.split(" ").join("_")
    console.log(props.body)
    return (
        <>
            <div className={blogscardcss.div} >
                <div className={blogscardcss.image_div}>
                    <div className={blogscardcss.image_div_hover}>
                        <Link href={"/blogs/" + link}>
                            <a>
                                <img src={props.imageUrl} height="240" width="400" className={blogscardcss.grayscale} />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={blogscardcss.text_div}>
                    <h1><Link href={"/blogs/" + link} ><a className="link20" >{props.title}</a></Link></h1>
                    <p>{props.body.slice(0,40)}</p>
                </div>
            </div>
        </>
    )
}