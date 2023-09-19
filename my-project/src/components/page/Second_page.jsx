import React from 'react'
import Card from './Card'
import img1 from "../img/band.png"
export default function Second_page() {

  const arr={
    title:"Nike Sport Band. Light. Flexible. Breathable.",
    text:"Made from the same durable, lightweight fluoroelastomer as the original Apple Watch Sport Band, the Nike Sport Band reduces weight and improves ventilation via row after row of compression-molded perforations.",
    btn:"Buy now",
  }
  return (
    <>
        <div className="info" id="offers">

<div className="container info__container">
    
   <Card title={arr.title} text={arr.text} btn={arr.btn}/>
    
    <div className="info__img-box">
        <img className="info__img" src={img1} alt="Band"/>
    </div>

</div>

</div>
    
    
    </>
  )
}
