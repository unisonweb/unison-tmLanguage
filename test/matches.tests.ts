import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Matches", () => {
    it("match with", () => {
      const input = `match i with
_ -> false`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.MatchWith.Match,
        Token.Source.Text(" i"),
        Token.Source.Text(" "),
        Token.MatchWith.With,
        Token.Source.Text("_ "),
        Token.Arrow.Arrow,
        Token.Source.Text(" "),
        Token.Boolean.False
      ]);
    });

    it("cases", () => {
      const input = `cases
_ -> false`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.MatchWith.Cases,
        Token.Source.Text("_ "),
        Token.Arrow.Arrow,
        Token.Source.Text(" "),
        Token.Boolean.False
      ]);
    });
  });
});
