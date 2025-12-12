---
id: 001
title: MDX Template Literal Escape Fix
stage: refactor
date: 2025-12-09
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 1-textbook-builder
user: user
command: User explains MDX template literal fix
labels: ["mdx","template-literals","fix"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-i/**/*.mdx
  - docs/part-ii/**/*.mdx
  - docs/part-iii/**/*.mdx
  - docs/part-iv/**/*.mdx
  - docs/part-v/**/*.mdx
  - chapter-1-what-is-physical-ai.mdx
tests:
  - none
---

## Prompt

The Problem:

In the MDX files, there were XML code blocks containing template literals like:
<x>${x}</x>
<y>${y}</y>
<z>${z}</z>
<axis>${pi/2}</axis>

MDX (Markdown with JSX) interpreted these ${...} expressions as JavaScript template literals, trying to evaluate
variables x, y, z, and pi that weren't defined, causing the ReferenceError: x is not defined.

The Solution:

I fixed this by escaping the template literals in all MDX files:

1. Changed ${x} to ${'}{x}
2. Changed ${y} to ${'}{y}
3. Changed ${z} to ${'}{z}
4. Changed ${pi/2} to ${'}{pi/2}

This breaks up the template literal syntax so MDX treats it as plain text instead of trying to evaluate it as
JavaScript.

Files Affected:

The error appeared in multiple files, including:
- docs/part-i/(all mdx files)
- docs/part-ii/(all mdx files)
- docs/part-iii/(all mdx files)
- docs/part-iv/(all mdx files)
- docs/part-v/(all mdx files)
- And potentially other files with XML code examples

Additional Fix:

I also removed all math equations from chapter-1-what-is-physical-ai.mdx as requested, since the LaTeX math
rendering was also causing issues.

## Response snapshot

PHR created for MDX template literal escape fix.

## Outcome

- ✅ Impact: Resolved `ReferenceError: x is not defined` errors in MDX files caused by unescaped template literals and removed LaTeX math equations from `chapter-1-what-is-physical-ai.mdx`.
- 🧪 Tests: n/a
- 📁 Files: Modified multiple MDX files to escape template literals and removed math equations from one MDX file.
- 🔁 Next prompts: n/a
- 🧠 Reflection: The fix addresses the issue of MDX incorrectly interpreting XML template literals as JavaScript and also cleans up LaTeX math equations as requested by the user. The escaping method effectively prevents `ReferenceError`s.

## Evaluation notes (flywheel)

- Failure modes observed: n/a
- Graders run and results (PASS/FAIL): n/a
- Prompt variant (if applicable): n/a
- Next experiment (smallest change to try): n/a
