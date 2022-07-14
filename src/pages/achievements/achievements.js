import './achievements.css';

import React, { useState } from 'react';


import achievements from '../../assets/darkmountain3.png';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

var pathValue = 1;

function Acheivements() {
    const [, setState] = useState();
    // let navigate = useNavigate();

    function clicked(path) {
        pathValue = path;
        setState({});
    }

    

    return (
        <div>
            <div className="Achievements">

                <Header />

                <div className='body_content_achievements' style={{
                    backgroundImage: `url(${achievements})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100vw'
                }}>
                    <div className='d-flex justify-content-center'>
                        <div className='hackathon_container'>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 1 ? ' competition_container_1' : '')}
                                onMouseOver={() => { clicked(1) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g fill=""><path d="M11.33 10.7l.67 1.25.67-1.25L12 9.44zm10.91 7.97H1.76v4h20.48z"></path><path d="M22.68 4.56l-3.03 1.61L12 2.11 4.35 6.17 1.32 4.56l-.99.67 1.38 12.1h20.58l1.38-12.1zM12 14.83L9.8 10.7 12 6.56l2.2 4.14z"></path></g></svg>
                                <span className='competition_name'>Decypher: 48 hr hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2020</span> */}
                            </div>


                            <div className={'d-flex justify-content-start competition_container'+ (pathValue === 2 ? ' competition_container_2' : '')}
                                onMouseOver={() => { clicked(2) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g fill=""><path d="M11.33 10.7l.67 1.25.67-1.25L12 9.44zm10.91 7.97H1.76v4h20.48z"></path><path d="M22.68 4.56l-3.03 1.61L12 2.11 4.35 6.17 1.32 4.56l-.99.67 1.38 12.1h20.58l1.38-12.1zM12 14.83L9.8 10.7 12 6.56l2.2 4.14z"></path></g></svg>

                                <span className='competition_name'>DotSlash 2020 hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2020</span> */}
                            </div>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 3 ? ' competition_container_3' : '')}
                             onMouseOver={() => { clicked(3) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zM14.4 13.17H9.73v-2.54a2.3 2.3 0 01.66-1.61l2.27-2.26a.977.977 0 00.26-.66.92.92 0 10-1.84 0H9.73a2.27 2.27 0 114.53.23c-.058.5-.272.968-.61 1.34l-2.31 2.31a.923.923 0 00-.26.65v1.2h3.32v1.34z" fill=""></path></svg>
                                <span className='competition_name'>Hackwell 2.0: 48 hr hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2021</span> */}
                            </div>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 4 ? ' competition_container_4' : '')}
                             onMouseOver={() => { clicked(4) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zM14.4 13.17H9.73v-2.54a2.3 2.3 0 01.66-1.61l2.27-2.26a.977.977 0 00.26-.66.92.92 0 10-1.84 0H9.73a2.27 2.27 0 114.53.23c-.058.5-.272.968-.61 1.34l-2.31 2.31a.923.923 0 00-.26.65v1.2h3.32v1.34z" fill=""></path></svg>

                                <span className='competition_name'>CTF hackathon by CISFCR</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2019</span> */}
                            </div>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 5 ? ' competition_container_5' : '')}
                             onMouseOver={() => { clicked(5) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zm-5.21 4.04a2.1 2.1 0 01-.13.67 2.06 2.06 0 01-.36.67 1.82 1.82 0 01-.29.33 2.431 2.431 0 01.79 1.8v.9a2.47 2.47 0 11-4.94 0h1.35a1.12 1.12 0 002.24 0v-.9A1.127 1.127 0 0012 8.67h-1.2V7.33H12a1.121 1.121 0 001.11-1c.026-.1.01-.667.01-1.03a1.12 1.12 0 10-2.24 0H9.53a2.5 2.5 0 01.27-1.12 2.38 2.38 0 01.51-.67 2.44 2.44 0 013.38 0c.209.191.381.418.51.67a2.5 2.5 0 01.27 1.12c0 .34.016.924-.01 1.03z" fill=""></path></svg>

                                <span className='competition_name'>Microsoft Codefundo++</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2019</span> */}
                            </div>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 6 ? ' competition_container_6' : '')}
                             onMouseOver={() => { clicked(6) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zm-5.21 4.04a2.1 2.1 0 01-.13.67 2.06 2.06 0 01-.36.67 1.82 1.82 0 01-.29.33 2.431 2.431 0 01.79 1.8v.9a2.47 2.47 0 11-4.94 0h1.35a1.12 1.12 0 002.24 0v-.9A1.127 1.127 0 0012 8.67h-1.2V7.33H12a1.121 1.121 0 001.11-1c.026-.1.01-.667.01-1.03a1.12 1.12 0 10-2.24 0H9.53a2.5 2.5 0 01.27-1.12 2.38 2.38 0 01.51-.67 2.44 2.44 0 013.38 0c.209.191.381.418.51.67a2.5 2.5 0 01.27 1.12c0 .34.016.924-.01 1.03z" fill=""></path></svg>

                                <span className='competition_name'>Microsoft #Code hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2018</span> */}
                            </div>

                            <div className={'d-flex justify-content-start competition_container' + (pathValue === 7 ? ' competition_container_7' : '')}
                             onMouseOver={() => { clicked(7) }}>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g fill=""><path d="M21.9 4.51L19.67.33H4.39L2.14 4.57l3.49 6.58a8 8 0 1012.74.01zm-4.277-2.835L16.49 3.8H7.51L6.377 1.675zM3.67 4.57l1.36-2.56 3.59 6.74A7.826 7.826 0 006.6 10.1zm5.83 12.1h-.83V20H7.33v-7.67H9.5c.435-.003.86.126 1.22.37a2.174 2.174 0 01-1.22 3.97zm.39-8.39L8.22 5.15h7.56l-1.67 3.13a8.09 8.09 0 00-4.22 0zM15.57 20l-1.36-3.33h-.54V20h-1.34v-7.67h2.17a2.165 2.165 0 012.16 2.03.614.614 0 01.01.14 2.148 2.148 0 01-1.06 1.85.21.21 0 01-.06.04L17.02 20zm1.83-9.9a7.874 7.874 0 00-2.01-1.35l3.62-6.8 1.37 2.56z"></path><path d="M14.5 13.68h-.83v1.65h.83a.861.861 0 00.82-.83 1.035 1.035 0 00-.07-.35.836.836 0 00-.75-.47zm-5 0h-.83v1.65h.83a.825.825 0 100-1.65z"></path></g></svg>
                                <span className='competition_name  last_competition'>Lip movement to text conversion</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2018</span> */}
                            </div>
                        </div>

                        <div className='info_container' >
                            <div className={'achievements' + (pathValue === 1 ? ' achievement_visible_1' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Kaamdey - Text based hiring system </span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                    A simple WhatsApp bot service & a web-based VueJs application that provides an online platform to represent the lower working class, in search of jobs.
                                    <br></br>
                                    Integrated the Twilio APIs into the message serving backend, that has been coded in Python. The database employed is a simple JSON-server.
                                    <br></br>
                                    A Vue application present, provides an alternative to the Whatsapp service which employs design principles of conditional rendering of data and also custom URL generation based upon search via WhatsApp. 
                                    </div>
                                <br></br>
                                <div className='d-flex'>
                                <button className='github_button'>Demo Video</button>
                                <br></br>
                                <button className='github_button'>GitHub</button>
                                </div>
                            </div>
                            <div className={'achievements' + (pathValue === 2 ? ' achievement_visible_2' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Public resource management system</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                    One of the main problems faced by villagers is the lack of knowledge about the availability of resources such as water, electricity, and ration. The entire delivery system right now is riddled with corruption and many more problems that devoid the villagers of these resources.
                                    <br></br>
                                    Hence with the help of a partner, we designed a de-centralized full-stack system that will allow the authorities to update the status of any resources or help communicate any information with the villagers; and would also allow the citizens to track the resources.
                                </div>
                                <br></br>
                                <button className='github_button github_button_without_video'>GitHub</button>
                            </div>
                            <div className={'achievements' + (pathValue === 3 ? ' achievement_visible_3' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Intruction doc to JSON convertor</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                    Worked on developing a tool for Honeywell, that converts industrial manufacturing instructions documents into 
                                    a multi-level nested JSON that can be accessed and edited at any level via CRUD operations in real time.
                                    <br></br>
                                    Also, implemented an algorithm that generated HTML elements to visualise and work on this JSON via a VueJs website.
                                </div>
                                <br></br>
                                <button className='github_button github_button_without_video'>GitHub</button>
                            </div>
                            <div className={'achievements' + (pathValue === 4 ? ' achievement_visible_4' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Capture the Flag hackathon</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                 The hackathon organised by the Centre for Information Security, Forensics and Cyber Resilience at PES University
                                    <br></br>
                                 We worked on solving riddles in their network sandbox to crack codes as we proceeded to the next level. Took around 6 hours 
                                 totally to crack all the puzzles and find all the flags hidden across the sandbox.
                                </div>
                                <br></br>
                                <button className='github_button github_button_without_video'>GitHub</button>
                            </div>
                            <div className={'achievements' + (pathValue === 5 ? ' achievement_visible_5' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Hurricane Prediction using NOAA data</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                Using NOAA data archives for past hurricane and hurricane-like events, such as location pressure data, wind flow and various other factors, we acquired useful features using various ML and Deep learning algorithms.
                                    <br></br>
                                    We then correlated this information with live NOAA and BOA data, which we procured via web scraping, to predict the possibility of a hurricane, mainly by monitoring certain hot-spots in a hurricane prone region for any anomaly in the live data. If any anomaly was noticed, then the region was flagged and continuously monitored.
                                    <br></br>
                                    Further extended this project, as part of a course requirement.
                                </div>
                                <br></br>
                                <div className='d-flex'>
                                <button className='github_button'>Demo Video</button>
                                <br></br>
                                <button className='github_button'>GitHub</button>
                                </div>

                            </div>
                            <div className={'achievements' + (pathValue === 6 ? ' achievement_visible_6' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Creating music from human emotions</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                Developed a system, that takes in a paragraph as user input, analyses the text present to understands the emotions conveyed.
                                Further it generates music, from scratch, that compliments the emotions understood. 
                                <br></br>
                                Worked with a fellow musician friend of mine. We integrated our NLP model with Magenta, which is an ML model that can be modelled to generate musical notes based off on several parameters.
                                </div>
                                <br></br>
                                <button className='github_button github_button_without_video'>GitHub</button>
                            </div>
                            <div className={'achievements' + (pathValue === 7 ? ' achievement_visible_7' : ' achievement_not_visible')}>
                                <span className='achievements_highlight_block_information'>Lip movement to text conversion</span>
                                <br></br>
                                <div className='highlight_block_information_sub'>
                                Worked on this project as my semester long final year project while pursuing my Bachelor's in Computer Science. The goal was to convert lip movement to text using OpenCV image preprocessing tools such as a 68-point facial landmark detection model. 
                                <br></br>
                                We then use those results and feed them into an ensemble of machine Learning models to predict the word. We were able to achieve around 67% accuracy for sentence-level prediction for a combination of 4 words.
                                Unfortunately these results were not as useful, as the parameters were highly limited and recordings done in a controlled environment. 
                                </div>
                                <br></br>
                                <button className='github_button github_button_without_video'>GitHub</button>
                            </div>
                        </div>
                    </div>


                    {/* 1 */}
                    {/* <svg fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80"><g fill=""><path d="M11.33 10.7l.67 1.25.67-1.25L12 9.44zm10.91 7.97H1.76v4h20.48z"></path><path d="M22.68 4.56l-3.03 1.61L12 2.11 4.35 6.17 1.32 4.56l-.99.67 1.38 12.1h20.58l1.38-12.1zM12 14.83L9.8 10.7 12 6.56l2.2 4.14z"></path></g></svg> */}
                    {/* 2 */}
                    {/* <br></br> */}
                    {/* <svg fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zM14.4 13.17H9.73v-2.54a2.3 2.3 0 01.66-1.61l2.27-2.26a.977.977 0 00.26-.66.92.92 0 10-1.84 0H9.73a2.27 2.27 0 114.53.23c-.058.5-.272.968-.61 1.34l-2.31 2.31a.923.923 0 00-.26.65v1.2h3.32v1.34z" fill=""></path></svg> */}
                    {/* 3 */}
                    {/* <br></br> */}
                    {/* <svg fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="80" height="80"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zm-5.21 4.04a2.1 2.1 0 01-.13.67 2.06 2.06 0 01-.36.67 1.82 1.82 0 01-.29.33 2.431 2.431 0 01.79 1.8v.9a2.47 2.47 0 11-4.94 0h1.35a1.12 1.12 0 002.24 0v-.9A1.127 1.127 0 0012 8.67h-1.2V7.33H12a1.121 1.121 0 001.11-1c.026-.1.01-.667.01-1.03a1.12 1.12 0 10-2.24 0H9.53a2.5 2.5 0 01.27-1.12 2.38 2.38 0 01.51-.67 2.44 2.44 0 013.38 0c.209.191.381.418.51.67a2.5 2.5 0 01.27 1.12c0 .34.016.924-.01 1.03z" fill=""></path></svg>           */}
                    
                </div>
                <Navbar path={4}/>
            </div>
            <Discussion />
        </div>

    );
}

export default Acheivements;
