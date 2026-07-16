# Enterprise Client Portal - SDLC & Agile Workflow

## Project Overview
This project outlines the software development lifecycle (SDLC) for a Large-Scale Enterprise Client Portal, utilizing Agile methodology to manage development through incremental sprints.

## Agile Epic
**Epic:** Implement a Unified Enterprise Dashboard to provide clients with centralized access to their metrics, documents, and support channels.

## User Stories
1. **As a** Client, **I want to** log in using Single Sign-On (SSO) **so that** I can securely access my portal without remembering multiple passwords.
2. **As a** Client, **I want to** view a summary dashboard of my monthly KPIs **so that** I can track my performance at a glance.
3. **As a** Client, **I want to** upload and download project-related documents **so that** I can easily share assets with the support team.
4. **As a** Client, **I want to** submit a support ticket directly from the dashboard **so that** I can quickly report issues.
5. **As a** Client, **I want to** export my portal data as a PDF/CSV **so that** I can use it for internal presentations.

## Critical User Story: Dashboard View
**Acceptance Criteria:**
- **Given** the user is authenticated, **when** they land on the homepage, **then** they should see the Dashboard widget.
- **Given** the dashboard is loaded, **when** the user hovers over a data point, **then** the exact numerical value must be displayed in a tooltip.
- **Given** the dashboard is empty, **when** there is no data for the month, **then** a "No data available" placeholder should be shown.
- **Given** the view setting, **when** the user clicks "Refresh," **then** the dashboard must fetch the latest data from the API within 2 seconds.

## CI/CD Workflow
*See diagram.png for the visual flow.*
The CI/CD pipeline follows this automated path:
1. **Source Code:** Developers push code to GitHub.
2. **Build:** Jenkins/GitHub Actions compiles the code.
3. **Test:** Automated Unit & Integration tests are executed.
4. **Deploy:** Code is pushed to the Staging environment for QA.
5. **Release:** Upon QA approval, the code is deployed to Production.
