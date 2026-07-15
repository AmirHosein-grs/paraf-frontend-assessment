# Paraf Assessment

<div align="center">

# Enterprise Frontend Assessment

Modern, scalable and maintainable frontend application built with **Next.js**, **TypeScript**, and **Feature-Based Architecture**.

> **Current Development Phase:** Phase 1 — Business Analysis & System Architecture

</div>

---

## Overview

This repository contains my solution for the **Paraf Frontend Technical Assessment**.

The goal of this project is not only to implement the requested user interface, but also to design an enterprise-grade frontend architecture that emphasizes:

- Scalability
- Maintainability
- Type Safety
- Accessibility
- Performance
- Clean Architecture
- Reusability
- Testability

Instead of focusing only on delivering features, this project follows a structured software engineering process similar to production-grade applications.

---

# Project Goals

- Build a scalable frontend architecture.
- Apply Feature-Based Architecture.
- Follow modern React and Next.js best practices.
- Keep business logic isolated from UI.
- Ensure full TypeScript type safety.
- Build reusable UI components.
- Maintain clean Git history.
- Document architectural decisions throughout development.

---

# Current Project Status

This repository is being developed incrementally.

Current progress:

| Phase | Status |
|--------|--------|
| Project Analysis | ✅ Completed |
| Requirements Analysis | ✅ Completed |
| Feature Identification | ✅ Completed |
| Data Flow Design | 🔄 In Progress |
| Project Bootstrap | ⏳ Planned |
| Authentication | ⏳ Planned |
| Dashboard | ⏳ Planned |
| Customer Club | ⏳ Planned |
| Activities | ⏳ Planned |
| Testing | ⏳ Planned |

The project intentionally evolves step by step. Every architectural decision is documented before implementation begins.

---

# Planned Technology Stack

## Core

- Next.js (App Router)
- React
- TypeScript
- pnpm

## Styling

- Tailwind CSS v4
- shadcn/ui
- Radix UI
- lucide-react

## State Management

### Server State

- TanStack React Query

### Client State

- Zustand

---

## Forms

- React Hook Form
- Zod
- Hook Form Resolvers

---

## Networking

- Axios (Client-side)
- Fetch API (Server Components)

---

## Testing Strategy

Planned:

- Vitest
- React Testing Library
- MSW
- Playwright

Testing will follow a **Co-located Testing Strategy**, where test files live next to the implementation they validate.

---

# Planned Architecture

The application follows **Feature-Based Architecture**.

```
src/

app/
features/
shared/
providers/
lib/
config/
constants/
types/
tests/
docs/
```

Each feature owns its own:

- components
- hooks
- services
- schemas
- store
- types
- tests

Shared functionality will live under the `shared` directory.

---

# High-Level Architecture

```
                 UI

                 │

                 ▼

        Feature Components

                 │

                 ▼

           Custom Hooks

                 │

                 ▼

          React Query

                 │

                 ▼

             Axios API

                 │

                 ▼

              Backend
```

---

# Planned Data Flow

Authentication Flow

```
User

↓

Login Form

↓

Validation

↓

API Request

↓

Access Token

↓

Fetch User

↓

Dashboard
```

Dashboard Flow

```
Dashboard

↓

User Query

↓

Customer Club Query

↓

Recent Activities Query

↓

Render UI
```

---

# Features

The project is divided into independent business domains.

- Authentication
- User
- Customer Club
- Levels
- Activities
- Vitrins
- Dashboard

Each feature is isolated and communicates through shared abstractions.

---

# Documentation

Project documentation is located inside the `docs/` directory.

Current documentation:

```
docs/

project.md

architecture.md

features.md

data-flow.md
```

Additional documentation will be added as development progresses.

---

# Development Workflow

Development follows an incremental workflow.

```
Analyze

↓

Design

↓

Document

↓

Implement

↓

Test

↓

Review

↓

Refactor
```

Implementation only starts after architectural decisions are documented.

---

# Git Strategy

Every meaningful change is committed separately using Conventional Commits.

Examples:

```
docs: add project overview

docs: define feature map

chore: initialize nextjs project

build: configure eslint

feat(auth): implement login page

fix(auth): handle invalid credentials

refactor(api): extract axios client
```

---

# Roadmap

- [x] Business Analysis
- [x] Requirements Analysis
- [x] Feature Identification
- [ ] Data Flow Design
- [ ] Architecture Documentation
- [ ] Bootstrap Project
- [ ] Configure Tooling
- [ ] Configure Design System
- [ ] Configure API Layer
- [ ] Authentication
- [ ] Dashboard
- [ ] Customer Club
- [ ] Activities
- [ ] Responsive Design
- [ ] Accessibility
- [ ] Testing
- [ ] Performance Optimization
- [ ] Production Readiness

---

# Repository Philosophy

This repository is intended to demonstrate not only implementation skills, but also architectural thinking and software engineering practices.

Every decision—from project structure to API design—is documented before implementation to ensure long-term maintainability and scalability.
