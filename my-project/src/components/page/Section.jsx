import React from 'react'
import Card from './Card'
import img1 from "../img/watch.png"
export default function Section() {
        const info = {
                title: "Freedom calls.",
                text: "Answer a call from your surfboard. Ask Siri to send a message. Stream your favorite songs on your run. And do it all while leaving your phone behind. Introducing Apple Watch Series 3 with cellular. Now you have the freedom to go with just your watch.",
                btn: "Watch the keynote",
                
        }
        return (
                <>
                        <div class="hero" id="home">

                                <div class="container hero__container">

                                        <Card title={info.title} text={info.text}  btn={info.btn} btn2={info.btn2}/>

                                        <div class="hero__box">
                                                <img src={img1} alt="Watch" class="hero__img"/>
                                        </div>

                                </div>

                        </div>


                </>
        )
}
