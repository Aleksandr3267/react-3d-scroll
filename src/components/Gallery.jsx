import React from 'react';
import './header.css';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import video1 from '../assets/media/video_optimized.mp4';


const Gallery = () => {

    return (
        <section className='gallery'>

            <div className="frame">
                <div className="frame__content">
                    <h2>Hello World!!!</h2>
                </div>
            </div>
            

            <div className="frame">
                <div className="frame__content">
                    <div className="frame-media frame-media_left" style={{
                        backgroundImage: `url(${image1})`
                }} />
                </div>
            </div>

            <div className="frame frame_bg">
                <div className="frame__content">
                    <video className="frame-media frame-media_right" src={video1} autoPlay muted loop/>
                </div>
            </div>

            <div className="frame">
                <div className="frame__content text-right">
                    <h3>Pure planet</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis totam commodi voluptatum laudantium numquam nemo blanditiis expedita reiciendis soluta maxime, quae iusto atque nulla praesentium culpa, perspiciatis autem. Sunt!</p>
                </div>
            </div>

            <div className="frame frame_bg">
                <div className="frame__content">
                    <div className="frame-media frame-media_left" style={{
                        backgroundImage: `url(${image2})`
                }} />
                </div>
            </div>

            <div className="frame"></div>
            

            <div className="frame frame_bg">
                <div className="frame__content">
                    <div className="frame-media frame-media_right" style={{
                        backgroundImage: `url(${image3})`
                }} />
                </div>
            </div>

            <div className="frame"></div>
            
            <div className="frame">
                <div className="frame__content text-left">
                    <h3>ask the mountains</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perferendis totam commodi voluptatum laudantium numquam nemo blanditiis expedita reiciendis soluta maxime, quae iusto atque nulla praesentium culpa, perspiciatis autem. Sunt!</p>
                </div>
            </div>

            <div className="frame frame_bg">
                <div className="frame__content">
                    <div className="frame-media frame-media_right" style={{
                        backgroundImage: `url(${image4})`
                }} />
                </div>
            </div>

            <div className="frame"></div>

            <div className="frame frame_bg">
                <div className="frame__content">
                    <div className="frame-media frame-media_left" style={{
                        backgroundImage: `url(${image5})`
                }} />
                </div>
            </div>

            <div className="frame"></div>

            <div className="frame">
                <div className="frame__content">
                <video className="frame-media" src={video1} autoPlay muted loop/>
                </div>
            </div>

            <div className="frame"></div>
            <div className="frame"></div>
            <div className="frame"></div>
            
            <div className="frame">
                <div className="frame__content">
                © Aleksandr3267
                </div>
            </div>

        </section>

    );
}


export default Gallery;
