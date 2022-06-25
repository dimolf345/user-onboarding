import { describe, expect, it } from "vitest";
import Sidebar from "./Sidebar";
import { render, screen, userEvent } from "@/src/test-utils";

describe("Sidebar", () => {
  it("should contain a logo ", () => {
    render(<Sidebar />);
  });
});
