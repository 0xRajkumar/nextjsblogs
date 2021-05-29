import Link from 'next/link'
import Image from 'next/image'
import searchcardscss from './searchcard.module.css'
function Searchcard(props) {
    return (
        <>

            <div className={searchcardscss.div}>
                <div className={searchcardscss.div_image}>
                    <Link href="/">
                        <a>
                            <Image src={props.photo} width="115" height="140"  />
                        </a>
                    </Link>
                </div>
                <div className={searchcardscss.div_text}>
                    <h1>
                        {props.heading}
                    </h1>
                    <p>
                    {props.para}
                    </p>
              
                </div>
            </div>

        </>
    )
}

export default Searchcard