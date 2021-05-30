import { useState, useEffect } from 'react'
import { testimonialdata } from './testimonialdata'
import Testimonial from './Testimonial'
import Testimonialscss from './testimonials.module.css'
import { AiTwotoneLeftCircle, AiTwotoneRightCircle } from 'react-icons/ai'
function Testimonials() {

    const [showtesti, setshowtesti] = useState(1)
    const [pagination, setpagination] = useState({
        start: 0, end: showtesti
    })
    const [counter, setcounter] = useState(1)
    function onpaginationchange(a, b) {
        setpagination({ start: a, end: b })
    }
    useEffect(() => {
        if (counter === 0) {
            setcounter(4)
        }
        if (counter === 5) {
            setcounter(1)
        }
        let total = showtesti * counter
        let start = total - showtesti
        let end = total
        onpaginationchange(start, end)
    }, [counter])
    // console.log(counter)
    // console.log(testimonialdata.length)
    return (
        <>
            <section style={{ backgroundColor: "var(--dark-white)" , textAlign:"center" }}>
                <h1 className={Testimonialscss.h1}>Testimonials</h1>
                {
                    testimonialdata.slice(pagination.start, pagination.end).map((data) => {
                        
                        return <Testimonial {...data} key={data.id} />
                    })
                }
                <div style={{ display: "flex", justifyContent: "center", margin: "auto" }} >

                    <AiTwotoneLeftCircle onClick={() => setcounter(counter - 1)} />
                    <AiTwotoneRightCircle onClick={() => setcounter(counter + 1)} />
                </div>
            </section>
            <div style={{backgroundColor:"var(--dark-white)", transform: "rotate(180deg)", display:"flex"}}>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--shark)" fillOpacity="1" d="M0,192L120,181.3C240,171,480,149,720,165.3C960,181,1200,235,1320,261.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>
        </>
    )
}
export default Testimonials;