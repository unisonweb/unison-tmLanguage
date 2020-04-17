import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Arrow", () => {
    it("spaced out", () => {
      const input = `a -> a`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Source.Text("a "),
        Token.Arrow.Arrow
      ]);
    });

    it("without space", () => {
      const input = `a->a`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Source.Text("a"),
        Token.Arrow.Arrow
      ]);
    });
  });
});
