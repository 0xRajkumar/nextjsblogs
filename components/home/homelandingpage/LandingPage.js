import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import landingpagecss from './landingpage.module.css'
function LandingPage() {
    return (
        <>
            <section className={landingpagecss.landing} >
                <div className={landingpagecss.landingpage_wrap}>

                    <div className={landingpagecss.landingpage_text}>
                        <h1>Write blog and earn money</h1>
                        <p>Write blogs and earn monay online easily and fast with Bloggerway ,It is Best online platform to create blogs without coding</p>
                       <Link href="/createblog"><a><button className="btn">Create</button></a></Link> 
                    </div>
                    <div className={landingpagecss.landingpage_image}>


                        <Image src="/background.svg" alt="" width="500" height="400" />


                    </div>

                </div>
                <div className={landingpagecss.bulb}>

                    <Image src="/bulb.svg" alt="" width="1000" height="1000" />
                </div>
                <div className={landingpagecss.bulb1}>

                    <Image src="/bulb1.svg" alt="" width="700" height="700" />
                </div>


            </section>

        </>
    )

}


export default LandingPage