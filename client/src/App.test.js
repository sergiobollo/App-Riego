import React from 'react';
import { render } from '@testing-library/react';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Landing from './Landing';
import App from './App'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Landing component should render without crashing', () => {
    shallow( < Landing / > );
});

it("landing component snapshot with Enzyme", () => {
    const wrapper = shallow( < Landing / > );
    expect(toJson(wrapper)).toMatchSnapshot();
});