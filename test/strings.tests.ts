import { should } from 'chai';
import { tokenize, Input, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Strings", () => {
    it("simple", () => {
      const input = `"hello"`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Text.Start,
        Token.Text.String("hello"),
        Token.Text.End
      ]);
    });
  });
});
