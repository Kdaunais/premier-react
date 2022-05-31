import './Header.scss'
import '../../App.css'

import React from 'react'



function Header() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Mon premier react</h1>
            <p>Formation web dans le but d'étendre mes compétences</p>

        </div>
    )
}

export default Header
