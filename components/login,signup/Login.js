import { useState } from "react"
import Link from "next/link"
import { auth } from '../../firebase'
import logincss from "./login.module.css";
import { useRouter } from 'next/router'

function Login() {
    const router = useRouter()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const res = await auth.signInWithEmailAndPassword(email, password)
            console.log(`${res.user.displayName}`)
            alert(`${res.user.displayName} Login successfully`)

            setemail("")
            setpassword("")
            router.push("/")
        } catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert(errorMessage)
            console.log(errorMessage)
            // alert("Login failed Please chech detail carefully")

        }


    }
    return (
        <>
            <section className={logincss.login_section}>

                <div className={logincss.main_div}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} className={logincss.form} >
                        <div className={logincss.inputs_div}>

                            <input className={logincss.input} type="email" placeholder="Type email" value={email} onChange={(e) => { setemail(e.target.value) }} />
                        </div>
                        <div className={logincss.inputs_div}>
                            <input className={logincss.input} type="password" placeholder="Type password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                        </div>
                        <div className={logincss.btndiv}>

                            <button type="submit" className="btn" >Submit</button> <br />
                        </div>
                        <div className={logincss.link}>

                            <Link href="/signup"><a>Don't have an account , Signup now</a></Link>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}
export default Login