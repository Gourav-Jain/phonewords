import * as actions from "./action";

describe("@actions and @creators", () => {
  describe("actions", () => {
    const phonewordActions = [
      actions.PHONE_WORDS_REQS,
      actions.PHONE_WORDS_RESP,
      actions.PHONE_WORDS_FAIL,
    ];

    test.each(phonewordActions)("should return %s action", (actionType) =>
      expect(actions[actionType]).toMatchSnapshot()
    );
  });

  describe("creators", () => {
    test.each`
      creatorName               | mockData
      ${"setPhonewordRequest"}  | ${"mock-data"}
      ${"setPhonewordResponse"} | ${"mock-data"}
      ${"setPhonewordFailer"}   | ${"mock-data"}
    `("$creatorName returns correctly", ({ creatorName, mockData }) => {
      expect(actions[creatorName](mockData)).toMatchSnapshot();
    });
  });
});
