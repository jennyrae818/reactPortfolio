import React from 'react';
import '../styles/footer.css';

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   sectionStyles: {
//     background: 'orange',
//   },
// }; 
// this would need to be referenced down in the 'section' tab    style={styles.sectionStyles} 

// We use JSX curly braces to evaluate the style object on the JSX tag

function footer() {
  return (
    <footer className="footer">
    
    <a href= 'https://github.com/jennyrae818'><i className="fa">&#xf09b;</i></a>
    <a href= 'https://www.linkedin.com/in/jenny-sacco-14024949/'><i className="fa fa-linkedin"></i></a>
    <a href= 'mailto:jennyrae818@gmail.com'><i className="fa fa-envelope"></i></a>
   
  </footer>
  );
}

export default footer;







