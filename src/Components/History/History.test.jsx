import { expect, test, describe } from "vitest";
import { render } from "@testing-library/react";
import History from "./History";

describe("History Component", () => {
  test("renders history items correctly", () => {
    const history = [
      {
        config: {
          method: "GET",
          url: "https://example.com/api/data"
        },
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          message: "Data fetched successfully"
        }
      },
      // Add more history items as needed
    ];

    const { getByText } = render(<History history={history} renderHistory={true} />);

    history.forEach((item, index) => {
      const requestHeaderText = getByText(`Request ${index + 1}`);
      const requestMethodText = getByText(`Request Method: ${item.config.method}`);
      const urlText = getByText(`URL: ${item.config.url}`);
      const headersHeaderText = getByText("Headers:");
      const resultsHeaderText = getByText("Results:");

      // Use the expect syntax from vitest
      expect(requestHeaderText).not.toBeUndefined();
      expect(requestMethodText).not.toBeUndefined();
      expect(urlText).not.toBeUndefined();
      expect(headersHeaderText).not.toBeUndefined();
      expect(resultsHeaderText).not.toBeUndefined();
    });
  });
});
