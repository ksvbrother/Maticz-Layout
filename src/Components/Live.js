import React from 'react'
import Image from "../Images/Live.png"
import { AiFillHeart } from "react-icons/ai"
const Live = () => {
    const live = [{
        image: Image,
        head: "Women NFT #325",
        smallhead: "Highest bid",
        price: "15,000 USD",
        profileHead: "@ robert03",
        profileText: "By lorem ipsum",
        count: "200"
    },
    {
        image: Image,
        head: "Women NFT #325",
        smallhead: "Highest bid",
        price: "15,000 USD",
        profileHead: "@ robert03",
        profileText: "By lorem ipsum",
        count: "200"
    }, {
        image: Image,
        head: "Women NFT #325",
        smallhead: "Highest bid",
        price: "15,000 USD",
        profileHead: "@ robert03",
        profileText: "By lorem ipsum",
        count: "200"
    }, {
        image: Image,
        head: "Women NFT #325",
        smallhead: "Highest bid",
        price: "15,000 USD",
        profileHead: "@ robert03",
        profileText: "By lorem ipsum",
        count: "200"
    }]
    return (
        <div>
            <h1 className='smallHeading'>Live Auctions</h1>
            <div className='d-flex flex-wrap rowGap'>
                {live.map((data) => {
                    return (
                        <div className='col-lg-4 col-xl-3 col-sm-6 col-12'>
                            <div className='liveCard'>
                                <div className='imageSec' >
                                    <img src={data.image} className='liveImage' alt='Gallery' />
                                    <div className='timer'>
                                        <span>24</span>
                                        <span>:</span>
                                        <span>02</span>
                                        <span>
                                            :
                                        </span>
                                        <span>45</span>
                                    </div>
                                </div>
                                <div className='liveDes'>
                                    <p className='liveHead'>{data.head}</p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p className='liveTxtOne'>{data.smallhead}</p>
                                        <p className='liveTxtTwo'>{data.price}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between"
                                    >
                                        <div className='profile d-flex align-items-center justify-content-between'>
                                            <div className='imgGroup'>
                                                <img src={data.image} className='profileImg' alt='Gallery' />
                                                <img src={data.image} className='profileImg' alt='Gallery' />
                                            </div>
                                            <div>
                                                <p className='profileHead'>{data.profileHead}</p>
                                                <p className='profileText'>{data.profileText}</p>
                                            </div>

                                        </div>

                                        <div className='like align-self-end'>
                                            <AiFillHeart style={{ color: "#989998" }} />
                                            <span className='likeCount'>{data.count}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Live