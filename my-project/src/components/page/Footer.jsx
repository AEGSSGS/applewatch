import React from 'react'
import Btn from './Btn'
import Card2 from './Card2'
export default function Footer() {
        const arr={
                title:"Take control of your health.",
                text:"With built-in GPS and altimeter, Apple Watch Nike+ has all the features to help you take your run to the next level. You can even pair your watch wirelessly with compatible gym equipment. And it’s swimproof, so you can take a post-run dip in the pool.",
                btn:"Explore features",
        }
        return (
                <>
                        <div className="control" id="services">

                                <div className="container control__container">

                                     <Card2 title={arr.title} text={arr.text} btn={arr.btn}/>   

                                </div>

                        </div>
                </>
        )
}
