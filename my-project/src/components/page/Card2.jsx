import React from 'react'
import Btn from './Btn'
export default function Card2({title, text, btn}) {
        return (
                <>
                        
                                        <div class="control__box">

                                                <h2 class="control__title titles">{title} </h2>

                                                <p class="control__text">{text}</p>

                                                <div href="#home" class=" control__btn">
                                                        <Btn>{btn}</Btn>
                                                </div>

                                        </div>
                                

                </>
        )
}
