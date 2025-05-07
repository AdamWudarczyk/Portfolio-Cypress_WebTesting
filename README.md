# Cypress Web Testing – OrangeHRM (Portfolio Project)

This project contains automated end-to-end tests for the OrangeHRM demo application using [Cypress](https://www.cypress.io/). It demonstrates real-world UI testing with **Page Object Model (POM)**, fixtures, custom commands, and validation/error-handling scenarios.

>  Tested app: https://opensource-demo.orangehrmlive.com/

---

## Project Structure

cypress/\
│\
├── e2e/\
│ ├── login.cy.js # Login functionality tests \
│ └── recruitment.cy.js # Recruitment tab tests\
│\
├── fixtures/\
│ ├── users.json # Test data: valid and invalid user credentials\
│\
├── pages/\
│ ├── loginPage.js # Login Page Object Model\
│ └── recruitmentPage.js # Recruitment Page Object Model\
│\
├── reports/\
│ └── index.html, assets/ # Test reports (Mochawesome)\
│\
└── support/\
├── commands.js # Custom Cypress commands

└── e2e.js 



## Features

- Page Object Model (POM)  
- Data-driven testing using `cy.fixture()`  
- Full login test coverage  
- Recruitment tab: filtering, adding, deleting, validation  
- Edge case handling (empty fields, special characters, invalid credentials)
- Mochawesome test reporting
---

## Installation

> git clone https://github.com/AdamWudarczyk/Portfolio-Cypress_WebTesting.git \
cd portfolio-cypress_webtesting \
npm install

## Run Tests

Cypress GUI:
> npm run cypress:open

Headless mode + report:
> npm run test:report

Then open:
> cypress/reports/index.html

## Test Reports

This project uses Mochawesome for detailed HTML reports. Reports are automatically generated after tests and stored in:
>cypress/reports/


## Key Concepts Demonstrated

- Cypress commands: .get(), .contains(), .should(), .each()

- Assertions with Chai (expect/should)

- Data-driven testing with cy.fixture()

- DOM traversal and dynamic element interaction

- POM for maintainability and reusability

- Filtering table data and validating UI updates

- Form validation tests (required fields, incorrect inputs)

## Tech Stack
- Cypress v14+

- JavaScript (ES6+)

- Mochawesome for reporting

## Covered scenarios:

#### Login
- ✅ Valid login
- ✅ Invalid login
- ✅ Empty fields
- ✅ Password masking
- ✅ All form elements visible

#### Recruitment
- ✅ Filtering by job title, name, keywords, date
- ✅ Add and delete candidate
- ✅ View candidate details
- ✅ Reset search form
- ✅ Form validation errors
- ✅ Special character input


---
Made by Adam Wudarczyk

This project is for educational and portfolio purposes.

