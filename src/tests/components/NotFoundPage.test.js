import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; //snapshot gives us a bunch of stuff we dont want. this removes all that stuff and returns just the goods
import NotFoundPage from '../../components/NotFoundPage';


test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});