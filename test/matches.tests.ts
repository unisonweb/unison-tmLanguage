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
        Token.Source.Text("_"),
        Token.Source.Text(" "),
        Token.MatchWith.Arrow,
        Token.Source.Text(" "),
        Token.Boolean.False
      ]);
    });
  });
});
