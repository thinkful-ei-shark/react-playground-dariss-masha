import React from 'react';
import Accordian from './Accordian';

const testObj = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

function App() {
  return ( // react.createElement(Accordian, {sections: testObj})
    <main className='App'>
      {<Accordian sections={testObj} />} 
    </main>
  );
}

export default App;