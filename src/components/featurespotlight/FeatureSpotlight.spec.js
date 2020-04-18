import { shallowMount } from "@vue/test-utils";
import FeatureSpotlight from "../featurespotlight/FeatureSpotlight.vue";

describe("Feature Spotlight", () => {
  const wrapper = shallowMount(FeatureSpotlight, {
    propsData: {
      content: {
        title: "this title",
        img: "imgs/thisImage.webp",
        features: [
          {
            title: "this feature title",
            desc: "this feature desc",
          },
        ],
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("has image", () => {
    expect(wrapper.contains("img")).toBeTruthy();
  });

  test("has correct number of feature", () => {
    expect(wrapper.findAll(".feature-title").length).toBe(1);
  });
});
