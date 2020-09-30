import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';


describe('app component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
  })
})