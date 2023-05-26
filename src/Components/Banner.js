import React from 'react'
import bannerImg from "../Images/Banner.png"
import Right from "../Images/Live.png"
const Banner = () => {
    return (
        <div className='paddingTop  bannerSection'>
            <div className='d-flex container flex-wrap rowGap'>
                <div className='col-lg-6 col-12 col-md-6'>
                    <div>
                        <h1 className='heading bigHead'>Discover</h1>
                        <h2 className='subheading bigHead'>Digital art &</h2>
                        <h2 className='subheading bigHead'>Collect NFTS</h2>
                        <p className='bannerText'>Lorem ipsum dolor sit amet" is a Latin phrase that translates to "There is no one who loves or pursues or desires to obtain pain of itself, because it is pain." It is a placeholder text that can be created using online generators such as loremipsum.io or dummy text generators. The phrase is often used as a metaphor for pain.</p>
                    </div>

                </div>
                <div className='col-lg-6 col-12 col-md-6 bannerImg'>
                    <div className='bannerRight'>
                        <img src={bannerImg} className='bannerCardImg' alt='Gallery' />
                        <div className='d-flex align-item-center bannerDec'>
                            <img src={Right} className='circleImg' alt='Gallery' />
                            <div>
                                <p className='bannerRightText'>
                                    Blue Studios NFT
                                </p>
                                <p className='bannerRightTextTwo'>by lorem ipsum</p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Banner