import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("For all", () => {
    it("forall", () => {
      const input = `forall a. a -> a`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.ForAll.ForAll,
        Token.Source.Text(" "),
        Token.Source.Text("a. a"),
        Token.Source.Text(" "),
        Token.MatchWith.Arrow
      ]);
    });

    it("forall symbol", () => {
      const input = `∀ a. a -> a`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.ForAll.ForAllSymbol,
        Token.Source.Text(" "),
        Token.Source.Text("a. a"),
        Token.Source.Text(" "),
        Token.MatchWith.Arrow
      ]);
    });
  });
});
