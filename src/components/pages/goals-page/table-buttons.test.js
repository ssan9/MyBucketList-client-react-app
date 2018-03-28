import React from 'react';
import {shallow, mount} from 'enzyme';

import TableButtons from "./table-buttons";
//is redirect code correct?
describe('TableButtons />' () => {
	it('Renders without crashing', () => {
		shallow(<TableButtons /);
	});

	it('Should redirect to a new page when edit button is clicked', () => {
		const link = wrapper.find('.edit');
		link.simulate('click');
		expect(link).toHaveBeenCalled();
	});

	it('Should share to social pages when social button is clicked', () => {
		const link = wrapper.find('.share');
		link.simulate('click');
		expect(link).toHaveBeenCalled();
	});

	it('Should dispatch deleteGoal when delete button is clicked', () => {
		const dispatch = jest.fn();
		const wrapper = shallow(<TableButtons dispatch={dispatch} />);
		const link = wrapper.find('.delete');
		link.simulate('click');
		expect(dispatch).toHaveBeenCalled();
		expect(dispatch.mock.calls[0][0].type).toEqual(deleteGoal);
	});
});