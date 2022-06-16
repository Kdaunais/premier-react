import './Canvas.scss'
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  
  const draw = (ctx, canvas, points, maxWidth, maxHeight) => {
    
    ctx.clearRect(0, 0, maxWidth, maxHeight)
    ctx.fillStyle = "#fff"
    ctx.strokeStyle = "#fff"

    for (let point of points) {
      // Bonus 1 : Mouvement
      // Possibilité de faire rebondir
      point.x += point.vx
      point.y += point.vy

      //gauche
      if (point.x < 0 || point.x > maxWidth) {
          point.vx *= -1
          point.vy *= -1
      }
      if (point.y < 0 || point.y > maxHeight) {
          point.vx *= -1
          point.vy *= -1
      }
      // Fin Bonus 1

      ctx.beginPath()
      ctx.arc(point.x, point.y, point.dimension, 0, Math.PI * 2)
      ctx.stroke()
      ctx.shadowColor = '#eefa02';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;


      // Fin Bonus 2
  }


    
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationFrameId
    
    let points = []

    for (let i = 0; i < 10; i++) {
      points.push({
          x: aleatoire_entier(0, canvas.width),
          y: aleatoire_entier(0, canvas.height),

          dimension: aleatoire_entier(10, 250),
  
          // Nécessaire pour le bonus 1 (voir plus bas)
          vx: aleatoire(-0.5, 0.5), // Vitesse x
          vy: aleatoire(-0.5, 0.5), // Vitesse y
      })
    }
    console.log(points);
    
    //Our draw came here
    const render = () => {


      draw(context, canvas, points, canvas.width, canvas.height)
      
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

function aleatoire(min, max) {
  let difference = max - min // 5
  let aleatoire = Math.random() * difference
  return min + aleatoire
}

function aleatoire_entier(min, max) {
    return Math.floor(aleatoire(min, max + 1))
}

export default Canvas