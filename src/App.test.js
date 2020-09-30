import React from 'react';
// import { render } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';


describe('app component', () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div)
  })
})

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
