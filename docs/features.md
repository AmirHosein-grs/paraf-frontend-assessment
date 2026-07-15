# Features

This document describes the business features of the application and their responsibilities.

---

# Authentication

## Goal

Authenticate users and manage the authentication lifecycle.

## Responsibilities

- Login
- Store access token
- Store refresh token
- Fetch current user
- Protect authenticated routes
- Handle logout

## APIs

- POST /users/login
- GET /users/me

## State

- Authentication state
- Access token
- Refresh token

---

# Dashboard

## Goal

Provide an overview of the user's account.

## Responsibilities

- Display user information
- Display current level
- Display customer club summary
- Display recent activities
- Display available vitrins

## APIs

- GET /users/me
- GET /customer-club/summary
- GET /recent-activities
- GET /users/vitrin/all-user
- GET /levels

## State

No local state

Uses React Query only.

---

# Customer Club

## Goal

Display customer club statistics.

## Responsibilities

- Monthly scores
- Monthly coins
- Completed tasks
- Vitrin summary

## APIs

- GET /customer-club/summary
- GET /customer-club/summary-user-vitrin/{id}

## State

Server State

---

# Activities

## Goal

Display recent user activities.

## Responsibilities

- Pagination
- Filtering
- Infinite Scroll
- Empty State
- Loading State

## APIs

- GET /recent-activities

## State

Server State

---

# Levels

## Goal

Display user and vitrin levels.

## Responsibilities

- Current level
- Available levels
- Level icons
- Progress visualization

## APIs

- GET /levels

## State

Server State

---

# Vitrins

## Goal

Manage user vitrins.

## Responsibilities

- List vitrins
- View vitrin details
- Switch active vitrin

## APIs

- GET /users/vitrin/all-user
- GET /users/vitrin/{id}

## State

- Selected Vitrin (Zustand)
- Vitrin Details (React Query)
