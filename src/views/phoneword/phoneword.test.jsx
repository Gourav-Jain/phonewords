import React from "react";
import { render } from "@testing-library/react";
import Phoneword from "./phoneword";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn,
  useSelector: () => ({
    phoneword: {
      showLoader: false,
      error: false,
      listOfWords: [],
    },
  }),
}));

test("@Phoneword", () => {
  const { container } = render(<Phoneword />);
  expect(container).toMatchSnapshot();
});
