import Link from "next/link"
import Image from "next/image"
import latestpostcardcss from "./Latestpostcards.module.css"
function Latestpostcards(props) {
    let link = props.title.split(" ").join("_")
    return (
        <>
            <div className={latestpostcardcss.latestpostcard_div}>
                <div className={latestpostcardcss.latestpostcard_image_div}>
                    <Link  href={"/blogs/" + link}>
                        <a >
                            <Image src={props.imageUrl} width="240" height="300" />
                        </a>
                    </Link>
                </div>
                <div className={latestpostcardcss.latestpostcard_text_div}>
                <h1><Link href={"/blogs/" + link} ><a className="link20" >{props.title}</a></Link></h1>
                    {/* <p> {props.para}
                    </p> */}
                </div>
            </div>

        </>
    )
}

export default Latestpostcards