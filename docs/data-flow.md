# Data Flow

This document describes how data moves through the application.

---

## Authentication Flow

User

↓

Login Form

↓

React Hook Form

↓

Zod Validation

↓

useLogin()

↓

React Query Mutation

↓

Auth Service

↓

Axios Client

↓

Backend API

↓

Access Token + Refresh Token

↓

Auth Store (Zustand)

↓

Invalidate Current User Query

↓

User Query (/users/me)

↓

User Mapper

↓

User Store / React Query Cache

↓

Navigate to Dashboard

---

## User Profile Flow

Application Load

↓

Auth Guard

↓

React Query

↓

User Service

↓

Axios

↓

Backend

↓

User Response

↓

Mapper

↓

User Model

↓

React Query Cache

↓

UI

---

## Dashboard Flow

Dashboard Page

↓

Parallel Queries

├── User Query
├── Customer Club Summary Query
├── Recent Activities Query
├── Levels Query
└── Vitrins Query

↓

React Query Cache

↓

Compose Dashboard View Model

↓

Dashboard Components

↓

Render UI

---

## Customer Club Flow

Dashboard

↓

Customer Club Widget

↓

React Query

↓

Customer Club Service

↓

Axios

↓

Backend

↓

Mapper

↓

Customer Club Model

↓

Cache

↓

Widget

---

## Vitrins Flow

Dashboard

↓

Vitrins Query

↓

Axios

↓

Backend

↓

Vitrin Mapper

↓

Vitrin Model

↓

Cache

↓

Vitrin Selector

↓

User Selects Vitrin

↓

Selected Vitrin Store (Zustand)

↓

Dependent Queries Refresh

---

## Vitrin Details Flow

Selected Vitrin

↓

Vitrin Details Query

↓

Axios

↓

Backend

↓

Mapper

↓

Vitrin Model

↓

Cache

↓

Details Card

---

## Recent Activities Flow

Filter

↓

Build Query Parameters

↓

React Query

↓

Activities Service

↓

Axios

↓

Backend

↓

Activities Response

↓

Mapper

↓

Activities Model

↓

React Query Cache

↓

Activities List

---

## Levels Flow

Dashboard

↓

Levels Query

↓

Axios

↓

Backend

↓

Level Mapper

↓

Level Model

↓

React Query Cache

↓

Level Components

---

## Error Flow

Request

↓

Axios

↓

Backend Error

↓

Axios Interceptor

↓

Normalize Error

↓

React Query

↓

UI Error State

↓

Error Component

---

## Overall Data Flow

UI

↓

React Hook Form / User Action

↓

Custom Hook

↓

React Query

↓

Service Layer

↓

Axios

↓

Backend

↓

Mapper

↓

Domain Model

↓

Cache / Store

↓

UI

## Data Lifecycle

Request
↓
Validation
↓
API Service
↓
Response
↓
Transformation (Mapper)
↓
Cache
↓
State Synchronization
↓
Presentation
