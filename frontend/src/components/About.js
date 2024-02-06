import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        <h2>Our Mission</h2>
                        At LibraHub, we are on a mission to empower individuals, students, and communities 
                        through the joy of reading and the pursuit of knowledge. We believe in the transformative 
                        power of libraries and their ability to inspire, educate, and connect people. 
                        Our Library Management System is designed to streamline library operations,      
                        enhance user experiences, and contribute to the cultural and educational enrichment of society.<br/>
                        <br/>

                        <h2>Who We Are</h2>
                        LibraHub is a team of passionate individuals committed to creating innovative solutions 
                        for library management. With a blend of expertise in technology and a deep 
                        appreciation for literature, we strive to make libraries more accessible and 
                        efficient forboth librarians and library patrons.<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About