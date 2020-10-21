import React from 'react';
// import shallow
import { shallow } from 'enzyme';
// import toJson
import toJson from 'enzyme-to-json';
// import app component
import Team from '../../pages/Team/index.jsx';

describe('<Team />', () => {
  const wrapper = shallow(<Team />);

  it('is render the team page?', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('are there team grid class?', () => {
    expect(wrapper.find('.team__grid').exists()).toBe(true)
  });

  it('matches the snap shot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
