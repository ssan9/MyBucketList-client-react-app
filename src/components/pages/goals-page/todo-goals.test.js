import React from "react";
import { shallow, mount } from "enzyme";

import {TodoGoals} from "./todo-goals";
//will renders title and all be included here or goalspage-test?

describe("<TodoGoals />", () => {
  const seedGoals = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedGoals.push({
        description: `Goal ${i}`,
        category: "Sports",
        created: Date.now(),
        due: Date.now(),
        checked: true,
        completed: Date.now()
      });
    }
  });

  it("Renders without crashing", () => {
    shallow(<TodoGoals goals={[]} />);
  });

  it("Renders the title", () => {
    const title = "Foo";
    const wrapper = shallow(<TodoGoals title={title} goals={[]} />);
    expect(wrapper.contains(title)).toEqual(true);
  });

  // it("Renders the goals", () => {
  //   const wrapper = shallow(<TodoGoals goals={seedGoals} />);
  //   const goals = wrapper.find("seedGoals");
  //   // expect(goals.length).toEqual(seedGoals.length);
  //   const firstGoal = goals.first();
  //   expect(firstGoal.prop("description")).toEqual(seedGoals[0]);
  // });

  // it('Should dispatch putGoal when goals goals are toggled', () => {
  //     const dispatch = jest.fn();
  //     const wrapper = shallow(<TodoGoals dispatch={dispatch} goals={[]} />);
  //     const link = wrapper.find(toggleChecked());
  //     link.simulate('click');
  //     expect(dispatch).toHaveBeenCalled();
  //     const action = dispatch.mock.calls[0][0];
  //     expect(action.type).toEqual(putGoal);
  //   });

  it("Renders checked goals as Completed Goals", () => {
    const wrapper = shallow(<TodoGoals goals={[]} />);
    // const completedGoals = wrapper.find(checked);
    // expect(wrapper.contains({completedGoals})).toEqual(true);
  });

  it("Renders unchecked goals as Todo Goals", () => {
    const wrapper = shallow(<TodoGoals goals={[]} />);
    // const todoGoals = wrapper.find(!checked);
    // expect(wrapper.const({todoGoals})).toEqual(true);
  });
});
