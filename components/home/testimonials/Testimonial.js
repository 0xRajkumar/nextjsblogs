import Image from 'next/image'
import testimonialcss from './testimonial.module.css'
function Testimonial(props) {
    return (
        <>

            <div className={testimonialcss.div}>
                <Image src="/doublequote.png" height="60" width="60" />
                <p>{props.para}</p >
                    <h1>{props.name} </h1>
            </div>
        
        </>
    )
}
export default Testimonial;