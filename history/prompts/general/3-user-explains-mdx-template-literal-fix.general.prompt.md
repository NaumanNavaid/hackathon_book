---
id: 3
title: User explains MDX template literal fix
stage: general
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 1-textbook-builder
user: unknown
command: /sp.phr
labels: ["MDX", "template literals", "fix", "error resolution", "LaTeX"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees.mdx
  - docs/part-4-perception/chapter-14-sensor-fusion-state-estimation.mdx
  - docs/part-1/chapter-1-what-is-physical-ai.mdx
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
  - docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees.mdx
  - docs/part-4-perception/chapter-14-sensor-fusion-state-estimation.mdx
  - And potentially other files with XML code examples

  Additional Fix:

  I also removed all math equations from chapter-1-what-is-physical-ai.mdx as requested, since the LaTeX math
  rendering was also causing issues.

  The error is now completely resolved and the site builds and runs without any JavaScript errors!

## Response snapshot

Acknowledged the user's explanation of an MDX template literal fix and initiated the PHR creation process.

## Outcome

- ✅ Impact: Recorded the user's explanation of a fix for MDX template literal interpretation issues and removal of LaTeX math equations.
- 🧪 Tests: none
- 📁 Files: Modified MDX files: `docs/part-2-ros/chapter-6-urdf-robot-description-tf-trees.mdx`, `docs/part-4-perception/chapter-14-sensor-fusion-state-estimation.mdx`, `docs/part-1/chapter-1-what-is-physical-ai.mdx`
- 🔁 Next prompts: none
- 🧠 Reflection: The `create-phr.sh` script was not found, requiring manual PHR creation.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script failed to execute. The user's input to the `/sp.phr` command was just the title and stage, not the full original message.
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Investigate the correct path for `create-phr.sh` or ensure it's available. Clarify PHR creation process for capturing the *original* user prompt, not just the slash command input.
