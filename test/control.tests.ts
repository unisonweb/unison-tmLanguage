import { should } from 'chai';
import { tokenize, Input, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Control", () => {
    it("if then else", () => {
      const input = `if b then true else false`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Control.If,
        Token.Source.Text(" b "),
        Token.Control.Then,
        Token.Source.Text(" "),
        Token.Boolean.True,
        Token.Source.Text(" "),
        Token.Control.Else,
        Token.Source.Text(" "),
        Token.Boolean.False
      ]);
    });

    it("and/or", () => {
      const input = `false and false or true`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Boolean.False,
        Token.Source.Text(" "),
        Token.Control.And,
        Token.Source.Text(" "),
        Token.Boolean.False,
        Token.Source.Text(" "),
        Token.Control.Or,
        Token.Source.Text(" "),
        Token.Boolean.True
      ]);
    });
  });
});
