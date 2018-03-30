import React from 'react';
import {shallow, mount} from 'enzyme';

import {CreateItemPage} from "./create-item-page";

describe('<CreateItemPage />', () => {
	it('Renders without crashing', () => {
		shallow(<CreateItemPage />);
	});

	// it('Should dispatch on postToDoGoal when the form is submitted', () => {
	// 	const dispatch = jest.fn();
	// 	const wrapper = mount(<CreateItemPage dispatch={dispatch} />);
	// 	const link = wrapper.find('.goal-creation-form');
	// 	link.simulate('submit');
	// 	expect(dispatch).toHaveBeenCalled();
	// 	const action = dispatch.mock.calls[0][0];
	// 	expect(action.type).toEqual(postToDoGoal);
	// });

	// it('Should not fire on submit if the input is empty', () => {
	// 	const dispatch = jest.fn();
	// 	const wrapper = mount(<CreateItemPage dispatch={() => {}} />);
	// 	const input = wrapper.find('input[type="text"]');
	// 	input.instance().value = '';
	// 	wrapper.simulate('submit');
	// 	expect(dispatch).not.toHaveBeenCalled();
	// });

	// it('Should reset the input when the form is submitted', () => {
	// 	const wrapper = mount(<CreateItemPage dispatch={() => {}} />);
	// 	const input = wrapper.find('input[type="text"]');
	// 	wrapper.simulate('submit');
	// 	expect(input.instance().value).toEqual('');
	// });
});