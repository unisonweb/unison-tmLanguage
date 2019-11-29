import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Booleans", () => {
    it("true", () => {
      const input = `true`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Boolean.True]);
    });

    it("false", () => {
      const input = `false`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Boolean.False]);
    });
  });
});
