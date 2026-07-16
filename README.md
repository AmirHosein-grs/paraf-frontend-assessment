# Paraf Assessment

<div align="center">

# Enterprise Frontend Assessment

A modern, scalable and maintainable frontend application built with **Next.js 15**, **React 19**, **TypeScript**, and **Feature-Based Architecture**.

> Current Development Phase: **Core Architecture & Feature Data Layer Completed**

</div>

---

# Overview

This repository contains my solution for the **Paraf Frontend Technical Assessment**.

The goal of this project is not only to implement the requested UI, but to build an enterprise-grade frontend architecture that follows modern software engineering principles.

The project emphasizes:

- Scalable Architecture
- Feature Isolation
- Type Safety
- Clean Code
- Separation of Concerns
- Performance
- Reusability
- Maintainability
- Testability

---

# Current Status

## Completed

- Project bootstrap
- Feature-Based Architecture
- Shared Layer
- Environment Configuration
- Axios API Client
- Axios Interceptors
- React Query Configuration
- Zustand Authentication Store
- Authentication Flow
- Protected Routes
- Middleware Authentication
- Refresh Token Infrastructure
- Centralized Error Handling
- Typed API Layer
- Dashboard Feature
- Profile Feature
- Customer Club Feature
- Levels Feature
- Activities Feature
- Vitrins Feature

## In Progress

- Dashboard UI
- Design System Components
- Responsive Layout

## Planned

- Testing
- Accessibility
- Performance Optimization
- Production Hardening

---

# Technology Stack

## Framework

- Next.js 15 (App Router)
- React 19
- TypeScript
- pnpm

---

## UI

- Tailwind CSS v4
- shadcn/ui
- Radix UI
- Lucide React

---

## State Management

### Server State

- TanStack Query v5

### Client State

- Zustand

---

## Forms

- React Hook Form
- Zod
- @hookform/resolvers

---

## Networking

- Axios
- Axios Interceptors

---

## Project Architecture

The project follows a strict **Feature-Based Architecture**.

```
src/

app/
features/
shared/
tests/
docs/
```

Every feature owns its own:

```
components/
hooks/
services/
types/
schemas/
store/
index.ts
```

The `shared` layer contains reusable modules used across features.

---

# Current Project Structure

```
src
│
├── app
├── features
│   ├── activities
│   ├── auth
│   ├── customer-club
│   ├── dashboard
│   ├── levels
│   ├── profile
│   └── vitrins
│
├── shared
│   ├── api
│   ├── components
│   ├── config
│   ├── constants
│   ├── hooks
│   ├── providers
│   ├── types
│   └── utils
│
├── tests
└── docs
```

---

# Feature Overview

## Authentication

- Login
- Token Management
- Protected Routes
- Middleware
- Refresh Token Flow

---

## Dashboard

Responsible only for page composition.

Consumes data from:

- Profile
- Customer Club
- Activities
- Levels
- Vitrins

without owning their business logic.

---

## Profile

Responsible for:

- Current User
- Personal Information

---

## Customer Club

Responsible for:

- Monthly Score
- Monthly Coins
- Task Progress

---

## Levels

Responsible for:

- User Levels
- Level Progress
- Current Level

---

## Activities

Responsible for:

- Recent Activities
- Activity Timeline

---

## Vitrins

Responsible for:

- User Vitrins
- Vitrin Details

---

# Data Flow

```
UI

↓

Feature Components

↓

Custom Hooks

↓

React Query

↓

API Services

↓

Axios Client

↓

Backend
```

---

# Authentication Flow

```
Login Form

↓

Validation (Zod)

↓

API Request

↓

Access Token

↓

Zustand Store

↓

Local Storage

↓

Protected Routes

↓

Authenticated Pages
```

---

# API Layer

The networking layer is completely isolated.

```
shared/api

client.ts
interceptors.ts
types.ts
endpoints.ts
```

Each feature communicates only with its own API service.

Example:

```
features/profile/services/profile.api.ts
features/levels/services/levels.api.ts
features/auth/services/auth.api.ts
```

---

# State Management

## React Query

Used for:

- Server Cache
- API Requests
- Background Refetching

---

## Zustand

Used only for:

- Authentication State
- User Session

Business data never lives inside Zustand.

---

# Error Handling

Implemented:

- Axios Response Interceptor
- Centralized Error Handler
- HTTP Error Normalization

---

# Route Protection

Implemented using:

- Next.js Middleware
- Cookie Authentication
- Protected Route Layouts

---

# Testing Strategy

Planned

- Vitest
- React Testing Library
- MSW
- Playwright

---

# Git Strategy

The repository follows **Conventional Commits**.

Examples:

```
feat(auth): implement login flow

feat(profile): add profile service

feat(levels): implement levels feature

refactor(api): centralize axios client

fix(auth): handle unauthorized requests
```

---

# Roadmap

- ✅ Project Bootstrap
- ✅ Feature-Based Architecture
- ✅ Shared Layer
- ✅ API Layer
- ✅ Authentication
- ✅ Route Protection
- ✅ Dashboard Data Layer
- ✅ Customer Club
- ✅ Levels
- ✅ Activities
- ✅ Profile
- ✅ Vitrins
- ⏳ Dashboard UI
- ⏳ Responsive Design
- ⏳ Accessibility
- ⏳ Testing
- ⏳ Performance Optimization
- ⏳ Production Readiness

---

# Repository Philosophy

The objective of this repository is not merely to implement a dashboard, but to demonstrate professional frontend architecture and engineering practices.

The project prioritizes:

- Clean Architecture
- Domain Separation
- Strong Type Safety
- Feature Isolation
- Reusable Components
- Long-Term Maintainability

Every feature is developed independently while remaining fully composable within the overall application.
