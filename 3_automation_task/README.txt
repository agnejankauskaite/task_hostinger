## Automation task

### Prerequisites
This test suite is written with Playwright (TypeScript). In order to run it, you'll need Playwright installed:
```
npx playwright installed
```

### Running tests
Different browsers are set up for this suite (Firefox, Chrome and Safari) in `playwright.config.ts` file. Additional scripts for chosen browsers are added in package.json. Use any of the following script to run this test suite:

| Action                                           | Script                     |
| ------------------------------------------------ | -------------------------- |
| Run all tests in headless mode with all browsers | `npx playwright test`      |
| Run tests in chrome headless mode                | `npm run chrome`           |
| Run tests in firefox headless mode               | `npm run firefox`          |
| Run tests in safari headless mode                | `npm run webkit`           |
| Run tests in UI mode                             | `npx playwright test --ui` |

### Reports
The HTML report will open up in your default browser after a test run. It shows all scenarios (in this case, only one test) that have been executed, test run duration and browsers used. Clicking on a test name will open the detailed view where more information is shown, such as test steps and trace.