import React from 'react'
import Canvas from '../../../canvas/Canvas'
import './About.scss'


function About_block() {
    return (
        <div className="about_container">
            <Canvas></Canvas>
            <div className="about_grid">
                <article>
                    <h2>Lorem ipsum amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium laudantium delectus veniam animi voluptas sapiente cumque magni? Deleniti illo sapiente molestiae? Ullam impedit cum, necessitatibus corporis eaque aperiam excepturi!</p>
                </article>
                {/* <article>
                    <h2>Lorem ipsum amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium laudantium delectus veniam animi voluptas sapiente cumque magni? Deleniti illo sapiente molestiae? Ullam impedit cum, necessitatibus corporis eaque aperiam excepturi!</p>
                </article>
                <article>
                    <h2>Lorem ipsum amet</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo accusantium laudantium delectus veniam animi voluptas sapiente cumque magni? Deleniti illo sapiente molestiae? Ullam impedit cum, necessitatibus corporis eaque aperiam excepturi!</p>
                </article> */}
            </div>
        </div>
    )
}

export default About_block
