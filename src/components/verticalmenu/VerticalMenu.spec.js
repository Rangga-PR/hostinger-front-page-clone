import { shallowMount } from "@vue/test-utils";
import VerticalMenu from "../verticalmenu/VerticalMenu.vue";

describe("Vertical Menu", () => {
  const wrapper = shallowMount(VerticalMenu, {
    propsData: {
      menus: {
        title: "this menu title",
        submenu: [
          {
            title: "this submenu 1",
            link: "/this submenu 1 link",
          },
          {
            title: "this submenu 2",
            link: "/this submenu 2 link",
          },
        ],
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("has correct title", () => {
    expect(wrapper.find("h5").text()).toBe("THIS MENU TITLE");
  });

  test("has correct number of submenus", () => {
    const submenus = wrapper.findAll("li");
    expect(submenus.length).toBe(2);

    expect(
      submenus
        .at(0)
        .find("a")
        .text()
    ).toBe("this submenu 1");

    expect(
      submenus
        .at(0)
        .find("a")
        .attributes("href")
    ).toBe("/this submenu 1 link");
  });
});
