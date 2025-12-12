---
ID: 004
TITLE: "Investigate MDX Reference Error"
STAGE: general
DATE_ISO: 2025-12-09
SURFACE: agent
MODEL: claude-sonnet-4-5-20250929
FEATURE: none
BRANCH: 1-textbook-builder
USER: user
COMMAND: "/sp.phr --title \"Investigate MDX Reference Error\" --stage general --feature none"
LABELS: ["mdx", "error-fixing"]
LINKS:
  SPEC: null
  TICKET: null
  ADR: null
  PR: null
FILES_YAML:
 - textbook-site/docs/part-i/efficient-intelligence.mdx
TESTS_YAML: null
PROMPT_TEXT: |
  Please fix the "ReferenceError: x is not defined" crash in docs/part-i.

  1. Find the .mdx file in "docs/part-i" that corresponds to "Efficient Intelligence" (likely chapter-2).
  2. Read the file and look for any occurrences of {x}, {y}, {z}, or {t} that are NOT inside a LaTeX math block ($$ or $).
  3. The error is caused specifically by unescaped curly braces like {x}.
  4. Fix it by changing every instance of `{x}` to `\{x\}` or `{'x'}` so MDX treats it as text, not code.
  5. Save the file.
RESPONSE_TEXT: |
  Acknowledged request to fix MDX ReferenceError.
  Verified file path `textbook-site/docs/part-i/efficient-intelligence.mdx`.
  Read file content and performed initial manual inspection for unescaped curly braces in plain text.
OUTCOME: In progress. No immediate problematic patterns found, further clarification or automated search needed.
EVALUATION: null
---