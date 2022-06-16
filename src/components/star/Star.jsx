import React, { useState } from 'react';
import './Star.scss'

function Star() {

    let rotation = 0
    let styleRotation = ""

    const [deg, setDeg] = useState(0)

    const wheelStar = (event) => { 
        rotation -=10
        setDeg ('rotateZ('+ rotation +'deg)')
        console.log(deg);
    }
    

    React.useEffect(() => {

        window.addEventListener('wheel', wheelStar)

        return () => {
            window.removeEventListener('wheel', wheelStar)
        }
    }, [])
   
    return (
        <div className="star-container" >
           <img src="./public/images/star.png" alt="star"  style={{transform:deg }} />
        </div>
    )
}

export default Star
