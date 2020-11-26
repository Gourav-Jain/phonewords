import { renderHook, act } from "@testing-library/react-hooks";
import { useDailKeyPadContainer } from "./DailKeyPad.container";
import * as action from "../../../actions/action";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn,
  useSelector: () => ({
    phoneword: {
      showLoader: true,
      error: false,
      listOfWords: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    },
  }),
}));

describe("useDailKeyPadContainer()", () => {
  jest.spyOn(action, "setPhonewordRequest").mockReturnValue(jest.fn);
  jest.spyOn(action, "setPhonewordResponse").mockReturnValue(jest.fn);
  jest.spyOn(action, "setPhonewordFailer").mockReturnValue(jest.fn);

  beforeEach(jest.clearAllMocks);

  const render = () => {
    const { result } = renderHook(useDailKeyPadContainer);

    return result.current;
  };

  describe("@returns property", () => {
    test("should return default state of phonenumber", () => {
      const { phonenumber } = render();
      expect(phonenumber).toEqual("");
    });
  });

  describe("@action", () => {
    test("should call on textbox handle change", () => {
      const { result } = renderHook(useDailKeyPadContainer);

      act(() => result.current.handleChange({ target: { value: "23445" } }));

      expect(result.current.phonenumber).toEqual("23445");
    });
    test("should call on handleClick if click on # button", () => {
      const { result } = renderHook(useDailKeyPadContainer);

      act(() => result.current.handleClick(-1));

      expect(result.current.phonenumber).toEqual("");
      expect(action.setPhonewordResponse).toHaveBeenCalledTimes(1);
    });
    test("should call on handleClick any num", () => {
      const { result } = renderHook(useDailKeyPadContainer);

      act(() => result.current.handleClick(2));
      act(() => result.current.handleClick(3));
      expect(result.current.phonenumber).toEqual("23");
      expect(action.setPhonewordResponse).toHaveBeenCalledTimes(0);
    });
    test("should call on handleSubmit", () => {
      const { result, waitForNextUpdate } = renderHook(useDailKeyPadContainer);
      const fakeWordList = {
        result: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      };
      jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
          json: () => Promise.resolve(fakeWordList),
        })
      );

      act(() => result.current.handleSubmit());

      expect(action.setPhonewordRequest).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalled();

      waitForNextUpdate();
      global.fetch.mockRestore();
    });
  });
});
