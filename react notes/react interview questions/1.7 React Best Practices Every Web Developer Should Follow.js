// 7 React Best Practices Every Web Developer Should Follow

// React…the most popular library of Javascript for building 
// user interfaces. For developers, this library is one of 
// the favorite libraries to build any kind of beautiful
//  applications. Learning React might be easy for you. 
// You start using React and you start developing an application. 
// You create one component to build some features and then 
// another for some other feature. When your application 
// starts growing either you add a few lines in the 
// existing component or you just create one more component. 
// This goes on and if you won’t pay attention to these 
// components or the codes you have written then you may 
// end up with a lot of messy code in your application. 
// You will find some code is redundant, some components 
// are not reusable, few components have too many lines 
// of code and a lot of issues there. Later it will be 
// difficult to maintain the project. 

// 7-React-Best-Practices-Every-Web-Developer-Should-Follow

// Well, React is easy to learn but if you won’t follow 
// some best practices then you will and up like a scenario 
// given above. It will be tough for another developer as 
// well to work on the same application. In this blog let’s 
// discuss some tips and best practices to write better React
//  code in your application. 
 

// 1. File Organization
// Most of the beginners make mistake in organizing the 
// file properly in React application. A proper structure
//  of folders and files is not just important in the React 
// app but also in other applications. It helps in understanding 
// the flow of the project and adding other features in the 
// application. The file structure of create-react-app is one 
// possible way of organizing the files, but when the 
// applications grow rapidly, it becomes a little bit difficult task. 


// Create an asset folder to keep your top-level CSS,
//  images, and font files. You can create a helper 
// folder to put other files for any kind of file for 
// functionalities. Maintain one folder to keep all 
// the components of your React project. Also, maintain 
// the subfolder for minor components used by any large 
// component. It will be easier to understand the file
//  hierarchy if you keep large components in their own 
// folder and the small components that are used by the 
// components in a subfolder. 


// In React, index.js is the main entry point used by 
// developers but it becomes difficult to navigate once 
// you have several files, all named index.js. In this 
// situation, you can add a package.json file to each 
// of your components folders and you can set the main 
// entry point for this corresponding folder. It’s not 
// the good practice to add pacjkage.json file in each
//  folder but it will be easy to handle the files. 


// Example:  A component Tags.js can be declared 
// as an entry point as the code given below… 
 

{
"main": 'Tags.js'
}

 

// 2. Keep Your Components Small
// React works on the components’ reusability principle. 
// Try to maintain and write smaller components instead 
// of putting everything into a single massive component. 
// Small size components are easy to read, easy to update,
//  easy to debug, maintain, and reuse. Now the question is 
// how big a component should be? Take a look at your render 
// method. If it has more than 10 lines your component is 
// probably too big. Try to refactor the code and split the 
// components into smaller ones. In React, a component should
//  only be responsible for one functionality (single 
// responsibility principle). You can create smaller and 
// reusable components when you follow this principle. 
// This way everyone can work easily on your application. 
 

// 3. Use Functional Components

// A lot of beginners get confused about whether they 
// should create a Class component or functional component. 
// If you aren’t using the life cycle method or component s
// tate then it’s efficient to write functional components.
//  Functional components are much easier to read and test
//  because they are plain JavaScript functions without s
// tate or life cycle-hooks. Some of the advantages are as follows:

// Fewer lines of code and better performance
// Easier to read, easy to understand and easy to test.
// No need to use ‘this’ binding.
// Easier to extract smaller components.

// Class Component 
 
import React, { Component } from 'react';
class Button extends Component {
  render() {
    const { children, color, onClick } = this.props;
    return (
      <button onClick={onClick} className={`Btn ${color}`}>
        {children}
      </button>
    );
  }
}
export default Button;
 

// Functional Component 
import React from 'react';
export default function Button({ children, color, onClick }) {
  return (
    <button onClick={onClick} className={`Btn ${color}`}>
      {children}
    </button>
  );
}
 

// There is one problem with functional component 
// i.e developers have no control over the re-rendering
//  process. When something changes React will re-render 
// the functional component even if the component changes 
// itself. In the former version, the solution was Pure 
// component. PureComponent allows shallow props and state 
// comparison which means React “test” if the content of 
// the component, props, or the component itself has changed. 
// The Component will re-render when props or content of the 
// component or component itself changed. Otherwise, it will 
// skip re-rendering and reuse the last rendered result instead. 


// The above problem was solved when a new feature memo was 
// introduced with the release of React v16.6.0. Memo performs 
// shallow prop comparison to the functional component. It checks 
// if the content of the component, props, or the component itself 
// has changed. Based on the comparison react will either reuse 
// last rendered result or re-render. Memo allowed developers to 
// create “pure” functional components and eliminated the use 
// of stateful components or pure components.
 

// 4. Don’t Use Indexes as a Key Prop
// A lot of developers use the index as a value for a key prop. 
// Adding a key prop to the element is required when you create 
// an array of JSX elements. This is commonly done when you use 
// a map() or some other iterator or loop. This is another bad 
// practice in React. React uses the key property to track each 
// element in the array and due to the collapsing nature of an array. 
// This can easily result in the wrong information being rendered 
// in the wrong place. This is especially apparent when looping 
// through class components with the state. 

// The key props are used for identification and it determines 
// what should be rendered or re-rendered. React does not spend 
// time rendering duplicates. So when you have two elements with 
// the same keys React sees them as the same and this can cause 
// some elements to be eliminated.
 

// 5. Don’t Use Props in Initial State
// Using props in the initial state is another bad practice 
// in React. Why? because the constructor is called only once, 
// at the time when the component is created. Next time if you 
// make any changes to the props, the component state will remain 
// the same as the previous value and it won’t be updated. 
// This problems can be fixed by using react life cycle method 
// componentDidUpdate. This method allows you to update the 
// component when props change. Keep in mind that this method 
// won’t be invoked on the initial render so make sure you 
// initialize component state with necessary values probably
//  fetched from props. After that use this method to update 
// those values, and the component, as you need.
 

// 6. Initialize Component State Without Class Constructor
// Most of the developer initializing the component state 
// with the class constructor which is very common in React. 
// It’s not that much bad practice but it increases the 
// redundancy in your code and creates some performance issue. 
// When you initialize state in the constructor you need to 
// remember about props and you need to call super with props. 
// It also increases the number of lines in your code and 
// creates a performance issue. You can initialize state 
// with class fields instead of initializing state in the 
// constructor. This practice in React helps you reduce noise 
// in your code. Take a look at the code given below and 
// compare both of them. 
 

// State Initialize in Constructor 
 

 
// Import React library
import React from 'react'
// Create React component
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    // Initialize component State
    this.state = {
      count: 0
    }
  }
  ...
}
 
// State Initialize with Class Field
// Import React library
import React from 'react'
// Create React component
class MyComponent extends React.Component {
  // Initialize component State
  state = {
    count: 0
  }
  ...
}
// 7. Reduce The Use of Stateful Components
// As the name suggest stateful component store 
// component’s state information and provide necessary 
// context. On the other hand, stateless components have
//  no memory and it doesn’t provide any context. 
// Stateless components require less code to be executed 
// than stateful components. This increases the performance 
// of the application. So reducing the use of stateful 
// components in React is one of the best practices to follow. 


// With the release of React 16.8.0 a new feature ‘React Hooks‘ 
// was introduced. This feature helps in writing stateful 
// functional components and it obliterates the use of class 
// components. This new feature is really helpful when the
//  project grows. Earlier we just had one option in React 
// to use state and life cycle method i.e. writing stateful 
// components. Hooks changed this and now developers are no 
// longer bounded to stateful components because they needed to use state. 
 


// “This course was packed with amazing and well-organized 
// content! The project-based approach of this course made 
// it even better to understand concepts faster. Also the 
// instructor in the live classes is really good and knowledgeable.
// ”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master 
// Node.js and React that enables you to create dynamic web applications.

// So get ready for salary hike only with our Full Stack Development Course.