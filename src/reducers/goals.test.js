import goalReducer from './goals';
import * as actions from "../actions/index";

describe('goalReducer', () => {
	it('Should set the initial state when nothing is passed in', () => {
		const state = goalReducer(undefined, {type: '_UNKNOWN'});
		expect (state.goals).toEqual([]);
		expect (State.error).toEqual(null);
	});

	it('Should return the current state on an unknown action', () => {
		let currentState = {};
		const state = goalReducer(currentState, {type: '_UNKNOWN'});
		expect(state).toBe(currentState);
	});

	describe('getGoalsSuccess', () => {
		it('Should render goals on success', () => {
			let state = {
				goals: []
			};
			state = goalReducer(state, getGoalsSuccess(data));
			expect(state.goals).toEqual([]);
		});
	});

	describe('goalsError', () => {
		it('Should give an error if request is not correct', () => {
			let state = {
				goals: []
			};
			state = goalReducer(state, goalsError(error));
			expect(state.goals).toEqual('asd'); 
		})
	})
});



