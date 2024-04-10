// 8 Ways to Style React Components
// React is a JavaScript library for building user 
// interfaces. React makes it painless to create 
// interactive UIs. Design simple views for each 
// state in your application, and React will efficiently 
// update and render just the right components 
// when your data changes.

// There are about eight different ways to style 
// React JS components, there names and explanations 
// of some of them are mentioned below.

// Inline CSS
// Normal CSS
// CSS in JS
// Styled Components
// CSS module
// Sass & SCSS
// Less
// Stylable

// Here are a few examples to style React Components.

// Table of Content

// Inline CSS
// Normal CSS
// CSS in JS
// CSS Modules
// Sass and SCSS

// Inline CSS:
// In inline styling basically, we create 
// objects of style. And render it inside 
// the components in style attribute using 
// the React technique to incorporate JavaScript 
// variable inside the JSX (Using ‘{ }’ )

// Example 1: This example illustrates how 
// to use inline styling to style react components. 

 
// Filename - App.js
 
import React, { Component } from "react";
import StudentList from "./StudentList";
 
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
// export default App;
// Output: 


// Styling using inline styles

// Example 2:

 
// Filename - App.js
 
import React from 'react';
import Lottery from './Lottery'
 
function App() {
  return (
    <div>
      <Lottery />
      <Lottery title='Mini Daily'/>
    </div>
  );
}
 
// export default App;
//  Output:


// Inline Styling

// Normal CSS:
// In the external CSS styling technique, we basically 
// create an external CSS file for each component and
//  do the required styling of classes. and use those
//  class names inside the component. It is a convention 
// that name of the external CSS file same as the name of 
// the component with ‘.css’ extension. It is better if 
// the name of the classes used, follow the format 
// ‘componentName-context’ (here context signifies 
// where we use this classname). For example, if we 
// style the header of a component called ‘Box’, 
// a better classname should style this element 
// should be ‘Box-header’.

// Example: This example illustrates how to style 
// react components with external stylesheets. 

 
// Filename - StudentList.js
 
import React, { Component } from "react";
import StudentList from "./StudentList";
import "./App.css
 
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
export default App;
// Output:


// External CSS styling

// CSS in JS:
// The’react-jss’ integrates JSS with react app 
// to style components. It helps to write CSS 
// with Javascript and allows us to describe styles
//  in a more descriptive way. It uses javascript 
// objects to describe styles in a declarative way 
// using ‘createUseStyles’ method of react-jss and 
// incorporate those styles in functional components 
// using className attribute.

// Step to Install required Module: install third-party 
// react-jss package using the below command in terminal

npm i react-jss
// Example : This example demonstrate the use of 
// react-jss library to add style to react components.

 
// Filename - App.js
 
import React, { Component } from "react";
import StudentList from "./StudentList";
 
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
export default App;
// Output: 


// Styling with CSS in JS

// Styled Components: The styled-components allows us 
// to style the CSS under the variable created in JavaScript. 
// style components is a third party package using which we 
// can create a component as a JavaScript variable that is 
// already styled with CSS code and used that styled component 
// in our main component. styled-components allow us to create 
// custom reusable components which can be less of a hassle to maintain.

// Step to Install required Module: install third-party 
// styled-components package using the below command in terminal.

npm i --save styled-components
// Example: This example use styled-cpmponents to create react components.

 
// Filename - App.js
 
import React, { Component } from "react";
import StudentList from "./StudentList";
 
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
export default App;
// Output :


// Styling with styled components

// CSS Modules:
// A CSS module is a simple CSS file but a key 
// difference is by default when it is imported 
// every class name and animation inside the CSS 
// module is scoped locally to the component that 
// is importing it also CSS file name should follow 
// the format ‘filename.module.css’. This allows us 
// to use a valid name for CSS classes without worrying 
// about conflicts with other class names in your application.

// To use CSS modules create a normal CSS file, import 
// the module you have created from within your component using the syntax

import styles from './filename.module.css
// Example : 

 
// Filename - App.js
import React, { Component } from "react";
import StudentList from "./StudentList";
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
export default App;
// Output :


// Styling with CSS modules

// Sass and SCSS:
// Sass is the most stable, powerful, professional-grade
//  CSS extension language. It’s a CSS preprocessor that 
// adds special features such as variables, nested rules, 
// and mixins or syntactic sugar in regular CSS. The aim 
// is to make the coding process simpler and more efficient.

// Installation Steps:

// Step 1: Before moving further, firstly we have to install 
// node-sass , by running the following command in your 
// project directory, with the help of terminal in your 
// SRC folder or you can also run this command in Visual 
// Studio Code’s terminal in your project folder. 
 
npm install node-sass
// Step 2 : After the installation is complete 
// we create a file name StudentList.scss .
// Step 3: Now include the necessary CSS effects in your CSS file.
// Step 4: Now we import our file the same way 
// we import a CSS file in React.
// Step 5: In your app.js file, add this code 
// snippet to import  StudentList.scss.

import './ StudentList.scss';
// Example: This example demonstrate above approach.

 
// Filename - App.js
import React, { Component } from "react";
import StudentList from "./StudentList";
 
const App = () => {
    return (
        <div>
            <StudentList
                name="Ashank"
                classNo="X"
                roll="05"
                addr="Kolkata, West Bengal"
            />
            <StudentList
                name="Samir"
                classNo="Xi"
                roll="09"
                addr="Jalpaiguri, West Bengal"
            />
            <StudentList
                name="Tusar"
                classNo="Xii"
                roll="02"
                addr="Howrah, West Bengal"
            />
            <StudentList
                name="Karishma"
                classNo="ix"
                roll="08"
                addr="Mednipur, West Bengal"
            />
        </div>
    );
};
 
export default App;
// Output :


// Styling using Sass


// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank