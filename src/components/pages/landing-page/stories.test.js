import React from "react";
import {shallow} from 'enzyme';

import Stories from "./stories";

describe('<Stories />', () => {
	it('Renders without crashing', () => {
		shallow(<Stories />);
	});
});