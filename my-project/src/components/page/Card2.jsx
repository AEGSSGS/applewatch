import React from 'react'
import Btn from './Btn'
export default function Card2({title, text, btn}) {
        return (
                <>
                        
                                        <div className="control__box">

                                                <h2 className="control__title titles">{title} </h2>

                                                <p className="control__text">{text}</p>

                                                <div href="#home" className=" control__btn">
                                                        <Btn>{btn}</Btn>
                                                </div>

                                        </div>
                                

                </>
        )
}
