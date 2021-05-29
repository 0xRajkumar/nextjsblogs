import featuringblogcss from './featuringblog.module.css'
import Latestpostcards from './Latestpostcards'
import { BsSearch } from 'react-icons/bs'
import { latestpostdata } from './latestpostdata'
import { searchcarddata } from './searchcarddata'
import Searchcards from './Searchcards'

export default function FeaturingBlogs({Allblogs}) {
    return (
        <>
            <section className={featuringblogcss.featuring_section} id="features">
                <section >
                    <div className={featuringblogcss.featuring_section_text}>
                        <h1>Recent Posts</h1>
                    </div>
                    <div className={featuringblogcss.featuring_section_posts}>
                        {
                            Allblogs.map((data, index) => {
                                return <Latestpostcards key={index} {...data} />
                            })
                        }
                    </div>
                </section>
                {/* <aside>
                    <div className={featuringblogcss.asidediv}>
                        <div className={featuringblogcss.search_div}>
                            <form >
                                <input type="text" placeholder="Search Posts" />
                                <BsSearch key="999" />
                            </form>
                        </div>
                        <div className={featuringblogcss.search_post} >
                            {
                                searchcarddata.map((data, index) => {
                                    return <Searchcards key={index} {...data} />
                                  
                                   
                                })
                            }
                        </div>
                    </div>
                </aside> */}
            </section>
            <div style={{ backgroundColor: "var(--dark-white)" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--shark)" fillOpacity="1" d="M0,192L120,181.3C240,171,480,149,720,165.3C960,181,1200,235,1320,261.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>

        </>
    )
}



