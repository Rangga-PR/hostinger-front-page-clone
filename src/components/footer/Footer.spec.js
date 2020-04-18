import { shallowMount } from "@vue/test-utils";
import Footer from "../footer/Footer.vue";
import VeriticalMenu from "../verticalmenu/VerticalMenu.vue";

describe("Footer", () => {
  const wrapper = shallowMount(Footer, {
    propsData: {
      content: {
        socialMedia: [
          {
            name: "linkedIn",
            img: "img/linkedin.webp",
            link: "#",
          },
        ],
        paymentMethods: [
          {
            method: "custom",
            img: "img/custom.webp",
          },
        ],
        about: "about this",
        menus: [
          {
            title: "Hosting",
            submenu: [
              {
                title: "Web Hosting Terbaik",
                link: "#",
              },
            ],
          },
        ],
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("has menus section", () => {
    expect(wrapper.findAll(VeriticalMenu).length).toBe(1);
  });
  test("has social media section", () => {
    expect(wrapper.contains(".social-media")).toBeTruthy();
  });
  test("has payment methods section", () => {
    expect(wrapper.contains(".payment-method")).toBeTruthy();
  });
});
