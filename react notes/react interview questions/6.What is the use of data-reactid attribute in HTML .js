// What is the use of data-reactid attribute in HTML ?

// The data-reactid attribute is a custom attribute that 
// react can easily identify its components within the DOM. 
// Just like the HTML “classes” and “id” attributes, “data-reactid”
//  helps in uniquely identifying the element .

// Since sharing the entire object references in 
// a serialized order between the server and the client 
// is potentially expensive. Hence, using these id’s react 
// internally builds a representation of references of the 
// nodes (used to build up your application) present in the DOM.
//  When the app is rendered and the react is loaded at 
// the client the only data it shares to the server is 
// the “data-reactid” attributes.

// Then the “data-reactid” attributes convert back into 
// the data structure provided and displays the data without 
// actually rendering the entire data structure at the client.

// Example: Importing the data from the file Data.js using 
// “react-id” attribute in the app.js).

// Data.js

export const Data = [
  {
    id: '.1',
    node: Div,
    children: [
      {
        id: '.2',
        node: Span,
        children: [
          {
            id: '.2’,
         node: Input,
            children: []
          }
        ]
      }
    ]
  }];

// App.js

import React, { Component } from 'react';
import { Data } from './src/data';
class App extends Component {
  render() {
    return (
      <div data-reactid='.1'>
        <span data-reactid='.2'>
          <input data-reactid='.3' />
        </span>
      </div>
    );
  }
}
// “This course was packed with amazing and well-organized content! The project-based approach of this course made it even better to understand concepts faster. Also the instructor in the live classes is really good and knowledgeable.”- Tejas | Deutsche Bank

// With our revamped Full Stack Development Program: master Node.js and React that enables you to create dynamic web applications.