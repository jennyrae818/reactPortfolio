import React from 'react';
import '../styles/style.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   headerStyle: {
//     background: 'navy',
//   },
//   headingStyle: {
//     fontSize: '100px',
//     fontFamily: 'montserrat',
//   },
// };
//style={styles.headerStyle} 
//style={styles.headingStyle}

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header className="header">
      <h1>Jenny Sacco</h1>
    </header>
  );
}

export default Header;
