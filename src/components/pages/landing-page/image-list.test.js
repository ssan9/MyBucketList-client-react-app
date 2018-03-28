import React from 'react';
import {shallow} from 'enzyme';

import ImageList from "./image-list";

describe('<ImageList />', () => {
	it('Renders without crashing', () => {
		shallow(<ImageList />);
	});
});