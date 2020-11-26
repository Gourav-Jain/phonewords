import { reducer as phonewordReducer } from "./reducer";
import * as actions from "../actions/action";

describe("Phoneword reducer", () => {
  test.each`
    name                                 | reducerFn                 | state   | mockData
    ${"sucessfull setPhonewordRequest"}  | ${"setPhonewordRequest"}  | ${null} | ${""}
    ${"sucessfull setPhonewordResponse"} | ${"setPhonewordResponse"} | ${null} | ${""}
    ${"sucessfull setPhonewordFailer"}   | ${"setPhonewordFailer"}   | ${null} | ${""}
  `("should return $name", ({ reducerFn, state, mockData }) => {
    const action = reducerFn ? actions[reducerFn](mockData) : {};
    expect(phonewordReducer(state, action)).toMatchSnapshot();
  });
});
