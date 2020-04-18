import { shallowMount } from "@vue/test-utils";
import GuaranteeSection from "../guaranteesection/GuaranteeSection.vue";

describe("Guarantee Section", () => {
  const wrapper = shallowMount(GuaranteeSection, {
    propsData: {
      content: {
        top: {
          img: "img/img.webp",
          title: "this title",
          desc: "this sub title",
        },
      },
    },
  });

  test("is rendered", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("render correct title and subtitle", () => {
    expect(wrapper.find("h2").text()).toBe("this title");
    expect(wrapper.find("p").text()).toBe("this sub title");
  });

  test("image is rendered", () => {
    expect(wrapper.find("img").isVisible()).toBeTruthy();
    expect(wrapper.find("img").attributes("src")).toBe("img/img.webp");
  });
});
