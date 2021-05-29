import aboutcss from './about.module.css'
import AboutCard from './Aboutcard'
import {aboutdata} from './aboutcarddata'


function About() {
    return (
        <>

            <section className={aboutcss.aboutsection} id="about">
                <div className={aboutcss.heading_div}>
                    <h1>About Us</h1>
                    <p>We provide the perfect service for you.</p>
                </div>
                <div className={aboutcss.cards_div}>
                    {
                        aboutdata.map((data) => {
                            const { key, icon, heading, para } = data
// console.log(id)
                            return <AboutCard key={key} icon={icon} heading={heading} para={para} />

                        })
                    }

                </div>
            </section>

        </>
    )
}

export default About