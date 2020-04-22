import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";
import App from "./index.js";

describe(__filename, () => {
  it("rendered page should match snapshot", () => {
    const data = {
      rates: {
        base: { value: "EUR" },
        rates: [{ currency: { value: "GBP" }, quote: { value: "0.86075" } }],
      },
    };
    const component = renderer.create(<App data={data} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
