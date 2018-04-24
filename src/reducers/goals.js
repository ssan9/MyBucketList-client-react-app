import * as actions from "../actions/index";

const initialState = {
  goals: [],
  error: null
};

export default function goalReducer(state = initialState, action) {
  if (action.type === actions.GET_GOALS_SUCCESS) {
    return Object.assign({}, state, {
      goals: action.data
    });
  } else if (action.type === actions.GOALS_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
