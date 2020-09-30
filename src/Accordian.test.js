import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

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

describe('Accordian component', () => {
  it('renders without erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty ul when no sections prop is supplied', () => {
    const wrapper = shallow(<Accordian />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('renders no section when no button is clicked', () => {
    const wrapper = shallow(<Accordian sections={testObj} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders section two when button is clicked', () => {
    const wrapper = shallow(<Accordian sections={testObj} />);
    wrapper.find('button').at(1).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('opens only the last section when multiple buttons have been clicked', () => {
    const wrapper = shallow(<Accordian sections={testObj} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});