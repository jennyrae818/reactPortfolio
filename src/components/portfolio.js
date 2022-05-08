import React from 'react';
import '../styles/style.css';
import cleaning from './images/cleaning.png';
import planner from './images/Dayplanner2.png';
import fray from './images/FRAY.png';
import quiz from './images/Quiz2.png';
import quizhub from './images/Quizhub.png';
import weather from './images/Weather.png';


function Portfolio() {
  return (
    
    <div className="portfolio">
      <div className="images">

        <h2>&#9900;  My Work  &#9900;</h2>
  
        
        <div className="images-container">

        <a href="https://quiz-hub-2022.herokuapp.com/login" >
        <img src={quizhub} height="300" width="300" alt="Quizhub pic"/>
        </a>
        {/* <p> &#x2191; QuizHub &#x2191;</p>
            <p>Make and Take a Quiz
            </p> */}

        <a href="http://www.forrestgreencleaning.com" >
        <img src={cleaning} height="300" width="300" alt="Cleaning pic"/>
        </a>
        {/* <p> &#x2191; Cookify &#x2191;
            <br>Ingredient search</br>
            </p> */}
        <a href="https://jennyrae818.github.io/eventplanner/" >
        <img src={planner} height="300" width="300" alt="PlannerApp pic"/> </a>
        {/* <p> &#x2191; EventPlanner &#x2191;
            <br>Save your day </br>
            </p> */}
        <a href="https://jennyrae818.github.io/weatherapp/" >
        <img src={weather} alt="WeatherApp pic" height="300" width="300"/> </a>
        
        <a href="https://jennyrae818.github.io/fanpage/" >   
        <img src={fray} height="300" width="300" alt="TheFray pic"/>
        </a>
        {/* <p> &#x2191; Fanpage &#x2191;
            <br>Fun fanpage</br>
            </p> */}
        <a href="https://jennyrae818.github.io/quiz/" >
        <img src={quiz} height="300" width="300" alt="Quiz pic"/>
        </a>
        {/* <p> &#x2191; JS Quiz &#x2191;
            <br>Quiz page</br>
            </p> */}
        

        </div>
        </div>
    </div>

  );
}

export default Portfolio;


