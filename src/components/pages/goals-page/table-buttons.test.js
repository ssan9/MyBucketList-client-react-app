import React from 'react';
import {shallow, mount} from 'enzyme';

import {TableButtons} from "./table-buttons";
//is redirect code correct?
const fakeGoal = () => ({
		    id: 1,
		    description: "hello",
		    category: "hi",
		    created: Date.now(),
		    due: Date.now()
  		});


describe('TableButtons />', () => {
	console.log("mahjhjhj");


	it('Renders without crashing', () => {

		shallow(<TableButtons goal = {fakeGoal()}/>);

			// console.log("helloooo");
			// console.log(shallow);
	});

	// it('Should redirect to a new page when edit button is clicked', () => {

	// 	const wrapper = shallow(<TableButtons goal = {fakeGoal()}/>);
	// 	console.log("hiiii");
	// 	console.log("yoooooooooooooooo");
	// 	console.log(wrapper.props);
	// 	const link = wrapper.find('.edit');
	// 	link.simulate('click');
	// 	expect(link).toHaveBeenCalled();
	// });

	// it('Should share to social pages when social button is clicked', () => {
	// 	const link = wrapper.find('.share');
	// 	link.simulate('click');
	// 	expect(link).toHaveBeenCalled();
	// });

	// it('Should dispatch deleteGoal when delete button is clicked', () => {

	// 	const dispatch = jest.fn();
	// 	const wrapper = shallow(<TableButtons  dispatch={dispatch} goal = {fakeGoal()} />);
	// 	const link = wrapper.find('.delete');
	// 	link.simulate('click');
	// 	expect(dispatch).toHaveBeenCalled();
	// 	expect(dispatch.mock.calls[0][0].type).toEqual(id);
	// });
});