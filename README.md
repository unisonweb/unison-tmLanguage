# unison-tmLanguage
A TextMate grammar for the Unison language.

## Grammars

This repository contains the following grammars:


| Grammar                                                            | Editor       |
| :----------------------------------------------------------------: | :----------: |
| [grammars/unison.tmLanguage.json](grammars/unison.tmLanguage.json) | VS code      |
| [grammars/unison.tmLanguage.cson](grammars/unison.tmLanguage.cson) | Atom         |
| [grammars/unison.tmLanguage](grammars/unison.tmLanguage)           | Sublime Text |

## Contributing

To incorporate new changes into the Unison grammar, you will need to look into the source grammar:
[src/unison.tmLanguage.yml](src/unison.tmLanguage.yml).

Once your modifications are in place, you can generate the derived grammars located in
[grammars/](grammars/) by running:

```bash
npm install
```

Once the derived grammars are generated, you can write tests for your modifications taking one of
the file in [test/](test/) as an example. You can then run the tests with:

```bash
npm test
```

## Credits

Tests and project scaffolding were heavily inspired by:

- [dotnet/csharp-tmLanguage](https://github.com/dotnet/csharp-tmLanguage)
- [PanAeon/vscode-tmgrammar-test](https://github.com/PanAeon/vscode-tmgrammar-test)
