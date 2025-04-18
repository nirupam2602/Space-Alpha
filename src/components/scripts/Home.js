import '../styles/Home.css';
import React, { useState, useEffect } from 'react';

export default function Mission() {

    const ytLink = 'https://www.youtube.com/embed/HdPzOWlLrbE?si=eUb-sFYq_oDujlc5';
    const [ytLi, setYtLink] = useState(null);

    //  Time state
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    // Update time every second
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            setDate(now.toLocaleDateString(undefined, options));
        };

        updateClock(); // Call immediately
        const intervalId = setInterval(updateClock, 1000); // Update every second

        return () => clearInterval(intervalId); // Cleanup when component unmounts
    }, []);

    return (
        <div id='home-container'>
            <div id='home-img'>
                <img src='https://static.vecteezy.com/system/resources/previews/025/002/362/original/3d-astronaut-character-in-space-on-transparent-background-generative-ai-png.png' className='astronaut-img' alt='' />
            </div>

            <div id='home-heading'>
                <h1>Space Alpha &#123;&#945;&#125;</h1>
                <h1>EXPLORE THE UNIVERSE</h1>
                <p>Space α is a learning platform about space.<br/> Here you will get latest information about that.</p>

                {/*  Time + Date Display */}
                <div className="clock">
                    <p style={{ fontSize: "1.2em", margin: "10px 0", color: "#38bdf8" }}>{time}</p>
                    <p style={{ fontSize: "1em", color: "#cbd5e1" }}>{date}</p>
                </div>

                <span className='yt-links'>Formation Of Universe <i htmlFor='Hide-Video' className='fa fa-youtube' /></span>
                <label htmlFor='Hide-Video' className='head-button' onClick={() => { setYtLink(ytLink) }}>Watch Video</label>
            </div>

            <input type="checkbox" id="Hide-Video" />
            <label className="video-cont" htmlFor='Hide-Video'>
                <iframe
                    src={ytLi}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </label>

            <p>Hi</p>
        </div>
    );
}
