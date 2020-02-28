// adapted from https://github.com/dotnet/csharp-tmLanguage/blob/master/test/utils/tokenize.ts

import { StackElement, Registry } from 'vscode-textmate';

export interface Token {
  text: string;
  type: string;
}

function createToken(text: string, type: string) {
  return { text, type };
}

export namespace Token {
  export namespace Comment {
    export const LeadingWhitespace = (text: string) =>
      createToken(text, 'punctuation.whitespace.comment.leading.unison');
    export namespace SingleLine {
      export const Start = createToken('--', 'punctuation.definition.comment.unison');
      export const Text = (text: string) => createToken(text, 'comment.line.double-dash.unison');
    }
    export namespace Eof {
      export const Start = createToken('---', 'punctuation.definition.comment.unison');
      export const Text = (text: string) => createToken(text, 'comment.block.eof.unison');
    }
  }

  export namespace Boolean {
    export const True = createToken('true', 'constant.language.boolean.true.unison');
    export const False = createToken('false', 'constant.language.boolean.false.unison');
  }

  export namespace Number {
    export const Float = (text: string) => createToken(text, 'constant.numeric.decimal.unison');
    export const Int = (text: string) => createToken(text, 'constant.numeric.integer.signed.unison');
    export const Nat = (text: string) => createToken(text, 'constant.numeric.integer.unsigned.unison');
  }

  export namespace Text {
    export const Start = createToken('"', 'punctuation.definition.string.begin.unison');
    export const End = createToken('"', 'punctuation.definition.string.end.unison');
    export const CharacterEscape = createToken('\\\"', 'constant.character.escape.unison');
    export const String = (text: string) => createToken(text, 'string.quoted.double.unison');
  }

  export namespace MatchWith {
    export const Match = createToken('match', 'keyword.control.match.unison');
    export const With = createToken('with', 'keyword.control.match.unison');
    export const Arrow = createToken('->', 'keyword.control.match.unison');
  }

  export namespace Control {
    export const If = createToken('if', 'keyword.control.unison');
    export const Then = createToken('then', 'keyword.control.unison');
    export const Else = createToken('else', 'keyword.control.unison');
    export const And = createToken('and', 'keyword.control.unison');
    export const Or = createToken('or', 'keyword.control.unison');
    export const AndAmpersands = createToken('&&', 'keyword.control.unison');
    export const OrVerticalBars = createToken('||', 'keyword.control.unison');
  }

  export namespace Def {
    export const Fn = (text: string) => createToken(text, 'entity.name.function.unison');
    export const Colon = createToken(':', 'keyword.other.colon.unison');
  }

  export namespace Source {
    export const Text = (text: string) => createToken(text, 'source.u');
  }
}

interface Span {
  startLine: number;
  startIndex: number;
  endLine: number;
  endIndex: number;
}

export class Input {
  private constructor(
    public lines: string[],
    public span: Span
  ) {}

  public static FromText(text: string) {
    text = text.replace('\r\n', '\n');
    let lines = text.split('\n');
    return new Input(lines, {
      startLine: 0,
      startIndex: 0,
      endLine: lines.length - 1,
      endIndex: lines[lines.length - 1].length
    })
  }
}

const registry = new Registry();
const grammar = registry.loadGrammarFromPathSync('grammars/unison.tmLanguage');

export function tokenize(input: string | Input): Token[] {
  if (typeof(input) === "string") {
    input = Input.FromText(input)
  }

  console.log(input);

  let tokens: Token[] = []
  let previousStack: StackElement = null;

  for (let lineIndex = 0; lineIndex < input.lines.length; lineIndex++) {
    const line = input.lines[lineIndex];

    let lineResult = grammar.tokenizeLine(line, previousStack);
    previousStack = lineResult.ruleStack;

    if (lineIndex < input.span.startLine || lineIndex > input.span.endLine) {
      continue;
    }

    for (const token of lineResult.tokens) {
      if ((lineIndex === input.span.startLine && token.startIndex < input.span.startIndex) ||
        (lineIndex === input.span.endLine && token.endIndex > input.span.endIndex)) {
          continue;
        }

      const text = line.substring(token.startIndex, token.endIndex);
      const type = token.scopes[token.scopes.length - 1];

      tokens.push(createToken(text, type));
    }
  }
  return tokens;
}
