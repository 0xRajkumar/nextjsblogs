import About from './about/About'
import LandingPage from './homelandingpage/LandingPage'
import FeaturingBlogs from './featuringposts/Featuringblogs'
import Testimonials from './testimonials/Testimonials'
import Wave from '../Wave'
export default function Home ({Allblogs}) {
    return (
        <>
        <LandingPage/>
        <Wave bc={"var(--bright-cyan)" } color={"var(--white)"} height={"250px"} />
        <About/>
        <Wave bc={"var(--white)" } color={"var(--shark)"} height={"250px"} />
        <FeaturingBlogs Allblogs={Allblogs} />
        <Testimonials/>
        </> 
    )
}
