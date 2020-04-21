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

    const component = shallow(<Login />);
    component
      .find("form")
      .simulate("submit", { preventDefault: submitHandleCalled });

    expect(submitHandleCalled).toHaveBeenCalled();
  });

  it('When login fails should display error message"', () => {
    const component = shallow(<Login />);
    component.find("form").simulate("submit", { preventDefault: () => {} });
    expect(component.find('[role="alert"]').text()).toEqual(
      "Login failed. Please check your login details and try again."
    );
  });
});
