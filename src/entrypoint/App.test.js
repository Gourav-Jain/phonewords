import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

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

test("@App", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
