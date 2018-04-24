import React from "react";
import { shallow, mount } from "enzyme";
import {TodoGoals} from "./todo-goals";

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

  it("Renders checked goals as Completed Goals", () => {
    const wrapper = shallow(<TodoGoals goals={[]} />);
  });

  it("Renders unchecked goals as Todo Goals", () => {
    const wrapper = shallow(<TodoGoals goals={[]} />);
  });
});
