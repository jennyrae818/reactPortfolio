import React from 'react';
import '../styles/style.css';


function Portfolio() {
  return (
    
    <div className="portfolio">
      <div className="images">

        <h2>&#9900;  My Work  &#9900;</h2>
  
        
        <div className="images-container">

        <a href="https://quiz-hub-2022.herokuapp.com/login" >
        <img src="./images/Quizhub.png" height="300" width="300" alt="Quizhub pic"/>
        </a>
        {/* <p> &#x2191; QuizHub &#x2191;</p>
            <p>Make and Take a Quiz
            </p> */}

        <a href="http://www.forrestgreencleaning.com" >
        <img src="./images/cleaning.png" height="300" width="300" alt="Cleaning pic"/>
        </a>
        {/* <p> &#x2191; Cookify &#x2191;
            <br>Ingredient search</br>
            </p> */}
        <a href="https://jennyrae818.github.io/eventplanner/" >
        <img src="./images/Dayplanner2.png" height="300" width="300" alt="PlannerApp pic"/> </a>
        {/* <p> &#x2191; EventPlanner &#x2191;
            <br>Save your day </br>
            </p> */}
        <a href="https://jennyrae818.github.io/fanpage/" >   
        <img src="./images/FRAY.png" height="300" width="300" alt="TheFray pic"/>
        </a>
        {/* <p> &#x2191; Fanpage &#x2191;
            <br>Fun fanpage</br>
            </p> */}
        <a href="https://jennyrae818.github.io/quiz/" >
        <img src="./images/Quiz2.png" height="300" width="300" alt="Quiz pic"/>
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


