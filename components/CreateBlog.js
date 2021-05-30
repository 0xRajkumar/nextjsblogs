import { useState, useEffect } from 'react'
import createblogcss from './createblog.module.css'
import { v4 as uuidv4 } from 'uuid'
import { storage, db, serverTimestamp } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';

function CreateBlog({ user }) {
    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const [image, setimage] = useState(null)
    const [url, seturl] = useState("")
    const [filename, setfilename] = useState("No file choosen")






    useEffect(() => {
        if (url) {
            try {
                db.collection('blogs').add({
                    title,
                    body,
                    imageUrl: url,
                    postedBy: user.uid,
                    createdAt: serverTimestamp()
                })
                toast.success('🦄 Blog created', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                settitle("")
                setbody("")
                setimage("")
                seturl("")
                setfilename("")
            } catch (err) {
                toast.error(err.message, {
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
    }, [url])


    const SubmitDetails = () => {
        if (!title || !body || !image) {
           
            toast.warn('🦄please add all the fields', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else {

            var uploadTask = storage.ref().child(`image/${uuidv4()}`).put(image)
            uploadTask.on('state_changed',
                (snapshot) => {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (progress == '100') {
                        toast.info('🦄Image uploaded', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            });
                    }

                },
                (error) => {
                    toast.error(`${error.message}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                        
                },
                () => {

                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                       
                        seturl(downloadURL)

                    });
                }
            );
        }

    }
    return (
        <>
            <section className={createblogcss.section}>
                <h1>
                    Create Your Blogs
                    </h1>
                <div className={createblogcss.main_div}>
                    <div className={createblogcss.text_div}>
                        <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} placeholder="Type title" />
                        <textarea cols='30' rows='18' type="text" value={body} onChange={(e) => { setbody(e.target.value) }} placeholder="type content" />
                    </div>
                    <div className={createblogcss.file_div}>
                        <input id="file" type="file" onChange={(e) => { setfilename(e.target.files[0].name); setimage(e.target.files[0]) }} hidden />
                        <label htmlFor="file" id="file_label" >Choose Photo</label>
                        <span id="file_name" >{filename}</span>
                    </div>
                    <div className={createblogcss.btndiv}>
                        <button onClick={SubmitDetails} className={`${createblogcss} btn`}>Create</button>
                    </div>
                </div>



            </section>
            <div style={{ backgroundColor: "var(--bright-cyan)", display: "flex" }}>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--shark)" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>                    </svg>
            </div>
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

export default CreateBlog;