import React from 'react';
import '../styles/style.css';


function Portfolio() {
  return (
    
    <div className="portfolio">
      <div className="images">

        <h2>&#9900;  My Work  &#9900;</h2>
  
        
        <div className="images-container">

        {/* <a href="https://jennyrae818.github.io/eventplanner/" /> */}
        <img src="./images/Dayplanner2.png" height="300" width="300" alt="PlannerApp pic"/>
        {/* <p> &#x2191; EventPlanner &#x2191;
            <br>Save your day </br>
            </p> */}
        {/* <a href="https://jennyrae818.github.io/fanpage/" />    */}
        <img src="./images/FRAY.png" height="300" width="300" alt="TheFray pic"/>
        {/* <p> &#x2191; Fanpage &#x2191;
            <br>Fun fanpage</br>
            </p> */}
        {/* <a href="https://jennyrae818.github.io/quiz/" /> */}
        <img src="./images/Quiz2.png" height="300" width="300" alt="Quiz pic"/>
        {/* <p> &#x2191; JS Quiz &#x2191;
            <br>Quiz page</br>
            </p> */}
        {/* <a href="https://jennyrae818.github.io/Cookify/" /> */}
        <img src="./images/Cookify.png" height="300" width="300" alt="Cookify pic"/>
        {/* <p> &#x2191; Cookify &#x2191;
            <br>Ingredient search</br>
            </p> */}

        </div>
        </div>
    </div>

  );
}

export default Portfolio;


