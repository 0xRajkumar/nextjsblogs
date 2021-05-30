import { useState } from "react"
import Link from "next/link"
import { auth } from "../../firebase"
import logincss from "./signup.module.css";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';

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


            toast.success(`${res.user.displayName} Signup successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            router.push("/login")
            setemail("")
            setpassword("")
            setname("")

        } catch (error) {
            var errorCode = error.code;

            var errorMessage = error.message;

            toast.error(errorMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }

    }
    return (
        <>
            <section className={logincss.login_section}>

                <div className={logincss.main_div}>
                    <h1>Signup now</h1>
                    <p>Dont't miss your next opportunity.Signin to stay updates on your professional world  </p>
                    <hr />
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}
export default Signup