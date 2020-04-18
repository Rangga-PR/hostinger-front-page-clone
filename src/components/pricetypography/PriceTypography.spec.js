import { shallowMount } from "@vue/test-utils";
import PriceTypography from "../pricetypography/PriceTypography.vue";

describe("PriceTypography component", () => {
  test("is rendered and visible", () => {
    const wrapper = shallowMount(PriceTypography);
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
