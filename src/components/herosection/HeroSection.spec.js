import { mount } from "@vue/test-utils";
import HeroSection from "../herosection/HeroSection.vue";
import PriceTyphograpy from "../pricetypography/PriceTypography.vue";
import Button from "../button/Button.vue";
import Timer from "../timer/Timer.vue";
import BigDiscountPrice from "../bigdiscountprice/BigDiscountPrice.vue";

describe("Hero Section", () => {
  const wrapper = mount(HeroSection, {
    propsData: {
      content: {
        title: "this title",
        subTitle: "this subTitle",
        dateTime: {
          days: "HARI",
          hours: "JAM",
          minutes: "MENIT",
          seconds: "DETIK",
        },
        bigDiscount: {
          countDown: {
            date: "May 22, 2020 17:37:25",
          },
          buyNow: "beli sekarang",
          discount: "discount 40%",
          price: {
            currency: "Rp",
            number: "2,301",
            perTime: "bln",
          },
        },
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("contains big discount price info, button and timer", () => {
    expect(wrapper.contains(Timer)).toBeTruthy();
    expect(wrapper.contains(BigDiscountPrice)).toBeTruthy();
    expect(wrapper.find(Button).text()).toBe("beli sekarang");
    expect(wrapper.contains(PriceTyphograpy)).toBeTruthy();
  });
});
