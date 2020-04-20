import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Watches", () => {
    it("expresions", () => {
      const input = `> this is a watch expression`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Watches.Watch
      ]);
    });
  });
});
