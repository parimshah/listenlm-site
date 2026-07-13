export type TranscriptSide = {
  transcriptText: string;
  audioSrc?: string;
};

export type TranscriptExample = {
  id: string;
  label: string;
  contextNote: string;
  before: TranscriptSide;
  after: TranscriptSide;
};

export const transcriptExamples: TranscriptExample[] = [
  {
    id: "code-block",
    label: "Code block",
    contextNote: "A short function inside an AI response.",
    before: {
      transcriptText:
        "Backtick backtick backtick python, def total open paren cart close paren colon, return sum open paren cart close paren, backtick backtick backtick.",
    },
    after: {
      transcriptText:
        "Python code block. def total(cart): return sum(cart). End of code block.",
    },
  },
  {
    id: "heading",
    label: "Heading",
    contextNote: "A section heading inside a longer answer.",
    before: {
      transcriptText: "Hash hash Setup.",
    },
    after: {
      transcriptText: "Heading, level 2: Setup.",
    },
  },
  {
    id: "link",
    label: "Link",
    contextNote: "A link the assistant included in its response.",
    before: {
      transcriptText:
        "Bracket the docs bracket, open paren h t t p s colon slash slash example dot com slash docs close paren.",
    },
    after: {
      transcriptText: "Link: the docs.",
    },
  },
  {
    id: "table",
    label: "Table",
    contextNote: "A comparison table the assistant generated.",
    before: {
      transcriptText:
        "Pipe Plan pipe Price pipe, dash dash dash pipe dash dash dash, pipe Pro pipe twenty dollars pipe.",
    },
    after: {
      transcriptText:
        "Table, 1 row, 2 columns. Column 1: Plan. Column 2: Price. Row 1: Pro, twenty dollars.",
    },
  },
];
