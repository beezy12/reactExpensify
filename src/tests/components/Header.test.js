import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; //snapshot gives us a bunch of stuff we dont want. this removes all that stuff and returns just the goods
import Header from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();



  //expect(wrapper.find('h1').text()).toBe('Expensify');

  //const renderer = new ReactShallowRenderer;
  // renderer.render(<Header />);
  // //console.log(renderer.getRenderOutput());
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});