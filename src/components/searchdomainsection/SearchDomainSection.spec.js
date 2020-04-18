import { mount } from "@vue/test-utils";
import SearchDomainSection from "../searchdomainsection/SearchDomainSection.vue";
import Button from "../button/Button.vue";
import Input from "../input/Input.vue";

describe("Search Domain Section", () => {
  const wrapper = mount(SearchDomainSection);

  test("is rendering text input", () => {
    const inputElement = wrapper.find(Input);
    expect(inputElement.is(Input)).toBeTruthy();
  });

  test("is rendering button", () => {
    const buttonElement = wrapper.find(Button);
    expect(buttonElement.is(Button)).toBeTruthy();
  });
});
