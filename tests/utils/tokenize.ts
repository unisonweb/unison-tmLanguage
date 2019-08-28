import { ITokenizeLineResult, Registry, StackElement } from 'vscode-textmate';

export interface Token {
  text: string;
  type: string;
}
