import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Cases", () => {
    it("case of", () => {
      const input = `case i of
_ -> false`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.CaseOf.Case,
        Token.Source.Text(" i"),
        Token.Source.Text(" "),
        Token.CaseOf.Of,
        Token.Source.Text("_"),
        Token.Source.Text(" "),
        Token.CaseOf.Arrow,
        Token.Source.Text(" "),
        Token.Boolean.False
      ]);
    });
  });
});
