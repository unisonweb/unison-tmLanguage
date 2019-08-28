// heavily inspired by https://github.com/dotnet/csharp-tmLanguage/blob/master/test/utils/tokenize.ts

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
