/* React List
Hide Question
We provided some simple React template code. Your goal is to display an unordered list (UL) with list items (LI) within it.
The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to 
the DataList function. The span elements should be separated by a single space.
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  return (
   /*code goes here*/
    <ul>
    {props.data.map((item, index) => (      
      <li key={index}><span>{item.name}</span> <span>{item.age}</span></li>
    ))}
    </ul>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);

