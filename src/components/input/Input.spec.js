import { shallowMount } from "@vue/test-utils";
import Input from "../input/Input.vue";

describe("Input Component", () => {
  test("is rendered and visible", () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
