import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>LibraHub Library</p>
                        <p>Rajakeeya Mawatha</p>
                        <p>Colombo 00700</p>
                        <p>Sri Lanka</p>
                        <p><b>Email:</b>LibraHub@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <a href='#home'>Linked In</a>
                        <a href='#home'>FaceBook</a>
                        <a href='#home'>Instragm</a>
                        <a href='#home'>Twitter</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Malsha Abeywickrama</p>
                        <p>Bsc(Hons) in Library Management</p>
                        <p>Contact: +94 761898855</p>
                    </div>
                </div>
    
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved<br /><span>Designed with ❤️ by Malsha Dissanayaka</span></p>
            </div>
        </div>
    )
}

export default Footer