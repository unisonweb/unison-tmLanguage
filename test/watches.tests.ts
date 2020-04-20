import { should } from 'chai';
import { tokenize, Token } from './utils/tokenize';

describe("Grammar", () => {
  before(() => { should(); });

  describe("Watches", () => {
    it("watch expresion", () => {
      const input = `> this is a watch`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Watches.Watch
      ]);
    });

    it("test watch expresion", () => {
      const input = `test> this is a test watch`;
      const tokens = tokenize(input)

      tokens.should.deep.equal([
        Token.Watches.TestWatch
      ]);
    });
  });
});
