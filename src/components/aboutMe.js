import React from 'react';
import '../styles/style.css';
import dogpic from './images/IMG_3135.jpeg';
import saccospic from './images/IMG_2270.jpeg';


function aboutMe() {
  return (
    <section className="aboutMe">
    
      <h2>&#9900;  About Me  &#9900;</h2>
                <p>
                    Hi! My name is Jenny Sacco. 
                </p>
                <p>
                    Best described as an organized, curious minded, creative, helper. 
                </p>
                <p>
                    I live in Tacoma, WA with my amazing Firefighter/Paramedic husband and two fluffy mini Austrailian Shepards.
                </p>
                <p>
                    A few of the various hats I've worn throughout my life: providing <span className='italics'> white glove </span>service for 9 years in Private Banking at Merrill Lynch, "little ripper" snowboarding instructor at Mount Bachelor, Assistant Teacher at a wonderful Montessori school in Bellevue, WA, and operations at the only hostel in Bend, OR. 
                </p>
                <p>
                    In 2017, I walked across the country of Spain over the span of 45 days. Link of "The Way": <a href= 'https://santiago-compostela.net/'>The Camino De Santiago</a>
                </p>
                <p>
                    Since 2019, I have proudly been serving my community as a Fire Dispatcher for <a href='https://southsound911.org/'>Pierce County.</a>
                </p>
                <p>    
                    I own and operate a small cleaning business named Forrest Green Cleaning, LLC. 
                </p>
                <p>
                    My goal is to help others through web development!
                </p>
                <div className="aboutme-container">
                <img src={dogpic} alt="doggos" height="200" width="150"></img>
                <img src={saccospic} alt="saccos" height="200" width="150"></img>
                </div>
    </section>
   
  );
}

export default aboutMe;
