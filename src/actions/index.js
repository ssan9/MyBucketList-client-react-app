import {API_BASE_URL} from '../config';

export const CREATE_GOAL = 'CREATE_GOAL';
export const createGoal = goal => ({
	type: CREATE_GOAL,
	goal
});

export const CANCEL_GOAL = 'CANCEL_GOAL';
export const cancelGoal = goal => ({
	type: CANCEL_GOAL,
	goal
})

export const DISPLAY_TODO_GOALS = 'DISPLAY_TODO_GOALS';
export const displayTodoGoals = todoGoals => ({
	type: DISPLAY_TODO_GOALS,
	todoGoals
});

export const DISPLAY_COMPLETED_GOALS = 'DISPLAY_COMPLETED_GOALS';
export const displayCompletedGoals = completedGoals => ({
	type: DISPLAY_COMPLETED_GOALS,
	completedGoals
});

export const MOVE_USER_OBJECT = 'MOVE_USER_OBJECT';
export const moveUserObject = (from, to, before) => ({
	type: MOVE_USER_OBJECT,
	from,
	to,
	before
});

export const UPDATE_TODO_GOALS = 'UPDATE_TODO_GOALS';
export const updateTodoGoals = updateTodo => ({
	type: UPDATE_TODO_GOALS,
	updateTodo,
	todoGoalId
});

export const UPDATE_COMPLETED_GOALS = 'UPDATE_COMPLETED_GOALS';
export const updateCompletedGoals = updateCompleted => ({
	type: UPDATE_COMPLETED_GOALS,
	updateCompleted,
	completedGoalId
});

export const DELETE_TODO_GOAL = 'DELETE_TODO_GOAL';
export const deleteTodoGoal = todoGoalId => ({
	type: DELETE_TODO_GOALS,
	todoGoalId
});

export const DELETE_COMPLETED_GOAL = 'DELETE_COMPLETED_GOAL';
export const deleteCompletedGoal = deleteCompleted => ({
	type: DELETE_COMPLETED_GOALS,
	deleteCompleted,
	completedGoalId
});

export const SHARE_GOALS = 'SHARE_GOALS';
export const shareGoals = goals => ({
	type: SHARE_GOALS,
	goals
})


	


