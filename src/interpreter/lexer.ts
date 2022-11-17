export enum TokenType {
  LineBreak, // \n
  LineBreakTag, // <br />
  StringContent, // Regular wiki text
  OpenSquareLink, // [[
  CloseSquareLink, // ]]
  OpenSquare, // [
  CloseSquare, // ]
  OpenCurlyLink, // {{
  CloseCurlyLink, // }}
  TripleEqual, // ===
  DoubleEqual, // ==
  Pipe, // |
  Hashtag, // #
  EOF, // End of file
}

export interface Token {
  value: string; // Contains the raw value as seen inside the source code.
  type: TokenType; // Tagged structure.
}

// Assign each token a correspoding string to lookup
const TOKEN_KEY_MAP: { key: string; token: TokenType }[] = [
  { key: "\n", token: TokenType.LineBreak },
  { key: "<br />", token: TokenType.LineBreakTag },
  { key: "[[", token: TokenType.OpenSquareLink },
  { key: "]]", token: TokenType.CloseSquareLink },
  { key: "[", token: TokenType.OpenSquare },
  { key: "]", token: TokenType.CloseSquare },
  { key: "{{", token: TokenType.OpenCurlyLink },
  { key: "}}", token: TokenType.CloseCurlyLink },
  { key: "===", token: TokenType.TripleEqual },
  { key: "==", token: TokenType.DoubleEqual },
  { key: "|", token: TokenType.Pipe },
  { key: "#", token: TokenType.Hashtag },
];

export const tokenise = (content: string) => {
  const tokens: Token[] = [];

  let cursorPosition = 0;

  const lookahead = (start: number) => {
    return TOKEN_KEY_MAP.find((t) => {
      const slice = content.slice(start, start + t.key.length);

      if (slice === t.key) {
        return t;
      }
    });
  };

  while (cursorPosition < content.length) {
    const didMatch = lookahead(cursorPosition);

    if (!didMatch) {
      const bucket: string[] = [];
      let didPush = false;

      for (let i = cursorPosition; i < content.length; i++) {
        const peek = lookahead(i);

        if (!peek) {
          bucket.push(content[i]);
        } else {
          tokens.push({
            value: bucket.join(""),
            type: TokenType.StringContent,
          });

          didPush = true;

          tokens.push({ value: peek.key, type: peek.token });
          cursorPosition += peek.key.length + bucket.length;
          break;
        }
      }

      if (bucket.length > 0 && !didPush) {
        tokens.push({ value: bucket.join(""), type: TokenType.StringContent });
        cursorPosition += bucket.length;
      }
    } else {
      tokens.push({ value: didMatch.key, type: didMatch.token });
      cursorPosition += didMatch.key.length;
    }
  }

  tokens.push({ value: "eof", type: TokenType.EOF });

  return tokens;
};
