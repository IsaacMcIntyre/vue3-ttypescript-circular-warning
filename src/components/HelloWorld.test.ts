// @ts-ignore

import HelloWorld from "./HelloWorld.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld component", () => {
  it("renders", () => {
    const wrapper = mount<typeof HelloWorld>(HelloWorld, {
      props: { msg: "hello world" },
    });
    expect(wrapper.find(".green").text()).toBe("hello world");
    expect(1).toBeTruthy()
  });
});
