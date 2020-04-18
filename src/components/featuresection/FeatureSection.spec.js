import { mount } from "@vue/test-utils";
import FeatureSection from "../featuresection/FeatureSection.vue";

describe("Feature Section", () => {
  const wrapper = mount(FeatureSection, {
    propsData: {
      content: {
        img: "imgs/thisimage.webp",
        title: "this feature title",
        subTitle: "this feature subtitle",
        desc: "this feature desc",
      },
      seeMore: "lihat semua fitur",
    },
  });

  test("it is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("it has image and feature information", () => {
    expect(wrapper.contains("img")).toBeTruthy();
    expect(wrapper.find(".feature-desc").text()).toBe("this feature desc");
    expect(wrapper.find("h2").text()).toBe("this feature title");
    expect(wrapper.find(".feature-subtitle").text()).toBe(
      "this feature subtitle"
    );
  });
});
