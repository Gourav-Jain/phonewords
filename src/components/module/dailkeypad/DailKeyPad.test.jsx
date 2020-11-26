import React from "react";
import { render } from "@testing-library/react";
import DailKeyPad from "./DailKeyPad";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn,
  useSelector: () => ({
    phoneword: {},
  }),
}));

test("@DailKeyPad", () => {
  const { container } = render(<DailKeyPad />);
  expect(container).toMatchSnapshot();
});
