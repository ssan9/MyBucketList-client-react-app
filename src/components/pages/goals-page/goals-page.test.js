import React from 'react';
import {shallow, mount} from 'enzyme';

import GoalsPage from "./goals-page";
//how to write test for checked and unchecked goals?
describe('<GoalsPage />', () => {
	it('Renders without crashing', () => {
		shallow(<GoalsPage />);
	});

	// it('Should dispatch getGoals when the page is loaded', () => {
	// 	const dispatch = jest.fn();
	// 	const wrapper = mount(<GoalsPage dispatch={dispatch} />);
	// 	link.simulate('componentDidMount()');
	// 	expect(dispatch).toHaveBeenCalled();
	// 	const action = dispatch.mock.calls[0][0];
	// 	expect(action.type).toEqual(getGoals);
	// });
});

