import { getApiUrlByEnv } from "./common";

jest.mock("react-redux", () => ({
  useSelector: () => ({
    phoneword: {},
  }),
}));

test("@Common getApiUrlByEnv", () => {
  let output = getApiUrlByEnv();
  expect(output).toEqual("http://localhost:3001/getWordListByDigits");

  process.env.NODE_ENV = "production";
  output = getApiUrlByEnv();
  expect(output).toEqual("http://prod/getWordListByDigits");
});
