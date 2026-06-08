# EVAISYS Testing Lab

## Introduction

EVAISYS Testing Lab is a specialized platform designed for the practical study and demonstration of modern software testing approaches.

The project provides a controlled testing environment that includes a web application, a REST API, and a comprehensive suite of automated tests. Its primary purpose is to serve as a realistic test object for demonstrating engineering testing practices, automation techniques, and defect analysis workflows.

Unlike typical demo applications, EVAISYS Testing Lab was created primarily as a test target rather than a business product. The main value of the project lies in its testing infrastructure, automation capabilities, reproducible scenarios, and the ability to introduce controlled defects for educational and demonstration purposes.

---
📘 **Public Documentation Portal**

The complete QA documentation package is available here:

https://evaisys-testing-lab.vercel.app/documentation

# Project Vision

The project is intended to serve as the foundation for a comprehensive testing and automation platform.

It can be used to demonstrate:

* Functional Testing
* UI Automation
* API Automation
* Smoke Testing
* Regression Testing
* Responsive Testing
* Validation Testing
* Defect Analysis
* Test Design Techniques
* AI-Assisted Testing Workflows

---

# EVAISYS Ecosystem

Testing Lab is part of the broader EVAISYS ecosystem.

The platform is designed to work alongside the EVAISYS AI Assistant, an intelligent assistant for software testers and test automation engineers.

In the future, the AI Assistant may support:

* Requirements analysis
* Test case generation
* Checklist creation
* Test strategy preparation
* Defect analysis
* Test documentation generation
* Test execution analysis

In this ecosystem, Testing Lab acts as the practical testing environment, while the EVAISYS AI Assistant serves as an engineering support tool for testing processes.

---

# Architecture

## Frontend

* Next.js
* React
* TypeScript
* Material UI

## Backend

* FastAPI
* Python
* REST API

## Test Automation

* Playwright
* TypeScript

---

# Functional Areas

## Authentication

* Login
* Logout
* Session Handling
* Protected Routes

## Tasks

* Create Tasks
* Edit Tasks
* Complete Tasks
* Reopen Tasks
* Delete Tasks
* Filtering

## Requests

* Workflow Management
* Status Updates
* Priority Handling

## Articles

* Search
* Filtering
* Details View

## Contacts & Feedback

* Contact Directory
* Feedback Submission
* Input Validation

---

# Test Coverage

The project includes several layers of automated testing.

## UI Tests

User-facing scenarios:

* Authentication
* Navigation
* Tasks
* Requests
* Articles
* Contacts
* Responsive UI

## API Tests

REST API verification:

* Health API
* Authentication API
* Tasks API
* Requests API
* Articles API
* Contact API

## Smoke Tests

Critical end-to-end user workflows.

## Responsive Tests

Verification of application behavior on mobile viewports.

---

# Testing Lab Workspace

The application contains a dedicated Testing Lab section.

This workspace provides:

* Test coverage overview
* Test suite catalog
* Test execution from the user interface
* Playwright Report integration
* Test result visualization

---

# Intentional Defect Branches

To demonstrate the effectiveness of automated testing, the repository contains dedicated branches with controlled defects.

## main

Stable project version.

Expected result:

```text
50 passed
0 failed
```

## intentional-ui-defects

Contains intentionally introduced UI defects.

Used to demonstrate:

* UI automation
* Regression testing
* Defect detection

## intentional-api-defects

Contains intentionally introduced API defects.

Used to demonstrate:

* API automation
* Contract validation
* Backend testing

---

# Repository Structure

```text
apps/
├── frontend/
├── backend/

playwright-tests/
├── tests/
├── helpers/
├── playwright-report/

docs/
```

---

# Requirements

Before running the project, install:

* Node.js
* npm
* Python 3.11+
* Git

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd evaisys-testing-lab
```

---

## Frontend Setup

```bash
cd apps/frontend

npm install
```

---

## Backend Setup

```bash
cd apps/backend

python -m venv .venv

.venv\Scripts\activate

pip install -r requirements.txt
```

---

## Playwright Setup

```bash
cd playwright-tests

npm install

npx playwright install
```

---

# Running the Application

## Start Backend

```bash
cd apps/backend

uvicorn app.main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

---

## Start Frontend

```bash
cd apps/frontend

npm run dev
```

Frontend URL:

```text
http://127.0.0.1:3000
```

---

# Running Tests

## Run All Tests

```bash
cd playwright-tests

npx playwright test
```

---

## Run UI Tests

```bash
npx playwright test tests/auth
```

---

## Run API Tests

```bash
npx playwright test tests/api
```

---

## Run a Specific Test File

```bash
npx playwright test tests/tasks/tasks-crud.spec.ts
```

---

# Test Reports

## Open Playwright Report

```bash
npx playwright show-report
```

The report can also be opened directly from the Testing Lab section inside the application.

---

# Future Development

The current version represents the first phase of the platform.

Possible future directions include:

## Test Infrastructure

* CI/CD Integration
* Test Analytics
* Coverage Visualization
* Centralized Reporting

## Advanced Testing

* Accessibility Testing
* Performance Testing
* Security Testing
* Visual Regression Testing
* Contract Testing

## AI-Assisted Testing

* AI-Generated Test Cases
* AI-Generated Documentation
* AI-Based Defect Analysis
* AI-Assisted Test Strategy Creation
* AI-Powered Coverage Recommendations

---

# Educational and Portfolio Purpose

The project is used as a practical platform for demonstrating the complete engineering testing lifecycle:

* Requirements Analysis
* Test Design
* Test Automation
* Defect Investigation
* Result Analysis
* Test Infrastructure Development
* AI Integration into Testing Workflows

The current release represents the first phase of EVAISYS Testing Lab and establishes the foundation for future expansion with additional modules, testing scenarios, automation capabilities, and AI-powered testing tools.
