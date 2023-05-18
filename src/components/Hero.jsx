import React from 'react'
import '../styles/Hero.css'
import { cardData, somecards } from '../assets/somedata'
import eth from '../assets/eth.png'
import cryptoimg from '../assets/cr.png'
import second from '../assets/cyp.png'
import '../styles/HeroMd.css'
import '../styles/HeroSm.css'
import '../styles/HeroXs.css'


const Hero = () => {
  return (
    <div className='container'>
        <div className="header">
            <h1 className='grad-h1'>The Future Of Trading</h1>
            <h1 className='begin-h1'>Begins Here</h1>
            <p>Trade any asset on any chain in seconds. No deposits. </p>
            <div className="buttons">
                <button className='btn-1'>Read Docs</button>
                <button className='btn-2'>Lunch App</button>
            </div>
            <h1 className='sape-h1'>$12B+ Total Volume</h1>
        </div>
        <div className="crypto-cards">
            {cardData.map(({name, img, color}) => (
            <div className="card" style={{backgroundColor : `${color}`}}>
                <img src={img} alt="image" />
                <div className="content">
                    <p className="name">{name}</p>
                    <h1 className="price">$6.4B</h1>
                </div>
            </div>

            ))}
        </div>
        <h1 className='just'>Just Trade.</h1>
        <div className="some-cards">
            {somecards.map(({image, title, description}) => (
            <div className="some-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            ))}
        </div>
        <div className="full-card">
            <div className="the-content">
                <h1>Trade Cross Chain</h1>
                <p>Seamlessly swap assets natively across chains within minutes. No bridges. No hassle.</p>
                <button>Start Trading</button>
            </div>
            <img src={cryptoimg} alt="an-image" />
        </div>
        <div className="full-card-2">
            <div className="the-content">
                <h1>Our Size is Size</h1>
                <p>Trade in size and get the most value for your buck.</p>
                <p>No slippage on MEV front-running</p>
                <button>Start Trading</button>
            </div>
            <img src={second} alt="an-image-2" />
        </div>
        <div className="join">
            <h1>Join The Crypto 23 And Earn Rewards</h1>
            <p>Shape the future of the protocol by joining Crypto 23 gamified, storyverse-driven DAO-the Crypto 23. Stake tokens, complete quests, and earn Crypto 23 tokens & one-of-a-kind NFTs</p>
            <button>Explore Crypto 23</button>
        </div>

    </div>
  )
}

export default Hero