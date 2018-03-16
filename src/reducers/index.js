import * as actions from '../actions/index';
import 
// removed LEDGERS - find this and remove

// const initialState = {
// 	goals: {
// 		description: '',
// 		category: '',
// 		due: ''
// 	}
// }

const initialState = {
		description: '',
		category: '',
		due: ''
}

export default function goalReducer(state=initialState, action ) {
	if (action.type === actions.CREATE_GOAL) {
		return Object.assign({}, state, {
			description,
			category,
			due
		});
	}

	else if (action.type === actions.DISPLAY_TODO_GOALS) {
		const { description, created, due, checked } = state;
		return Object.assign({}, state, {
			todoGoals: [...state.todoGoals, action.todoGoals]
		});
	}
	else if (action.type === actions.DISPLAY_COMPLETED_GOALS) {
		let description, completed;

		completed = new Date();

		return Object.assign({}, state, {
			description: [...state.description, action.description ],
			due: [...state.due, action.due],
			completed: [...state.completed, action.completed]
		});
	}
	else if (action.type === actions.MOVE_USER_OBJECT) {
		const {from, to, before } = action;

		// console.log('MOVE_USER_OBJECT, from ', from, ' to ', to, ' before ', before);
		const obj = JSON.parse(JSON.stringify(state));
		if (from.type === 'todoGoal' && to.type === "completedGoal") {
			// obj.goals = goalUtilities.moveGoalById(from.todoGoalId, to.completedGoalId, before, obj.goals);
		}
		return obj;
	}
	else if (action.type === actions.UPDATE_TODO_GOALS) {
		const { todoGoalId, description, created, due, checked } = state;
		return Object.assign({}, state, {
			todoGoals: [...state.todoGoals, action.todoGoals]
		});
	}
	else if (action.type === actions.UPDATE_COMPLETED_GOALS) {
		let description, completed, completedGoalId;

		completed = new Date();
		return Object.assign({}, state, {
			description: [...state.description, action.description ],
			due: [...state.due, action.due],
			completed: [...state.completed, action.completed]
		});
	}
	else if (action.type === actions.DELETE_TODO_GOAL) {
		const { todoGoalId } = state;
		return Object.assign({}, state, {todoGoals: state.todoGoals.filter(goal => goal.id !== action.todoGoalId)
		});
	}
	else if (action.type === actions.DELETE_COMPLETED_GOAL) {
		const { completedGoalId } = state;
		return Object.assign({}, state, {completedGoals: state.completedGoals.filter(goal => goal.id !== action.completedGoalId)
		});
	}
	else if (action.type === actions.SHARE_GOALS) {
		return Object.assign({}, state,  {
			shareGoals: action.shareGoals
		});
	}
	return state;
}

export const getTodoGoals = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	fetch(`${API_BASE_URL}/api/goals`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${authToken}`		
		},
		success: function(userData) {
			console.log(userData);
		}
	});
}

export const postTodoGoals = (todoGoals) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const user = getState().auth.currentUser.username;
	fetch(`${API_BASE_URL}/api/goals`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'			
		},
		body: JSON.stringify(goals)
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		return res.json();
	})
	.then(entry => {
		console.log(`entry is: ${entry._id}`)
		dispatch(fetchBoard(user));
	});
}

export const putTodoGoal = (id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const user = getState().auth.currentUser.username;
	fetch(`${API_BASE_URL}/api/goals/${id}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'			
		},
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		// return res.json()
	})
	.then(entry => {
		dispatch(fetchBoard(user));
	})
}

export const deleteGoal = (id) => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	const user = getState().auth.currentUser.username;
	fetch(`${API_BASE_URL}/api/goals/${id}`, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${authToken}`,
			'Content-Type': 'application/json'			
		},
	})
	.then(res => {
		if(!res.ok) {
			return Promise.reject(res.statusText);
		}
		// return res.json()
	})
	.then(entry => {
		dispatch(fetchBoard(user));
	})
}