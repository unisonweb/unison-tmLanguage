import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Numbers", () => {
    it("negative float", () => {
      const input = `-3.14`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Number.Float("-3.14")]);
    });
    it("positive float", () => {
      const input = `3.14`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Number.Float("3.14")]);
    });

    it("negative int", () => {
      const input = `-42`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Number.Int("-42")]);
    });
    it("positive int", () => {
      const input = `+42`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Number.Int("+42")]);
    });

    it("nat", () => {
      const input = `42`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([Token.Number.Nat("42")]);
    });
  });
});
