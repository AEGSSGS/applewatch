import React from 'react'
import obj from './data'
export default function Text_block() {
        return (
                <>
                        {obj[1].Middle_page.map((items) => {
                                return (
                                        <div className="card">
                                                <h2 className="card__title">{items.title}</h2>
                                                <p className="card__text">{items.text}</p>
                                                {items.img ? <div className="dots">
                                                        <span className="box"></span>
                                                        <span className="box"></span>
                                                        <span className="box"></span>
                                                </div> : null}
                                                {items.href ? <div className="more-wrap">

                                                        <a href={items.href} className="more">

                                                                <span className="more__line"></span>

                                                                <span className="more__text">More link</span>

                                                        </a>

                                                </div> : null}
                                        </div>
                                )
                        })}

                </>
        )
}
