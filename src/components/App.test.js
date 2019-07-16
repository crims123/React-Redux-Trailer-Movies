import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App Component", () => {
  it("render app without crasing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });

  it("app has a header", () =>{
    const wrapper = shallow(<App />);
    const header = wrapper.find("Header");
    expect(header.text()).toBe("<Header />");
  });
});
