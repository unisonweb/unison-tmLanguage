import { should } from 'chai';
import { tokenize, Input, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Comments", () => {
    it("single-line comment", () => {
      const input = `-- foo`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Comment.SingleLine.Start,
        Token.Comment.SingleLine.Text(" foo")
      ]);
    });

    it("single-line comment after whitespace", () => {
      const input = `     -- foo`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Comment.LeadingWhitespace("     "),
        Token.Comment.SingleLine.Start,
        Token.Comment.SingleLine.Text(" foo")
      ]);
    });

    it("single-line double comment", () => {
        const input = `-- -- foo`;
        const tokens = tokenize(input);

        tokens.should.deep.equal([
            Token.Comment.SingleLine.Start,
            Token.Comment.SingleLine.Text(" -- foo")]);
    });
  });
});
