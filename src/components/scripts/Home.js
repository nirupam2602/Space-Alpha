import '../styles/Home.css';
import React, {useState } from 'react'

export default function Mission() {

    const ytLink = 'https://www.youtube.com/embed/HdPzOWlLrbE?si=eUb-sFYq_oDujlc5'
    const [ytLi, setYtLink] = useState(null)
 
    return (
        <div id='home-container'>
            <div id='home-img'>
                <img src='https://static.vecteezy.com/system/resources/previews/025/002/362/original/3d-astronaut-character-in-space-on-transparent-background-generative-ai-png.png' className='astronaut-img' alt='' />
            </div>
            <div id='home-heading' >
                <h1>Space Alpha</h1>
                <h1>EXPLORE THE UNIVERSE</h1>
                <p>Space Alpha is a learning platform. Here you can learn Cosmology and Research. <br /> We provide latest information about space.</p>
                <span className='yt-links'>Formation Of Universe <i htmlFor='Hide-Video'  className='fa fa-youtube' /></span>
                <label htmlFor='Hide-Video' className='head-button' onClick={() => {setYtLink(ytLink)}} >Watch Video</label>
            </div>
            <input type="checkbox" id="Hide-Video" />
            <label className="video-cont" htmlFor='Hide-Video' >
                <iframe src={ytLi} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </label>
        </div>
    );
}   
