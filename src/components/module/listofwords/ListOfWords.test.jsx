import React from "react";
import { render } from "@testing-library/react";
import ListOfWords from "./ListOfWords";

const mockList = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
test("@ListOfWords", () => {
  const { container } = render(<ListOfWords list={mockList} />);
  expect(container).toMatchSnapshot();
});
