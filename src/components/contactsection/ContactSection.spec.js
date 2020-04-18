import { shallowMount } from "@vue/test-utils";
import ContactSection from "../contactsection/ContactSection.vue";

describe("Contact Section", () => {
  const wrapper = shallowMount(ContactSection, {
    propsData: {
      content: {
        phone: "1234567",
        email: "id@hostinger.com",
      },
    },
  });

  test("is rendered", () => {
    expect(wrapper.isVisible()).toBeTruthy();
  });
});
