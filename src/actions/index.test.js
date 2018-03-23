describe('getGoals', () => {
	it('Should dispatch getGoalSuccess', () => {
		const data = {
			goals: []
		};

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				json() {
					return (`${API_BASE_URL}/goals`);
				}
			})
		);

		const dispatch = jest.fn();
		return getGoals()(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL/goals}`);
			expect(dispatch).toHaveBeenCalledWith(getGoalSuccess(data));
		});
	});
});

describe('postTodoGoal', () => {
	it('Should dispatch 'getGoals', () => {
		const goal = {
			goals: []
		};

		global.fetch = jest.fn().mockImplementation(() => 
			Promise.resolve({
				json() {
					return (`${API_BASE_URL}/goals`);
				}
			})
		);

		const dispatch = jest.fn();
		return postTodoGoal()(dispatch).then(() => {
			expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL/goals}`);
			expect(dispatch).toHaveBeenCalledWith(getGoals(data));
		});
	});
});