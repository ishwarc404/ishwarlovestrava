import './achievements.css';


import heatmap from '../../assets/heatmaporiginal.png';

import Header from '../../common/header/header';
import Navbar from '../../common/navbar/navbar';
import Discussion from '../../common/discussion/discussion';

function Acheivements() {
    return (
        <div>
            <div className="Achievements">

                <Header />

                <div className='bodycontent' style={{
                    backgroundImage: `url()`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100vw'
                }}>
                    <div className='d-flex justify-content-center'>
                        <div className='hackathon_container'>


                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g fill=""><path d="M11.33 10.7l.67 1.25.67-1.25L12 9.44zm10.91 7.97H1.76v4h20.48z"></path><path d="M22.68 4.56l-3.03 1.61L12 2.11 4.35 6.17 1.32 4.56l-.99.67 1.38 12.1h20.58l1.38-12.1zM12 14.83L9.8 10.7 12 6.56l2.2 4.14z"></path></g></svg>
                                <span className='competition_name'>Decypher: 48 hr virtual hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2020</span> */}
                            </div>


                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><g fill=""><path d="M11.33 10.7l.67 1.25.67-1.25L12 9.44zm10.91 7.97H1.76v4h20.48z"></path><path d="M22.68 4.56l-3.03 1.61L12 2.11 4.35 6.17 1.32 4.56l-.99.67 1.38 12.1h20.58l1.38-12.1zM12 14.83L9.8 10.7 12 6.56l2.2 4.14z"></path></g></svg>

                                <span className='competition_name'>DotSlash 2020 hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2020</span> */}
                            </div>
                            
                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zM14.4 13.17H9.73v-2.54a2.3 2.3 0 01.66-1.61l2.27-2.26a.977.977 0 00.26-.66.92.92 0 10-1.84 0H9.73a2.27 2.27 0 114.53.23c-.058.5-.272.968-.61 1.34l-2.31 2.31a.923.923 0 00-.26.65v1.2h3.32v1.34z" fill=""></path></svg>
                                <span className='competition_name'>Hackwell 2.0: 48 hr hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2021</span> */}
                            </div>

                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zM14.4 13.17H9.73v-2.54a2.3 2.3 0 01.66-1.61l2.27-2.26a.977.977 0 00.26-.66.92.92 0 10-1.84 0H9.73a2.27 2.27 0 114.53.23c-.058.5-.272.968-.61 1.34l-2.31 2.31a.923.923 0 00-.26.65v1.2h3.32v1.34z" fill=""></path></svg>

                                <span className='competition_name'>CTF hackathon by CISFCR</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2019</span> */}
                            </div>

                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zm-5.21 4.04a2.1 2.1 0 01-.13.67 2.06 2.06 0 01-.36.67 1.82 1.82 0 01-.29.33 2.431 2.431 0 01.79 1.8v.9a2.47 2.47 0 11-4.94 0h1.35a1.12 1.12 0 002.24 0v-.9A1.127 1.127 0 0012 8.67h-1.2V7.33H12a1.121 1.121 0 001.11-1c.026-.1.01-.667.01-1.03a1.12 1.12 0 10-2.24 0H9.53a2.5 2.5 0 01.27-1.12 2.38 2.38 0 01.51-.67 2.44 2.44 0 013.38 0c.209.191.381.418.51.67a2.5 2.5 0 01.27 1.12c0 .34.016.924-.01 1.03z" fill=""></path></svg>

                                <span className='competition_name'>Microsoft Codefundo++ hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2019</span> */}
                            </div>

                            <div className='d-flex justify-content-start competition_container'>
                                <svg className='trophy_icon' fill="#FEC835" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M19.67 2.29V.33H4.33v1.96h-4v3.55a2.756 2.756 0 001.13 2.58c.29.2.92.56 1.6.93V7.81c-.37-.21-.672-.387-.84-.5-.5-.332-.55-.73-.55-1.47v-2.2h2.66v7.5c.002.242.029.483.08.72a4.571 4.571 0 001.99 2.86l3.23 1.84c.552.315 1.12.602 1.7.86v2.57L6.92 22.3v1.37h10.16V22.3l-4.41-2.35v-2.46c.32-.15.83-.42 1.72-.93l3.22-1.84a4.54 4.54 0 001.99-2.81c.059-.252.09-.51.09-.77l-.02-7.5h2.66v2.2c0 .74-.06 1.13-.55 1.47-.16.11-.46.29-.83.49v1.54c.68-.37 1.3-.72 1.59-.92a2.757 2.757 0 001.13-2.58V2.29h-4zm-5.21 4.04a2.1 2.1 0 01-.13.67 2.06 2.06 0 01-.36.67 1.82 1.82 0 01-.29.33 2.431 2.431 0 01.79 1.8v.9a2.47 2.47 0 11-4.94 0h1.35a1.12 1.12 0 002.24 0v-.9A1.127 1.127 0 0012 8.67h-1.2V7.33H12a1.121 1.121 0 001.11-1c.026-.1.01-.667.01-1.03a1.12 1.12 0 10-2.24 0H9.53a2.5 2.5 0 01.27-1.12 2.38 2.38 0 01.51-.67 2.44 2.44 0 013.38 0c.209.191.381.418.51.67a2.5 2.5 0 01.27 1.12c0 .34.016.924-.01 1.03z" fill=""></path></svg>

                                <span className='competition_name'>Microsoft #Code hackathon</span>
                                {/* <br></br> */}
                                {/* <span className='competition_name'>2018</span> */}
                            </div>
                        </div>

                        <div className='info_container'>
                            nice
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
                    <Navbar />
                </div>
            </div>
            <Discussion />
        </div>

    );
}

export default Acheivements;
