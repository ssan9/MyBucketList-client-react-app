import React from "react";
import {shallow} from 'enzyme';
import {LogoutPage} from "./logout-page";

describe('<LogoutPage />', () => {
	it('Renders without crashing', () => {
		shallow(<LogoutPage />); 
	});
});

