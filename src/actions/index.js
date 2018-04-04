import { API_BASE_URL } from "../config";
// import { Redirect } from "react-router-dom";
// Do not dispatch Sucess or error functions!
// only the GET PUT POST DELETE ones
// or clear/share

export const getGoals = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/goals`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(data => dispatch(getGoalsSuccess(data)))
    .catch(err => {
      dispatch(goalsError(err));
    });
};

export const GET_GOALS_SUCCESS = "GET_GOALS_SUCCESS";
export const getGoalsSuccess = data => ({
  type: GET_GOALS_SUCCESS,
  data
});

export const GOALS_ERROR = "GOALS_ERROR";
export const goalsError = error => ({
  type: GOALS_ERROR,
  error
});

//////////

export const postTodoGoal = goal => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // const user = getState().auth.currentUser.id; GOOD!
  fetch(`${API_BASE_URL}/goals`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(goal)
  })
    .then(res => res.json())
    .then(goal => dispatch(getGoals(goal)))
    //.then(goal => dispatch(postGoalSuccess(goal)))
    .catch(err => {
      dispatch(goalsError(err));
    });
};

// export const POST_GOAL_SUCCESS = "POST_GOAL_SUCCESS";
// export const postGoalSuccess = goal => ({
//   type: POST_GOAL_SUCCESS,
//   goal
// });

export const putGoal = updateGoal => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // const user = getState().auth.currentUser.username;
  fetch(`${API_BASE_URL}/goals/${updateGoal.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updateGoal)
  })
    .then(() => dispatch(getGoals()))
    .catch(err => {
      dispatch(goalsError(err));
    });
};

// export const PUT_GOAL_SUCCESS = "PUT_GOAL_SUCCESS";
// export const putGoalSuccess = goal => ({
//   type: PUT_GOAL_SUCCESS,
//   goal
// });

export const deleteGoal = goalId => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  // const user = getState().auth.currentUser.username;
  fetch(`${API_BASE_URL}/goals/${goalId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(goal => dispatch(getGoals(goal)))
    //  .then(goal => dispatch(deleteGoalSuccess(goal)))
    .catch(err => {
      dispatch(goalsError(err));
    });
};

// export const DELETE_GOAL_SUCCESS = "DELETE_GOAL_SUCCESS";
// export const deleteGoalSuccess = goal => ({
//   type: DELETE_GOAL_SUCCESS,
//   goal
// });

export const CLEAR_GOAL_FORM = "CLEAR_GOAL_FORM";
export const clearGoalForm = () => ({
  type: CLEAR_GOAL_FORM
});

export const SHARE_GOALS = "SHARE_GOALS";
export const shareGoals = goals => ({
  type: SHARE_GOALS,
  goals
});
