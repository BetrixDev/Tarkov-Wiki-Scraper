import { Token, tokenise, TokenType } from "./lexer";
import { StmtWithValue, Page, SquareLinkStmt, Stmt, StmtWithBody } from "./ast";

// TODO: Add support for parsing images as separate node instead of parsing as a SquareLink

export class Parser {
  private tokens: Token[] = [];
  private pageContent: string;

  private constructor(pageContent: string) {
    this.pageContent = pageContent;
  }

  static createAST(pageContent: string): Page {
    return new Parser(pageContent).parseContent();
  }

  private parseContent() {
    this.tokens = tokenise(this.pageContent);

    const page: Page = {
      kind: "Page",
      body: [],
    };

    // Parse until end of file
    while (!this.endOfFile()) {
      page.body.push(this.parseStmt());
    }

    return page;
  }

  private endOfFile(): boolean {
    return this.tokens[0].type === TokenType.EOF;
  }

  private parseStmt(): Stmt {
    const tk = this.tokens[0].type;

    switch (tk) {
      case TokenType.LineBreak:
      case TokenType.LineBreakTag:
        return this.parseLineBreak();

      case TokenType.OpenCurlyLink:
        const closingIndex = this.tokens.findIndex((t, i) => {
          if (t.type === TokenType.CloseCurlyLink) {
            return i;
          }
        });

        if (closingIndex === 2) {
          return this.parseCurlyLink();
        } else {
          return this.parseTable(closingIndex);
        }

      case TokenType.OpenSquareLink:
        return this.parseSquareLink();

      case TokenType.TripleEqual:
      case TokenType.DoubleEqual:
        return this.parseEqual();

      default:
        const tk = this.eat();
        return { kind: "StringContent", value: tk.value } as StmtWithValue;
    }
  }

  private parseLineBreak(): StmtWithValue {
    if (
      this.tokens[1].type === TokenType.LineBreak ||
      this.tokens[1].type === TokenType.LineBreakTag
    ) {
      // If there are two line breaks in a row, remove one
      this.tokens.splice(1, 1);
    }

    this.moveForward(1);
    return { kind: "LineBreak", value: "\n" };
  }

  private parseCurlyLink(): StmtWithValue {
    const body = this.tokens[1];

    this.moveForward(3);
    return { kind: "CurlyLink", value: body.value };
  }

  private parseTable(closingIndex: number): Stmt {
    this.moveForward(closingIndex + 1);
    return { kind: "Table" };
  }

  private parseSquareLink(): SquareLinkStmt {
    const closingIndex = this.tokens.findIndex((t, i) => {
      if (t.type === TokenType.CloseSquareLink) {
        return i;
      }
    });

    if (closingIndex < 0) {
      throw Error(
        "Error Parsing SqaureBraceLink: Expected closing curly brace"
      );
    }

    const pageTitle = this.tokens[1].value;

    if (closingIndex === 2) {
      this.moveForward(closingIndex + 1);
      return { kind: "SquareLink", display: pageTitle, title: pageTitle };
    } else {
      const displayText = this.tokens[closingIndex - 1].value;

      let link = pageTitle;

      if (this.tokens[2].type === TokenType.Hashtag) {
        link = `${link}#${this.tokens[3].value}`;
      }

      this.moveForward(closingIndex + 1);
      return { kind: "SquareLink", display: displayText, title: link };
    }
  }

  private parseEqual(): StmtWithBody {
    const tk = this.eat();
    const closingIndex = this.tokens.findIndex((t, i) => {
      if (t.type === tk.type) {
        return i;
      }
    });

    if (closingIndex < 0) {
      throw Error("Error Parsing EqualLink: Expected closing equals ");
    }

    // Remove closing element so we don't parse it again
    this.tokens.splice(closingIndex, 1);

    // Some headings have whitespace before and after link token, so we do something dumb to fix it
    const body: Stmt[] = this.tokens
      .slice(0, closingIndex === 1 ? 1 : closingIndex - 2)
      .map(() => {
        return this.parseStmt();
      });

    const isLargeHeading = tk.value === "==";

    return {
      kind: isLargeHeading ? "LargeHeading" : "MediumHeading",
      body,
    };
  }

  private eat() {
    return this.tokens.shift() as Token;
  }

  private moveForward(n: number) {
    this.tokens = this.tokens.slice(n);
  }
}
