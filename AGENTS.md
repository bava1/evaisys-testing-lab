# EVAISYS Testing Lab — AGENTS.md

## Project Overview

EVAISYS Testing Lab is an engineering-oriented automated testing laboratory designed to demonstrate practical frontend/backend testing workflows, Playwright automation, and AI-assisted testing workflows.

The project combines:

* frontend application;
* backend API;
* Playwright automation;
* technical documentation;
* AI-assisted testing workflow using EVAISYS.

This project is intentionally built as a controlled testing environment rather than a production SaaS application.

The goal is to demonstrate practical engineering and automation skills through a realistic but intentionally simplified web application.

---

# Main Philosophy

The project focuses on:

* automation engineering;
* technical testing;
* Playwright automation;
* frontend/backend interaction;
* API testing;
* end-to-end testing;
* AI-assisted engineering workflow.

The project does NOT focus on:

* enterprise QA management;
* business process management;
* overengineered architecture;
* microservices;
* production-scale infrastructure.

Keep the project intentionally simple, understandable, and predictable.

---

# Architecture Principles

## Local-First, Deploy-Ready

The primary workflow is local development:

* local frontend;
* local backend;
* local Playwright execution.

However, the architecture should remain ready for future deployment.

Avoid localhost-only assumptions.

Use environment variables and separated configuration whenever reasonable.

---

## Controlled Complexity

Avoid overengineering.

This project intentionally avoids:

* microservices;
* distributed systems;
* Kubernetes;
* Docker orchestration (early stages);
* complex authentication;
* database-heavy architecture;
* unnecessary abstractions.

Always prefer the simplest solution that supports the testing workflow.

---

## Controlled Target Application

The frontend/backend application exists primarily as an object under test.

The application should include realistic but lightweight functionality:

* forms;
* navigation;
* CRUD flows;
* authentication demo;
* filtering/search;
* validation;
* loading states;
* error states;
* frontend/backend interaction.

The application is intentionally designed to support automation and testing demonstrations.

---

# Development Workflow

Development must happen in small, clean, incremental steps.

Each phase should:

* remain runnable;
* remain understandable;
* have a clear scope;
* avoid breaking previous functionality.

Avoid massive rewrites.

Avoid adding multiple unrelated systems in one step.

---

# Commit Philosophy

Git history is part of the public engineering presentation of the project.

Commits should be:

* small;
* logical;
* readable;
* incremental;
* professionally named.

Prefer atomic commits with clear purpose.

Examples:

* feat(backend): add FastAPI service foundation
* feat(frontend): add target app foundation
* test: add smoke navigation checks
* chore: add local development workflow

Avoid giant mixed commits.

---

# Backend Principles

Backend is a controlled testing backend.

The backend should remain:

* lightweight;
* predictable;
* easy to run locally;
* easy to test;
* easy to understand.

Backend exists to support:

* API testing;
* integration testing;
* E2E testing;
* frontend interaction;
* automation workflows.

At early stages:

* use in-memory/mock data;
* avoid real authentication;
* avoid external services;
* avoid persistent infrastructure.

---

# Frontend Principles

Frontend is a controlled target application.

The frontend should demonstrate:

* realistic UI workflows;
* forms;
* validation;
* CRUD operations;
* responsive behavior;
* navigation;
* UI states.

The frontend should be structured for easy Playwright automation.

Prefer predictable UI and stable selectors.

---

# Playwright Principles

Playwright is the primary automation framework.

Tests should demonstrate:

* smoke testing;
* sanity testing;
* UI testing;
* API testing;
* E2E testing;
* responsive testing;
* accessibility checks;
* negative scenarios.

Tests should be:

* readable;
* maintainable;
* structured;
* reusable;
* stable.

Avoid flaky automation patterns.

---

# EVAISYS Role

EVAISYS acts as an AI-assisted testing and automation assistant.

It may help with:

* application analysis;
* test scenario generation;
* test case drafting;
* automation planning;
* workflow documentation;
* Playwright scenario suggestions;
* testing structure analysis.

Final engineering decisions must always remain under human control.

---

# Future Scope

Possible future enhancements:

* online deployment;
* public demo environment;
* dashboard;
* workflow visualization;
* reporting UI;
* CI integration;
* advanced testing workflows.

These features are intentionally postponed until the core project foundation is stable.

---

# Important Rule

Always optimize for:

* clarity;
* simplicity;
* predictability;
* maintainability;
* testing workflow quality.

Do not optimize for enterprise complexity.
