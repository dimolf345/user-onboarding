import { render, fireEvent } from "@testing-library/react";

const customRender = (ui, options = {}) => {
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
};

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };

export const clickWithPreventDefault = (element) => {
  fireEvent.click(
    element,
    new MouseEvent("click", {
      bubbles: false,
      cancelable: true,
    })
  );
};
