# Tasks: AI-Native Textbook Builder

**Input**: Design documents from `/specs/1-textbook-builder/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: Tests are NOT explicitly requested in the feature specification, so they will not be generated as separate tasks.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `src/`, `docs/`, `static/` at repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure (Docusaurus)

- [ ] T001 Create initial Docusaurus project structure in the repository root
- [ ] T002 Initialize Docusaurus configuration in `docusaurus.config.js`
- [ ] T003 [P] Configure ESLint and Prettier for JavaScript/TypeScript and MDX files
- [ ] T004 Install core Docusaurus dependencies and other necessary packages (e.g., KaTeX)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create base theme structure and custom CSS file in `src/theme/custom.css`
- [ ] T006 Configure Docusaurus for MDX rendering and ensure basic Markdown rendering works
- [ ] T007 Setup Docusaurus routes for `/chapter/[slug]`, `/glossary`, `/search`, `/assistant`, `/about`
- [ ] T008 Implement a global layout component in `src/theme/Layout.jsx`
- [ ] T009 Implement a dedicated chapter page layout in `src/theme/DocPage.jsx`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Read Textbook Content (Priority: P1) 🎯 MVP

**Goal**: Enable users to read textbook chapters with rich, interactive content, including navigation and a dynamic table of contents.

**Independent Test**: Navigate to any chapter page (`/chapter/[slug]`) and verify that content renders correctly, including formatted text, equations, code blocks, and diagrams, and that the TOC updates on scroll.

### Implementation for User Story 1

- [ ] T010 [P] [US1] Create `CodeBlock` MDX component in `src/components/CodeBlock.jsx`
- [ ] T011 [P] [US1] Create `Callout` MDX component in `src/components/Callout.jsx`
- [ ] T012 [P] [US1] Create `Equation` MDX component (using KaTeX) in `src/components/Equation.jsx`
- [ ] T013 [P] [US1] Create `Diagram` MDX component for interactive diagrams in `src/components/Diagram.jsx`
- [ ] T014 [US1] Integrate MDX components into the Docusaurus MDX rendering pipeline
- [ ] T015 [US1] Develop dynamic Table of Contents (TOC) logic in `src/components/TOC.jsx`
- [ ] T016 [US1] Integrate `TOC` component into the `DocPage` layout (`src/theme/DocPage.jsx`) to update on scroll
- [ ] T017 [US1] Configure Docusaurus for chapter navigation (next/previous chapter buttons)
- [ ] T018 [P] [US1] Add initial content for Part I, Chapter 1 (e.g., `docs/part-i/chapter-1.mdx`)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Search for Information (Priority: P1)

**Goal**: Allow users to search the entire textbook content using a local embedding index to quickly find relevant information.

**Independent Test**: Enter a search query on the `/search` page and verify that relevant results are displayed with links to corresponding chapter sections.

### Implementation for User Story 2

- [ ] T019 [P] [US2] Implement local embedding index generation utility in `src/utils/searchIndexBuilder.js`
- [ ] T020 [US2] Create `/search` page component in `src/pages/search.js`
- [ ] T021 [US2] Develop search input and results display within `src/pages/search.js`
- [ ] T022 [US2] Integrate search index builder to process all MDX content during build time
- [ ] T023 [US2] Implement search query logic against the local embedding index

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Utilize AI Assistant (Priority: P2)

**Goal**: Provide an interactive AI assistant sidebar tuned for Physical AI and Humanoid Robotics topics to answer user questions.

**Independent Test**: Navigate to the `/assistant` page or activate the sidebar, ask a question related to Physical AI, and verify that the AI provides an accurate and relevant response.

### Implementation for User Story 3

- [ ] T024 [P] [US3] Create AI Assistant UI component in `src/components/AI Assistant/AssistantSidebar.jsx`
- [ ] T025 [US3] Implement API client for AI model interaction in `src/utils/aiApiClient.js`
- [ ] T026 [US3] Develop state management for AI assistant conversations in `src/components/AI Assistant/AssistantContext.js`
- [ ] T027 [US3] Create `/assistant` page component in `src/pages/assistant.js`
- [ ] T028 [US3] Integrate AI Assistant sidebar globally or as a dedicated page
- [ ] T029 [US3] Implement prompt engineering for AI model to tune for Physical AI & Robotics

**Checkpoint**: All user stories 1, 2, and 3 should now be independently functional

---

## Phase 6: User Story 4 - View Glossary (Priority: P2)

**Goal**: Allow users to access a comprehensive, auto-generated glossary of terms from the textbook.

**Independent Test**: Navigate to the `/glossary` page and verify that an alphabetized list of technical terms with their definitions is displayed.

### Implementation for User Story 4

- [ ] T030 [P] [US4] Implement glossary term extraction utility in `src/utils/glossaryBuilder.js`
- [ ] T031 [US4] Create `/glossary` page component in `src/pages/glossary.js`
- [ ] T032 [US4] Develop UI for displaying alphabetized glossary terms and definitions within `src/pages/glossary.js`
- [ ] T033 [US4] Integrate glossary builder to process MDX content during build time

**Checkpoint**: All user stories 1, 2, 3, and 4 should now be independently functional

---

## Phase 7: User Story 5 - General Information (Priority: P3)

**Goal**: Provide an "About" page for users to understand the textbook's purpose and authors.

**Independent Test**: Navigate to the `/about` page and verify that descriptive information about the textbook and its creators is displayed.

### Implementation for User Story 5

- [ ] T034 [P] [US5] Create `/about` page component in `src/pages/about.js`
- [ ] T035 [US5] Add descriptive content for the About page within `src/pages/about.js`

**Checkpoint**: All core user stories should now be independently functional

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories, and final deployment steps.

- [ ] T036 [P] Implement Dark Mode functionality across the entire application
- [ ] T037 [P] Apply typography enhancements and consistent styling based on design guidelines in `src/theme/custom.css` and other relevant theme files
- [ ] T038 Review and optimize website performance (Lighthouse score target: 85+)
- [ ] T039 Configure Docusaurus for deployment to Vercel
- [ ] T040 Setup Vercel project and continuous deployment pipeline

---

## Content Generation Tasks

**Purpose**: Create the actual textbook content. These tasks can be performed in parallel with or after the core platform development.

- [ ] T041 Generate content for Part I — Foundations of Physical AI (e.g., `docs/part-i/chapter-1.mdx`, `docs/part-i/chapter-2.mdx`, etc.)
- [ ] T042 Generate content for Part II — Robotics Operating Systems
- [ ] T043 Generate content for Part III — Simulation & Digital Twins
- [ ] T044 Generate content for Part IV — Perception & Navigation
- [ ] T045 Generate content for Part V — Embodied Intelligence & VLA
- [ ] T046 Generate content for Part VI — The Autonomous Humanoid

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 8)**: Depends on all desired user stories being complete
- **Content Generation Tasks**: Can run in parallel with User Story phases after Foundational, or after all platform tasks.

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 (e.g., search results link to chapters) but should be independently testable for its core functionality
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 (e.g., assistant can refer to chapter content) but should be independently testable for its core functionality
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 (e.g., glossary terms in chapters) but should be independently testable for its core functionality
- **User Story 5 (P3)**: Can start after Foundational (Phase 2) - No dependencies on other stories

### Within Each User Story

- Components before integration
- Utilities before pages/layouts that use them

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Tasks marked [P] within each user story can run in parallel
- Different user stories can be worked on in parallel by different team members
- Content generation tasks (T041-T046) can be parallelized.

---

## Parallel Example: User Story 1

```bash
# Launch all MDX component creation for User Story 1 together:
Task: "Create CodeBlock MDX component in src/components/CodeBlock.jsx"
Task: "Create Callout MDX component in src/components/Callout.jsx"
Task: "Create Equation MDX component (using KaTeX) in src/components/Equation.jsx"
Task: "Create Diagram MDX component for interactive diagrams in src/components/Diagram.jsx"
Task: "Add initial content for Part I, Chapter 1 (e.g., docs/part-i/chapter-1.mdx)"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Add User Story 5 → Test independently → Deploy/Demo
7. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
   - Developer E: User Story 5
   - Content Team: Content Generation Tasks (T041-T046)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
