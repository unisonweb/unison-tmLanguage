// adapted from https://github.com/dotnet/csharp-tmLanguage/blob/master/test/utils/tokenize.ts

export interface Token {
  text: string;
  type: string;
}

function createToken(text: string, type: string) {
  return { text, type };
}

export namespace Token {
  export namespace Comment {
    export namespace SingleLine {
      export const Start = createToken('--', 'punctuation.definition.comment.unison')
      export const Text = (text: string) => createToken(text, 'comment.line.double-dash.unison')
    }
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
