import { expect, test, describe , vi} from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Results from "./index";
import "@testing-library/jest-dom";

describe("Results Component", () => {
  test("renders loading state", () => {
    const { container } = render(<Results loading={true} />);
    expect(container).toContainHTML("<div>Loading...</div>");
  });

  test("renders headers and results", () => {
    const data = {
      headers: { "Content-Type": "application/json" },
      results: { data: "example data" },
    };

    const { getByText } = render(<Results data={data} loading={false} />);
    
    expect(getByText("Headers:")).toBeTruthy();
    expect(getByText("Results:")).toBeTruthy();
    expect(getByText(/example data/)).toBeTruthy();
  });

  test("renders Previous and Next buttons", () => {
    const data = {
      headers: null,
      results: {
        previous: "previous-url",
        next: "next-url",
      },
    };

    const mockUpdateUrl = vi.fn();
    const { getByText } = render(
      <Results data={data} loading={false} updateUrl={mockUpdateUrl} />
    );

    const previousButton = getByText("Previous");
    fireEvent.click(previousButton);
    expect(mockUpdateUrl).toHaveBeenCalledWith("previous-url");

    const nextButton = getByText("Next");
    fireEvent.click(nextButton);
    expect(mockUpdateUrl).toHaveBeenCalledWith("next-url");
  });
});
