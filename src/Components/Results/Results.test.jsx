// import { expect, test, describe } from "vitest";
// import { render } from "@testing-library/react";
// import Results from "./index";
// import "@testing-library/jest-dom";

// describe("Results component", () => {
//   test("renders loading state", () => {
//     const wrapper = render(<Results loading={true} />);
//     const loadingText = wrapper.getByText("Loading...");
//     expect(loadingText).toBeTruthy();
//   });

//   test("renders data", () => {
//     const testData = { foo: "bar" };
//     const wrapper = render(<Results data={testData} />);
//     const preElement = wrapper.container.querySelector("pre");

//     expect(preElement).toBeTruthy();
//   });
// });

import { expect, test, describe,vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Results from "./index";
import "@testing-library/jest-dom";

describe("Results component", () => {
  // ... (imports and describe block)

test("handles Previous button click", () => {
  const testData = {
    headers: {},
    results: { foo: "bar", previous: "prev-url", next: "next-url" },
  };

  const handleApiCall = vi.fn(); // Create a mock function

  const wrapper = render(<Results data={testData} handleApiCall={handleApiCall} />);
  const previousButton = wrapper.getByText("Previous");

  fireEvent.click(previousButton, { preventDefault: vi.fn() }); // Pass event object

  // Check that the handleApiCall function was called with the correct arguments
  expect(handleApiCall).toHaveBeenCalledWith({
    method: "GET",
    url: "prev-url",
  });
});

test("handles Next button click", () => {
  const testData = {
    headers: {},
    results: { foo: "bar", previous: "prev-url", next: "next-url" },
  };

  const handleApiCall = vi.fn(); // Create a mock function

  const wrapper = render(<Results data={testData} handleApiCall={handleApiCall} />);
  const nextButton = wrapper.getByText("Next");

  fireEvent.click(nextButton, { preventDefault: vi.fn() }); // Pass event object

  // Check that the handleApiCall function was called with the correct arguments
  expect(handleApiCall).toHaveBeenCalledWith({
    method: "GET",
    url: "next-url",
  });
});

});
