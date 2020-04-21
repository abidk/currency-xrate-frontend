import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import Login from "./login.js";

describe(__filename, () => {
  it("rendered page should match snapshot", () => {
    const component = renderer.create(<Login />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('login submit should call the login function"', () => {
    const submitHandleCalled = jest.fn();

    const app = shallow(<Login />);
    app.find("form").simulate("submit", { preventDefault: submitHandleCalled });

    expect(submitHandleCalled).toHaveBeenCalled();
  });
});
