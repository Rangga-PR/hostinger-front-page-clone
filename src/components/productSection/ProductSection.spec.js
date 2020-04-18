import { shallowMount } from "@vue/test-utils";
import ProductSection from "../productSection/ProductSection.vue";
import ProductCard from "../productcard/ProductCard.vue";

describe("Product section", () => {
  const wrapper = shallowMount(ProductSection, {
    propsData: {
      content: {
        addToCart: "Tambahkan ke cart",
        seeAll: "lihat semua",
        productList: [
          {
            category: "this category",
            product: [
              {
                name: "Startup",
                originalPrice: "Rp.351,103",
                discountedPrice: {
                  currency: "Rp",
                  number: "8,739",
                  perTime: "bln",
                },
                discount: "Diskon 77%",
                term: "Rp.232,799/bln saat diperpanjang",
                feature: [
                  {
                    name: "Jumlah Website <b>Unlimited</b>",
                    green: true,
                  },
                  {
                    name: "SSD Storage <b>100GB</b>",
                    green: false,
                  },
                  {
                    name: "<b>3 GB</b> RAM",
                    green: false,
                  },
                  {
                    name: "<b>2</b> CPU Core",
                    green: false,
                  },
                ],
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

  test("second tab is the selected tab by default", () => {
    expect(wrapper.vm.$data.selectedTabs).toBe(1);
  });

  test("display correct product list", () => {
    expect(wrapper.find(".tab-content").findAll(ProductCard).length).toBe(1);
  });
});
