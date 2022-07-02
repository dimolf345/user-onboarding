import { describe, expect, it } from "vitest";
import Card from "./Card";
import { render, screen, userEvent } from "@/src/test-utils";
import { QUOTES } from "@/src/utilities/constants";

const cardProps = {
  quote: QUOTES[0],
};

describe("Card", () => {
  beforeEach(() => {
    render(<Card {...cardProps} />);
  });

  it("should render the card", () => {
    expect(screen.getByRole("figure")).toBeInTheDocument();
  });

  it("should render a quote and ");
});
