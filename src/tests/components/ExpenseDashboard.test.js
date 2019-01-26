import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'; //snapshot gives us a bunch of stuff we dont want. this removes all that stuff and returns just the goods
import ExpenseDashboard from '../../components/ExpenseDashboard';


test('should render Dashboard correctly', () => {
  const wrapper = shallow(<ExpenseDashboard />);
  expect(wrapper).toMatchSnapshot();
});