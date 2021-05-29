import footercss from './footer.module.css'
import Link  from 'next/link'
function Footer() {
    return (
        <>
            <footer className={footercss.footer}>
                <div className={footercss.footernavigation}>
                    <ul>
                        <li><Link href="/" ><a className="basic_4">Home</a></Link></li>
                        <li><Link href="/#about" ><a className="basic_4">Aboutus</a></Link></li>
                        <li><Link href="/createblog" ><a className="basic_4">Create Blogs</a></Link></li>
                        <li><Link href="/privacypolicy" ><a className="basic_4">Privacy Policy</a></Link></li>
                    </ul>
                </div>
                <div className={footercss.footercopyright}>
                    <h3>
                    Copyright © 2020-2021 BloggersWay.com
                    </h3>
                </div>
            </footer>

        </>
    )
}

export default Footer