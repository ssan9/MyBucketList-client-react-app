import React from 'react';
import {shallow} from 'enzyme';

import {UserStories} from "./user-stories";

describe('<UserStories />', () => {
	it('Renders without crashing', () => {
		shallow(<UserStories />);
	});
});