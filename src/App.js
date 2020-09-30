import React from 'react';
// import Accordian from './Accordian';
// import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';

// const testObj = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

function App() {
  return ( // react.createElement(Accordian, {sections: testObj})
    <main className='App'>
      {<Bomb />} 
    </main>
  );
}

export default App;