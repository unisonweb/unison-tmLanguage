import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Function definitions", () => {
    it("with space", () => {
      const input = `timesTwo :`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Def.Fn("timesTwo"),
        Token.Source.Text(" "),
        Token.Def.Colon
      ]);
    });

    it("without space", () => {
      const input = `timesTwo:`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Def.Fn("timesTwo"),
        Token.Def.Colon
      ]);
    });
  });
});
