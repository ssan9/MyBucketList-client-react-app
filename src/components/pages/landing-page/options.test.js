import React from "react";
import {shallow} from 'enzyme';

import Options from "./options";

describe('<Options />', () => {
	it('Renders without crashing', () => {
		shallow(<Options />);
	});
});