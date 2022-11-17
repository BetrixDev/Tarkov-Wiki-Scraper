export type NodeType =
  | "Page"
  | "LargeHeading"
  | "MediumHeading"
  | "CurlyLink"
  | "SquareLink"
  | "LineBreak"
  | "Table"
  | "StringContent";

export interface Stmt {
  kind: NodeType;
}

export interface StmtWithBody extends Stmt {
  body: Stmt[];
}

export interface StmtWithValue extends Stmt {
  value: string;
}

export interface SquareLinkStmt extends Stmt {
  /** Actual displayed text for the link */
  display: string;
  /** Wiki page title to link to (includes headings ("#")) */
  title: string;
}

export type StatementType =
  | Stmt
  | StmtWithBody
  | StmtWithValue
  | SquareLinkStmt;

export interface Page extends Stmt {
  kind: "Page";
  body: StatementType[];
}
