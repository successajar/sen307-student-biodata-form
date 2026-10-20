# SEN 305 — Student Biodata Form

**Group 8 · Assignment 1 · HTML, CSS and JavaScript**

## Overview
A simple student biodata form built for the SEN 305 group assignment. It collects sample personal, contact and academic details, applies client-side validation and displays feedback.

**Frontend-only demo:** Information entered into the form is not sent to a server or saved in a database. Use sample details only; do not commit real student information.

## Features
- Personal details: first and last names, date of birth and gender
- Contact details: email, phone number and state of origin
- Academic details: matriculation number, department, faculty, level and related fields
- Required-field checks and email, phone, date and admission-year validation
- Field-level errors and a success message after valid input
- CSS styling with a mobile-responsive stylesheet prepared for integration

## Project structure
```text
sen305-student-biodata-form/
├── index.html
├── css/
│   ├── base.css
│   ├── form.css
│   └── responsive.css
├── js/
│   ├── required.js
│   ├── formats.js
│   └── app.js
├── CONTRIBUTING.md
└── README.md
```

## How to run
1. Download or clone this repository.
2. Open `index.html` in a browser; no backend or package installation is required.
3. Fill the fields with dummy data and select **Submit Biodata**.
4. Verify that invalid or missing fields show errors, while valid data shows a success message.

You can also serve the folder locally using `python3 -m http.server 5500` and open `http://localhost:5500`.

## Group contributions
Individual commits and Pull Requests record the members' work:
- Project scaffold and HTML/JavaScript integration: `successajar`
- Academic information fields: `Regina182`
- Form styling: `1saac-ai`
- Base styling: `Makido001`
- Final styling integration: `successajar`

The remaining HTML and JavaScript integration was completed by the group leader. GitHub Issues describe the original task allocations; a planned assignment does not necessarily indicate an individual submission.

## Integration status
- [x] HTML biodata form
- [x] JavaScript required-field and format validation
- [x] Form submission feedback
- [x] Base CSS and form CSS
- [ ] Merge final responsive CSS changes from Pull Request #16
- [ ] Complete final browser review and submission

See [CONTRIBUTING.md](CONTRIBUTING.md) for the group workflow.
