import React from 'react';
import {shallow, mount} from 'enzyme';

import {TableButtons} from "./table-buttons";
const fakeGoal = () => ({
		    id: 1,
		    description: "hello",
		    category: "hi",
		    created: Date.now(),
		    due: Date.now()
  		});


describe('TableButtons />', () => {
	it('Renders without crashing', () => {
		shallow(<TableButtons goal = {fakeGoal()}/>);
	});
});