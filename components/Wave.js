import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


function Wave(props) {
    return (
        <>
            
                <div style={{backgroundColor: props.bc , display:"flex" }}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill={props.color} fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,160C384,160,480,96,576,101.3C672,107,768,181,864,218.7C960,256,1056,256,1152,256C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                
        </>
    )
}
export default Wave