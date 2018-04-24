import React from 'react';
import {shallow, mount} from 'enzyme';

import {GoalsPage} from "./goals-page";
describe('<GoalsPage />', () => {
	it('Renders without crashing', () => {
		shallow(<GoalsPage goals={[]} dispatch={() => {}} />);
	});
});

