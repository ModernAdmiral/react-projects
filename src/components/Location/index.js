import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6734482711768!2d-112.1903913487576!3d40.747210479226645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752ecddd73842c7%3A0x6b1fccb8d1f5b46c!2sThe+Great+Saltair!5e0!3m2!1sen!2sus!4v1556836639578!5m2!1sen!2sus" 
            width="100%" 
            height="500px" 
            frameBorder="0"  
            allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
            
        </div>
    );
};

export default Location;