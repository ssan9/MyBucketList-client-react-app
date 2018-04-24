import goalReducer from './goals';
import {getGoalsSuccess, goalsError} from './goals';
import * as actions from "../actions/index";

describe('goalReducer', () => {
	it('Should set the initial state when nothing is passed in', () => {
		const state = goalReducer(undefined, {type: '_UNKNOWN'});
		expect (state.goals).toEqual([]);
		expect (state.error).toEqual(null);
	});

	it('Should return the current state on an unknown action', () => {
		let currentState = {};
		const state = goalReducer(currentState, {type: '_UNKNOWN'});
		expect(state).toBe(currentState);
	});
});



