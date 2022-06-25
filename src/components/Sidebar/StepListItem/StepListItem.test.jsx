import { describe, expect, it, vi } from "vitest";
import StepListItem from "./StepListItem";
import {
  render,
  screen,
  userEvent,
  clickWithPreventDefault,
} from "@/src/test-utils";

const ListItemProps = {
  step: {
    name: "Test",
    isCompleted: false,
    isActive: true,
  },
  isLast: false,
};

describe("StepListItem", () => {
  it("should render a read-only checkbox", () => {
    render(<StepListItem {...ListItemProps} handleClick={vi.fn()} />);
    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toHaveAccessibleName();
    expect(checkBox).not.toBeChecked();
    userEvent.click(checkBox);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should render the link", () => {
    render(
      <StepListItem
        step={{ ...ListItemProps.step, isActive: false }}
        handleClick={vi.fn()}
      />
    );
    expect(screen.getByRole("link")).not.toHaveClass("--white");
  });

  it("should render a white link if completed or selected", () => {
    render(<StepListItem {...ListItemProps} handleClick={vi.fn()} />);
    expect(screen.getByRole("listitem")).toHaveClass("steplist__item--white");
  });

  it("should render a link that calls the handleClick function", () => {
    const mockHandleClick = vi.fn();
    render(
      <StepListItem
        {...ListItemProps}
        handleClick={mockHandleClick}
        isLast={false}
      />
    );
    clickWithPreventDefault(screen.getByRole("link"));
    expect(mockHandleClick).toBeCalled();
  });
});
