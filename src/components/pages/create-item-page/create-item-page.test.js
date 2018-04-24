import React from 'react';
import {shallow, mount} from 'enzyme';

import {CreateItemPage} from "./create-item-page";

describe('<CreateItemPage />', () => {
	it('Renders without crashing', () => {
		shallow(<CreateItemPage />);
	});
});