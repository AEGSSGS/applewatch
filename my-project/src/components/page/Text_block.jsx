import React from 'react'
import obj from './data'
export default function Text_block() {
        return (
                <>
                        {obj[1].Middle_page.map((items) => {
                                return (
                                        <div class="card">
                                                <h2 class="card__title">{items.title}</h2>
                                                <p class="card__text">{items.text}</p>
                                               {items.img?  <div class="dots">
                                                        <span class="box"></span>
                                                        <span class="box"></span>
                                                        <span class="box"></span>
                                                </div> : null}
                                                {items.href ? <div class="more-wrap">

<a href={items.href} class="more">

        <span class="more__line"></span>

        <span class="more__text">More link</span>

</a>

</div> : null}
                                        </div>
                                )
                        })}

                </>
        )
}
