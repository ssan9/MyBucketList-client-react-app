import { getGoals } from "./index";

import { clearGoalForm } from "./index";
import { CLEAR_GOAL_FORM } from "./index";

describe("getGoals", () => {
  describe("clearGoalForm", () => {
    it("Should return the action", () => {
      const action = clearGoalForm();
      expect(action.type).toEqual(CLEAR_GOAL_FORM);
    });
  });
});
