# Architecture

## Purpose

This document describes the architectural decisions, development principles, and project structure used throughout the Paraf Frontend Assessment.

The primary objective is to build a scalable, maintainable, testable, and type-safe application that can grow without introducing tight coupling between business domains.

---

# Architecture Style

The application follows a **Feature-Based Architecture**.

Instead of organizing the project by technical layers (components, hooks, services, etc.), every business domain owns its implementation.

Each feature is responsible for its own:

- Components
- Hooks
- API services
- State
- Schemas
- Types
- Tests

This approach improves:

- Scalability
- Maintainability
- Separation of Concerns
- Testability
- Team Collaboration

---

# Core Principles

## Everything is a Feature

Every business capability is implemented as an independent feature.

Current features:

- Authentication
- Dashboard
- Customer Club
- Activities
- Levels
- Vitrins

A feature owns its business logic completely.

---

## Feature Independence

Features must never depend directly on each other.

Correct

Authentication

↓

Shared

↓

Dashboard

Incorrect

Dashboard

↓

Authentication

↓

Customer Club

A feature may communicate only through shared abstractions.

---

# Dependency Rules

The dependency direction is always:

Application

↓

Feature

↓

Shared

↓

Infrastructure

Never the opposite.

No circular dependency is allowed.

---

# Folder Structure

```text
src/

app/
features/
shared/
providers/
config/
constants/
types/
tests/
docs/
```

The project follows a strict separation between business features and shared infrastructure.

---

# Feature Structure

Every feature follows the exact same internal structure.

```text
feature/

components/

hooks/

services/

schemas/

store/

types/

index.ts
```

Every feature remains isolated from the others.

---

# Feature Rules

## Rule 1

Features should never import from another feature.

✅

Authentication

↓

Shared

↓

Dashboard

❌

Dashboard

↓

Authentication

---

## Rule 2

Reusable code belongs inside the Shared layer.

Examples

- UI Components
- Utility Functions
- API Client
- Constants
- Helpers

---

## Rule 3

Every API call must live inside the services folder.

Example

```
features/auth/services/auth.api.ts
```

---

## Rule 4

Every feature manages its own client state.

State must live inside:

```
store/
```

Global state should be kept to the minimum.

---

## Rule 5

Validation schemas belong only inside:

```
schemas/
```

Business validation must never be duplicated.

---

## Rule 6

Reusable feature logic belongs inside:

```
hooks/
```

Components should stay as presentational as possible.

---

# State Management Strategy

The application separates client state from server state.

## Client State

Managed by Zustand.

Examples

- Authentication
- Selected Vitrin
- UI Preferences
- Modal State

---

## Server State

Managed by TanStack Query.

Examples

- User
- Levels
- Activities
- Customer Club
- Vitrins

Server state should never be duplicated inside Zustand.

---

# API Layer

The project separates networking from UI.

```
Component

↓

Hook

↓

React Query

↓

Service

↓

Axios

↓

Backend
```

Components never communicate with Axios directly.

---

# Authentication Flow

```
Login Form

↓

Validation

↓

Authentication Service

↓

Access Token

↓

Persist Token

↓

Fetch Current User

↓

Navigate Dashboard
```

Authentication state is managed through Zustand.

User information is fetched through React Query.

---

# Error Handling

Errors are handled on multiple levels.

Application Level

- Global Error Boundary

Feature Level

- Feature-specific fallback UI

Network Level

- Axios interceptors

Validation Level

- Zod

Every layer has a single responsibility.

---

# Type Safety Strategy

The project distinguishes between:

- API Models
- Domain Models
- UI Models

Backend responses should never be consumed directly by the UI.

Data transformation is performed before reaching presentation components.

---

# Testing Strategy

The project follows a Co-located Testing Strategy.

```
LoginForm.tsx

LoginForm.test.tsx
```

Benefits

- Easier Refactoring
- Better Discoverability
- Better Feature Ownership

Planned tools

- Vitest
- React Testing Library
- MSW
- Playwright

---

# Naming Convention

Files

```
login-form.tsx
auth.api.ts
use-login.ts
auth.store.ts
login.schema.ts
```

Components

PascalCase

```
LoginForm
DashboardCard
```

Hooks

```
useLogin
useActivities
```

Stores

```
useAuthStore
useDashboardStore
```

Schemas

```
loginSchema
activityFilterSchema
```

Services

```
authApi
userApi
```

---

# Feature Map

```
Authentication

↓

Dashboard

↓

Customer Club

↓

Activities

↓

Levels

↓

Vitrins
```

The Feature Map represents the application's primary business capabilities and serves as the foundation for the project structure.

---

# Architectural Goals

- High Cohesion
- Low Coupling
- Feature Isolation
- Reusability
- Predictable Data Flow
- Type Safety
- Testability
- Scalability
- Maintainability
- Clean Code
- Accessibility
- Performance
