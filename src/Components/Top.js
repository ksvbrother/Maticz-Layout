import React from 'react'
import Img from "../Images/Live.png"
const Top = () => {
    const top = [{
        image: Img,
        head: "lenis quies",
        text: "178 items"
    },
    {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    },
    {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    },
    {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    }
        , {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    }
        ,
    {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    },
    {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    }
        , {
        image: Img,
        head: "lenis quies",
        text: "178 items"
    }]
    return (
        <div>

            <h1 className='smallHeading'>Top Creaters</h1>

            <div className='d-flex flex-wrap  rowGap'>
                {top.map((data) => {
                    return (
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div className='topCard d-flex align-item-center justify-content-between'>
                                <img src={data.image} className='smallImg' alt='Gallery' />
                                <div>
                                    <p className='topHead'>{data.head}</p>
                                    <p className='topText'>{data.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Top