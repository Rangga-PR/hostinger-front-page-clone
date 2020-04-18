import { shallowMount } from "@vue/test-utils";
import ProductCard from "../productcard/ProductCard.vue";
import Button from "../button/Button.vue";
import PriceTypography from "../pricetypography/PriceTypography.vue";

describe("ProductCard", () => {
  const wrapper = shallowMount(ProductCard, {
    propsData: {
      content: {
        tag: "terpopuler",
        googleCloudSupport: true,
        name: "this card name",
        discount: "discount 40%",
        term: "Rp.465,599/bln saat diperpanjang",
        originalPrice: "Rp.2000",
        discountedPrice: {
          currency: "Rp",
          number: "1,399",
          perTime: "bln",
        },
        feature: [
          {
            name: "Jumlah Website <b>Unlimited</b>",
            green: true,
          },
        ],
      },
    },
  });

  test("is rendered and visible", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });

  test("display tag if exist", () => {
    expect(wrapper.contains(".card-tag")).toBeTruthy();
  });

  test("has contents", () => {
    const content = wrapper.find(".card-content");
    expect(content.contains(Button)).toBeTruthy();
    expect(content.contains(PriceTypography)).toBeTruthy();
    expect(content.find(".product-name").text()).toBe("this card name");
    expect(content.find(".product-term").text()).toBe(
      "Rp.465,599/bln saat diperpanjang"
    );
    expect(content.find(".see-all-feature").contains("a")).toBeTruthy();
    expect(
      content
        .find(".discount-info")
        .find("del")
        .text()
    ).toBe("Rp.2000");
    expect(
      content.find(".discount-info").contains(".discount-tag")
    ).toBeTruthy();
    expect(wrapper.find(".product-feature").findAll("li").length).toBe(1);
  });
});
