import React from 'react'
import obj from './data'
import Btn from './Btn'
export default function Card({ title, text, btn, btn2}) {
        return (
                <>

                        <div class="hero__box">
                                <h2 class="hero__title titles">{title}</h2>
                                <p class="hero__text">{text}</p>
                                <Btn>{btn}</Btn>
                        </div>

                </>
        )
}
