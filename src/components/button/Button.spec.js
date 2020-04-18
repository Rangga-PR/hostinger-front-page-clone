import { shallowMount } from "@vue/test-utils";
import Button from "../button/Button.vue";

describe("Button", () => {
  test("is rendered and visible", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
