import { getGoals } from "./index";

import { clearGoalForm } from "./index";
import { CLEAR_GOAL_FORM } from "./index";

describe("getGoals", () => {
  //   it("Should dispatch getGoalSuccess", () => {
  //     const data = {
  //       goals: []
  //     };
  //
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         json() {
  //           return data;
  //         }
  //       })
  //     );
  //
  //     const dispatch = jest.fn();
  //     return getGoals()(dispatch).then(() => {
  //       expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL / goals}`);
  //       expect(dispatch).toHaveBeenCalledWith(getGoalSuccess(data));
  //     });
  //   });
  // });
  //
  // describe("getGoalSuccess", () => {
  //   it("Should return the action", () => {
  //     const data = {
  //       goals: []
  //     };
  //
  //     const action = getGoalSuccess(data);
  //     expect(action.type).toEqual(GET_GOALS_SUCCESS);
  //     expect(action.data).toEqual(data);
  //   });
  // });
  //
  // describe("postTodoGoal", () => {
  //   it("Should dispatch getGoals", () => {
  //     const goal = goals.id;
  //
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         json() {
  //           return goal;
  //         }
  //       })
  //     );
  //
  //     const dispatch = jest.fn();
  //     return postTodoGoal()(dispatch).then(() => {
  //       expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/goals}`);
  //       expect(dispatch).toHaveBeenCalledWith(getGoals(goal));
  //     });
  //   });
  // });
  //
  // describe("putGoal", () => {
  //   it("Should dispatch getGoals", () => {
  //     const goal = goals.id;
  //
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         json() {
  //           return goal;
  //         }
  //       })
  //     );
  //
  //     const dispatch = jest.fn();
  //     return putGoal()(dispatch).then(() => {
  //       expect(fetch).toHaveBeenCalledWith(
  //         `${API_BASE_URL}/goals/${updateGoal.id}`
  //       );
  //       expect(dispatch).toHaveBeenCalledWith(getGoals());
  //     });
  //   });
  // });
  //
  // describe("deleteGoal", () => {
  //   it("Should dispatch getGoals", () => {
  //     const goal = {
  //       goals: []
  //     };
  //
  //     global.fetch = jest.fn().mockImplementation(() =>
  //       Promise.resolve({
  //         json() {
  //           return goal;
  //         }
  //       })
  //     );
  //
  //     const dispatch = jest.fn();
  //     return deleteGoal()(dispatch).then(() => {
  //       expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/goals/${goalId}`);
  //       expect(dispatch).toHaveBeenCalledWith(getGoals(goal));
  //     });
  //   });
  // });
  //
  describe("clearGoalForm", () => {
    it("Should return the action", () => {
      //  const goal = goals.id;
      const action = clearGoalForm();
      expect(action.type).toEqual(CLEAR_GOAL_FORM);
    });
  });
  //
  // describe("shareGoals", () => {
  // it("Should return the action", () => {
  //   const goals = [];
  //   const action = shareGoals(goals);
  //   expect(action.type).toEqual(SHARE_GOALS);
  //   expect(action.type).toEqual(goals);
  // });
});
