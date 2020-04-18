import { mount } from "@vue/test-utils";
import Timer from "../timer/Timer.vue";
import Vue from "vue";

describe("Timer", () => {
  const wrapper = mount(Timer, {
    propsData: {
      endDate: "May 22, 2020 17:37:25",
      content: {
        days: "HARI",
        hours: "JAM",
        minutes: "MENIT",
        seconds: "DETIK",
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
