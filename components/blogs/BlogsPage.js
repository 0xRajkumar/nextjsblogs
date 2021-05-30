import { useState, useEffect } from 'react'
import BlogsCard from './BlogsCard'
import { blogscarddata } from './blogscarddata'
import blogspagecss from './blogspage.module.css'
import LandingPage from '../home/homelandingpage/LandingPage'
import Wave from '../Wave'

import { BsSearch } from "react-icons/bs";
export default function BlogsPage(props) {

    // Search
    const blogs = props.Allblogs
    const [Allblogs, setAllblogs] = useState(blogs)
    const [search, setsearch] = useState("")
    function searchFunc(e) {

        setsearch(e.target.value)
       
    }
    useEffect(() => {
        if (search === "") {
            setAllblogs(blogs)
        }
        else {
            var result = Allblogs.filter((obj) => {
                return obj.title.split(" ").join("").toLocaleUpperCase().includes(search.split(" ").join("").toLocaleUpperCase())
            })
            setAllblogs(result)
        }


    }, [search])



    // Pagination


    const [counter, setcounter] = useState(1)
    const [pagination, setpagination] = useState({
        start: 0, end: 4
    })
    const noofblogs = 8;
    useEffect(() => {
        let end = noofblogs * counter;
        let start = noofblogs * counter - noofblogs;
        setpagination({ start, end })

    }, [counter])


    return (
        <>
            <LandingPage />
            <Wave bc={"var(--bright-cyan)"} color={"var(--white)"} height={"250px"} />
            <section className={blogspagecss.section} >

                <div className={blogspagecss.main_div}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 style={{ fontSize: "3rem", fontWeight: 'lighter' }}>All Blogs</h1>
                        <div className={blogspagecss.search_div}>
                            <form >
                                <input type="text" placeholder="Search Posts" value={search} onChange={searchFunc} />
                                <BsSearch />
                            </form>
                        </div>
                    </div>

                    <div className={blogspagecss.main_div_blogs}>
                        {
                            Allblogs.slice(pagination.start, pagination.end).map((data, i) => {
                                return <BlogsCard key={i + 1} {...data} />

                            })
                        }
                    </div>
                    <div className={blogspagecss.main_div_blogs_pagination}>
                        <button onClick={() => { if (counter >= 2) { setcounter(counter - 1) } }} className="btn_pagination">Prev.</button>
                        <button onClick={() => { if (counter < Math.floor(Allblogs.length / noofblogs)) { setcounter(counter + 1) } }} className="btn_pagination">Next.</button>
                    </div>
                </div>
            </section>
            <Wave bc={"var(--white)"} color={"var(--shark)"} height={"250px"} />
        </>
    )
}