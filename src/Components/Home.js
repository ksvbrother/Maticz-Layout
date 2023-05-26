import React from 'react'
import Banner from './Banner'
import Hotswiper from './Hotswiper'
import Top from './Top'
import Live from './Live'
import NFT from './NFT'

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <div className='whole'>
                <div className='container'>
                    <Hotswiper />
                    <Top />
                    <Live />
                    <NFT />
                </div>
            </div>
        </div>
    )
}

export default Home