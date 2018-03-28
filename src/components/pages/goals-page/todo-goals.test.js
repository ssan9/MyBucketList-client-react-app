import React from 'react';
import {shallow, mount} from 'enzyme';

import TodoGoals from "./todo-goals";
//will renders title and all be included here or goalspage-test?
describe('<TodoGoals />', () => {
	const seedGoals = [];
		beforeAll(() => {
			for(let i=0; i<10; i++) {
				seedGoals.push({
					text: `Goal ${i}`
				})
			}
		});

	it('Renders without crashing', () => {
		shallow(<TodoGoals />);
	});

	it('Renders the title', () => {
		const title = "Foo";
		const wrapper = shallow(<GoalsPage={title} goals={[]} />);
		expect(wrapper.contains({title})).toEqual(true);
	});

	it('Renders the goals', () => {
		const wrapper = shallow(<GoalsPage={seedGoals} />);
		const goals = wrapper.find(Goal);
		expect(goals.length).toEqual(seedGoals.length);
		const firstGoal = goals.first();
		expect(firstGoal.prop('text')).toEqual(seedGoals[0].text);
	});

	it('Should dispatch putGoal when goals goals are toggled', () => {
	    const dispatch = jest.fn();
	    const wrapper = shallow(<TodoGoals dispatch={dispatch} />);
	    const link = wrapper.find(toggleChecked());
	    link.simulate('click');
	    expect(dispatch).toHaveBeenCalled();
	    const action = dispatch.mock.calls[0][0];
	    expect(action.type).toEqual(putGoal);
	  });

	it('Renders checked goals as Completed Goals', () => {
		const completedGoals = wrapper.find(checked);
		const wrapper = shallow(<GoalsPage={completedGoals} goals={[]} />);
		expect(wrapper.contains({completedGoals})).toEqual(true);
	});

	it('Renders unchecked goals as Todo Goals', () => {
		const todoGoals = wrapper.find(!unchecked);
		const wrapper = shallow(<GoalsPage={todoGoals} goals={[]} />);
		expect(wrapper.const({todoGoals})).toEqual(true);
	});
});