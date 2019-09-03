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
        Token.Comment.SingleLine.Text(" -- foo")
      ]);
    });

    it("eof comment spanning multiple lines", () => {
      const input = `--- foo
bar
baz
`;
      const tokens = tokenize(input);

      tokens.should.deep.equal([
        Token.Comment.Eof.Start,
        Token.Comment.Eof.Text(" foo"),
        Token.Comment.Eof.Text("bar"),
        Token.Comment.Eof.Text("baz")
      ]);
    });

    it("eof comment spanning one line", () => {
      const input = `--- foo
`;
      const tokens = tokenize(input);

      tokens.should.deep.equal([
        Token.Comment.Eof.Start,
        Token.Comment.Eof.Text(" foo")
      ]);
    });

    it("eof comment after something", () => {
      const input = `square x = x * x --- foo
`;
      const tokens = tokenize(input);

      tokens.should.deep.equal([
        Token.Source.Text("square x = x * x "),
        Token.Comment.Eof.Start,
        Token.Comment.Eof.Text(" foo")
      ]);
    });

    it("eof comment after whitespace", () => {
      const input = `  --- foo
`;
      const tokens = tokenize(input);

      tokens.should.deep.equal([
        Token.Comment.LeadingWhitespace("  "),
        Token.Comment.Eof.Start,
        Token.Comment.Eof.Text(" foo")
      ]);
    });
  });
});
