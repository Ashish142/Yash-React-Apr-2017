import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BugApp } from './components/bug-app';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

/*it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});*/


describe('<BugApp />', () => {
  

  it('simulates click events', () => {
    const onLoadClick = sinon.spy();
    const wrapper = shallow(
      <BugApp load={onLoadClick} />
    );
    wrapper.find('input[type="button"]').simulate('click');
    expect(onLoadClick).to.have.property('callCount', 1);
  });
});