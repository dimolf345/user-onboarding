import { describe, expect, it } from "vitest";
import TemplateName from "./TemplateName";
import { render, screen, userEvent } from "@/src/test-utils";

describe("TemplateName", () => {
  it("should be rendered", () => {
    render(<TemplateName />);
  });
});
