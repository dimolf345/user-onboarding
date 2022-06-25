import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "@/src/test-utils";
import { vi } from "vitest";
import StepList from "./StepList";
import { STEPS } from "../../../utilities/constants";

function setup() {
  const mockSteps = [...STEPS];
  render(<StepList steps={mockSteps} handleClick={vi.fn()} />);
}

describe("StepList", () => {
  it("should render a list of links", () => {
    render(<StepList steps={STEPS} handleClick={vi.fn()} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(STEPS.length);
  });
});
