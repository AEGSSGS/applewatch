import React from 'react'
import obj from './data'
import Btn from './Btn'
export default function Card({ title, text, btn, btn2}) {
        return (
                <>

                        <div className="hero__box">
                                <h2 className="hero__title titles">{title}</h2>
                                <p className="hero__text">{text}</p>
                                <Btn>{btn}</Btn>
                        </div>

                </>
        )
}
