---
id: 2
title: AI-Native Textbook Builder Spec
stage: spec
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: textbook-builder
branch: 1-textbook-builder
user: user
command: /sp.specify We are building an AI-native digital textbook called:  “Physical AI & Humanoid Robotics: An AI-Native Engineering Textbook”.Core features: - Doncasaurus frontend (app router) - MDX rendering for all textbook content - Chapter navigation + dynamic table of contents - Glossary auto-generation - Search powered by local embedding index - AI assistant sidebar tuned for robotics - Code examples for ROS2, Gazebo, Isaac Sim - Math support (KaTeX) - Interactive diagrams (MDX components) - Dark mode + typography enhancementsContent Structure:  Part I — Foundations of Physical AI  Part II — Robotics Operating Systems  Part III — Simulation & Digital Twins  Part IV — Perception & Navigation  Part V — Embodied Intelligence & VLA  Part VI — The Autonomous Humanoid  The website must support: - /chapter/[slug] - /glossary - /search - /assistant - /aboutDeliverables: - Complete folder structure - Ready-to-run Doncasaurus codebase - MDX files for every chapter (full content) - Components: CodeBlock, Callout, Equation, Diagram - Layouts for textbook reading experience - Fonts and styling
labels: ["spec", "feature-definition"]
links:
  spec: specs/1-textbook-builder/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-textbook-builder/spec.md
  - specs/1-textbook-builder/checklists/requirements.md
tests:
  - N/A
---

## Prompt

We are building an AI-native digital textbook called:
“Physical AI & Humanoid Robotics: An AI-Native Engineering Textbook”.

Core features:
- Doncasaurus frontend (app router)
- MDX rendering for all textbook content
- Chapter navigation + dynamic table of contents
- Glossary auto-generation
- Search powered by local embedding index
- AI assistant sidebar tuned for robotics
- Code examples for ROS2, Gazebo, Isaac Sim
- Math support (KaTeX)
- Interactive diagrams (MDX components)
- Dark mode + typography enhancements

Content Structure:
Part I — Foundations of Physical AI
Part II — Robotics Operating Systems
Part III — Simulation & Digital Twins
Part IV — Perception & Navigation
Part V — Embodied Intelligence & VLA
Part VI — The Autonomous Humanoid

The website must support:
- /chapter/[slug]
- /glossary
- /search
- /assistant
- /about

Deliverables:
- Complete folder structure
- Ready-to-run Doncasaurus codebase
- MDX files for every chapter (full content)
- Components: CodeBlock, Callout, Equation, Diagram
- Layouts for textbook reading experience
- Fonts and styling

## Response snapshot

Created feature specification for "AI-Native Textbook Builder" and validated it against quality checklist. All checks passed. Ready for planning.

## Outcome

- ✅ Impact: Feature specification created and validated. New branch `1-textbook-builder` created.
- 🧪 Tests: Spec validated against quality checklist, all items passed.
- 📁 Files: `specs/1-textbook-builder/spec.md` and `specs/1-textbook-builder/checklists/requirements.md` created.
- 🔁 Next prompts: Proceed to planning (`/sp.plan`) or clarification (`/sp.clarify`).
- 🧠 Reflection: Successfully parsed user input, generated a detailed spec, and performed self-validation. Manual branch creation and PHR generation were necessary due to environment limitations.

## Evaluation notes (flywheel)

- Failure modes observed: `pwsh` and `.specify/scripts/powershell/create-new-feature.ps1` not found, leading to manual directory and file creation. Bash script for PHR also not found.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Improve environment detection and fallback for script execution, or provide alternative agent-native methods for feature setup.
