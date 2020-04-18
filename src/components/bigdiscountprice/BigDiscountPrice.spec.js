import { shallowMount } from "@vue/test-utils";
import BigDiscountPrice from "../bigdiscountprice/BigDiscountPrice.vue";

describe("Big Discount Price", () => {
  test("is rendered and visible", () => {
    const wrapper = shallowMount(BigDiscountPrice);
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
