# EVAISYS Testing Lab — Intentional Defects Strategy

## Purpose

EVAISYS Testing Lab is not intended to be a production application.

The project is a controlled testing environment designed to demonstrate testing techniques, automation approaches, defect detection, root cause analysis, and AI-assisted quality engineering workflows.

To support these goals, the project intentionally contains a limited number of controlled defects.

These defects are not implementation mistakes. They are deliberately introduced scenarios that provide realistic targets for:

* manual testing;
* exploratory testing;
* Playwright automation;
* API testing;
* regression testing;
* AI-assisted defect analysis;
* quality engineering demonstrations.

---

# Defect Categories

Intentional defects are divided into two categories.

## Category A — Application Defects

Application defects are implemented directly inside the frontend or backend.

They simulate realistic software problems that can be discovered through testing.

Examples:

* validation defects;
* state synchronization defects;
* filtering defects;
* search defects;
* workflow inconsistencies;
* API validation issues;
* contract mismatches.

These defects should remain in the project until they are intentionally removed as part of a specific testing exercise.

---

## Category B — Test Architecture Improvement Opportunities

These are not defects in the application itself.

Instead, they are intentionally imperfect testing implementations designed to allow EVAISYS AI and human reviewers to identify improvement opportunities.

Examples:

* duplicated test logic;
* missing fixtures;
* weak assertions;
* poor test organization;
* inefficient selectors;
* excessive test coupling;
* missing abstractions.

The goal is to demonstrate AI-assisted review capabilities rather than defect detection.

---

# Rules for Contributors

When working on EVAISYS Testing Lab:

1. Do not automatically fix intentional defects.
2. Do not remove intentional defects during audits or repository cleanup.
3. Do not classify intentional defects as project quality issues.
4. If a defect is listed in the intentional defect catalog, it must be reported as intentional.
5. Intentional defects may only be modified or removed when explicitly requested.

---

# Current Application Defects

## INT-001 — Tasks Title Boundary Validation

Module:
Tasks

Type:
Boundary validation

Expected:
Task title rejects values longer than 100 characters.

Actual:
Task title accepts 101 characters.

Testing goals:

* boundary value analysis;
* validation testing.

---

## INT-002 — Tasks Priority Edit Persistence

Module:
Tasks

Type:
CRUD consistency

Expected:
Editing a task updates title, description, and priority.

Actual:
Priority changes are not persisted.

Testing goals:

* CRUD verification;
* state consistency testing.

---

## INT-003 — Requests Details Modal State

Module:
Requests

Type:
Workflow consistency

Expected:
Request details dialog displays the current request status.

Actual:
Dialog may display an outdated status after status changes.

Testing goals:

* workflow testing;
* modal validation;
* state synchronization checks.

---

## INT-004 — Requests Combined Filtering

Module:
Requests

Type:
Filtering logic

Expected:
Status and priority filters operate correctly together.

Actual:
One filter combination returns incorrect results.

Testing goals:

* filter testing;
* data consistency testing.

---

## INT-005 — Articles Search Coverage

Module:
Articles

Type:
Search behavior

Expected:
Search operates on title and summary.

Actual:
Search operates only on title.

Testing goals:

* search verification;
* content discovery testing.

---

## INT-006 — Feedback Form State Reset

Module:
Contacts & Feedback

Type:
Form workflow

Expected:
Success state is cleared after a subsequent invalid submission.

Actual:
Success message may remain visible.

Testing goals:

* form
