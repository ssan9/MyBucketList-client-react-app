import React from 'react';
import {shallow, mount} from 'enzyme';

import {EditPage} from "./edit-page";

describe('<EditPage />', () => {
	it('Renders without crashing', () => {
		shallow(<EditPage match={{params: {description: ""}}} />);
	});
});