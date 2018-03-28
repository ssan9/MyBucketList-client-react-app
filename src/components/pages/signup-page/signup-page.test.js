import React from "react";
import {shallow} from 'enzyme';

import SignupPage from "./signup-page";

describe('<SignupPage />', () => {
	it('Renders without crashing', () => {
		shallow(<SignupPage />);
	});
});