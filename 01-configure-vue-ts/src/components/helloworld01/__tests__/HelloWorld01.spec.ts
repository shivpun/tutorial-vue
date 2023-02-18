import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld01.vue";

describe("HelloWorld01", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
