import { useState } from "react"
import Link from "next/link"
import { auth } from "../../firebase"
import logincss from "./signup.module.css";
import {useRouter} from 'next/router'

function Signup() {
const router = useRouter()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [name, setname] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password)
            await res.user.updateProfile({
                displayName: name
            })

            alert(`${res.user.displayName} Signup successfully`)
            router.push("/login")
            setemail("")
            setpassword("")
            setname("")

        } catch (error) {
            var errorCode = error.code;
            alert(errorCode)
            var errorMessage = error.message;
            alert(errorMessage)
            
        }

    }
    return (
        <>
            <section className={logincss.login_section}>

                <div className={logincss.main_div}>
                    <h1>Signup now</h1>
                    <form onSubmit={handleSubmit} className={logincss.form} >
                        <div className={logincss.inputs_div}>
                            <input className={logincss.input} type="name" placeholder="Type name" value={name} onChange={(e) => { setname(e.target.value) }} />
                        </div>
                        <div className={logincss.inputs_div}>
                            <input className={logincss.input} type="email" placeholder="Type email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        </div>
                        <div className={logincss.inputs}>
                            <input className={logincss.input} type="password" placeholder="Type password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        </div>
                        <div className={logincss.btndiv}>

                            <button type="submit" className="btn" >Submit</button> <br />
                        </div>
                        <div className={logincss.link}>

                            <Link href="/login"><a>Don't have an account , Signup now</a></Link>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}
export default Signup