import { describe, expect, it } from "vitest";
import Logo from "./Logo";
import { render, screen, userEvent } from "@/src/test-utils";

describe("Logo", () => {
  it("should have an alt text", () => {
    render(<Logo />);
    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  });
});
