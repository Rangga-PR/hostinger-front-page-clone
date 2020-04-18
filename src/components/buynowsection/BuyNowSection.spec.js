import { mount } from "@vue/test-utils";
import BuyNowSection from "../buynowsection/BuyNowSection.vue";
import Button from "../button/Button.vue";

describe("Buy Now Section", () => {
  const wrapper = mount(BuyNowSection, {
    propsData: {
      title: "this is a title",
      subTitle: "this is the sub title",
    },
  });

  test("is rendering correct title", () => {
    expect(wrapper.find("h2").text()).toBe("this is a title");
  });

  test("has the correct subtitle", () => {
    expect(wrapper.find("p").text()).toBe("this is the sub title");
  });

  test("is rendering button", () => {
    const buttonElement = wrapper.find(Button);
    expect(buttonElement.is(Button)).toBeTruthy();
  });
});
