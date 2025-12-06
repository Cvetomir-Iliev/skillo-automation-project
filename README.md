📌 Skillo Social Media – Test Automation Suite
📖 Project Overview

This project contains an automated end-to-end UI testing suite for the Skillo Social Media web application. It validates core user workflows such as registration, authentication, post creation, and session handling.
The goal is to ensure key functionalities work reliably across multiple browsers.

🎯 Project Purpose

The automation suite was built to:

✔ Improve product quality by validating critical features
✔ Detect regressions early in development
✔ Reduce manual testing time
✔ Provide a scalable testing framework using best practices (Page Object Model + Fixtures)

🛠️ Technologies Used

| Tool                             | Purpose                          |
| -------------------------------- | -------------------------------- |
| **Playwright**                   | End-to-end UI automation         |
| **Node.js**                      | Runtime environment              |
| **JavaScript (ES Modules)**      | Test language                    |
| **Page Object Model**            | Scalable test architecture       |
| **HTML Reporter / Trace Viewer** | Result visualization & debugging |

📋 Prerequisites

Before running tests, make sure you have:

Node.js v16+ installed

Git installed

Installed Playwright browsers

npm install
npx playwright install


🚀 Installation & Setup

git clone https://github.com/<your-username>/skillo-automation-project.git
cd skillo-automation-project
npm install
npx playwright install

▶️ Running Tests

Run all tests

npx playwright test

Run tests in headed mode

npx playwright test --headed

Run only Chromium tests

npx playwright test --project=chromium

Show HTML Report after execution

npx playwright show-report

View trace of a failed test

npx playwright show-trace <path-to-trace.zip>

📁 Project Structure

skillo-automation-project
│
├─ pages/               → Page Object Models
│   ├─ BasePage.js
│   ├─ LoginPage.js
│   ├─ RegistrationPage.js
│   ├─ HomePage.js
│   ├─ NewPostPage.js
│   └─ ProfilePage.js
│
├─ tests/               → Test Scenarios
│   ├─ login.spec.js
│   ├─ registration.spec.js
│   ├─ newPost.spec.js
│   └─ logout.spec.js
│
├─ fixtures/            → Pre-authenticated setup
│   └─ auth.js
│
├─ testData/
│   └─ users.js         → Test user credentials
│
├─ utils/               → Helpers (if expanded later)
├─ README.md
└─ package.json

🧪 Test Scenarios

📝 Registration Tests

| ID    | Scenario                                      |
| ----- | --------------------------------------------- |
| R-001 | Register a new user with valid details        |
| R-002 | Registration fails – missing username         |
| R-003 | Registration fails – invalid email format     |
| R-004 | Registration fails – short password           |
| R-005 | Registration fails – password mismatch        |
| R-006 | Registration fails – missing email            |
| R-007 | Registration fails – missing password         |
| R-008 | Registration fails – missing confirm password |

🔐 Login Tests

| ID    | Scenario                                     |
| ----- | -------------------------------------------- |
| L-001 | Successful login with valid credentials      |
| L-002 | Invalid password → visible error message     |
| L-003 | Non-existing account → visible error message |
| L-004 | Login button disabled when username empty    |
| L-005 | Login button disabled when password empty    |

🚪 Logout Tests

| ID    | Scenario                             |
| ----- | ------------------------------------ |
| O-001 | Logged-in user can logout            |
| O-002 | Cannot access Home page after logout |

📸 New Post Tests

| ID    | Scenario                                       |
| ----- | ---------------------------------------------- |
| P-001 | Create a new post with valid caption and image |
| P-002 | Post creation fails – missing caption          |
| P-003 | Post creation fails – missing image            |

📊 Test Coverage

| Category         | Count  |
| ---------------- | ------ |
| Total Test Cases | **54** |
| Positive Tests   | **15** |
| Negative Tests   | **39** |

💡 Coverage includes Chromium, Firefox, and WebKit.

🏗️ Architecture

This framework uses the Page Object Model (POM):

🔹 Each UI page has its own class
🔹 Tests remain clean and readable
🔹 Locators and logic are centralized
🔹 High reuse and easier maintenance

Authentication is optimized using fixtures to skip repetitive login flows.

🐛 Known Issues

⚠️ The Skillo app sometimes loads UI elements slowly → Added smart waits in page objects
⚠️ Toast notifications share similar text → Careful regex selectors used

🔮 Future Improvements

🚧 Suggested Enhancements:

Add CI integration (GitHub Actions)

Add API test coverage for backend validation

Add data cleanup script (delete created users/posts)

Add allure or junit reporting

Integrate TestRail for testing documentation

👤 Author

Tsvetomir Iliev
🔗 GitHub: [https://github.com/Cvetomir-Iliev]

📄 License

This project is created for educational and demonstration purposes only.