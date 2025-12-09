🔐 Login Test Cases
1️⃣ LOGIN-001 – Login with valid credentials (Positive)

Precondition

User account exists with valid username & password.

User is logged out and on the Login page.

Steps

Navigate to the Login page.

Enter a valid username in the Username field.

Enter the correct password in the Password field.

Click the Sign In button.

Test Data

Username: valid existing user (e.g. validUser)

Password: correct password (e.g. validPassword123)

Expected Result

User is successfully logged in.

User is redirected to the home/feed page (e.g. All Posts).

Logged-in UI is visible: profile icon, New Post, Logout, etc.

2️⃣ LOGIN-002 – Login with wrong password (Negative)

Precondition

User account exists.

User is on the Login page.

Steps

Enter a valid username.

Enter an incorrect password.

Click Sign In.

Test Data

Username: existing user (e.g. validUser)

Password: incorrect password (e.g. wrongPass123)

Expected Result

Login fails.

An error/toast message is displayed (e.g. Wrong password).

User remains on the Login page and is not logged in.

3️⃣ LOGIN-003 – Login with non-existing user (Negative)

Precondition

User is on the Login page.

Steps

Enter a non-existing username.

Enter any password.

Click Sign In.

Test Data

Username: nonExistingUserXYZ

Password: somePassword123

Expected Result

Login fails.

Error/toast is shown (e.g. User does not exist).

User remains on the Login page.

4️⃣ LOGIN-004 – Sign in button disabled when username is empty (Negative)

Precondition

User is on the Login page.

Steps

Leave the Username field empty.

Enter a valid password in Password field.

Observe the Sign In button.

Test Data

Username: empty

Password: valid (e.g. validPassword123)

Expected Result

Sign In button is disabled / cannot be clicked.

No login attempt is triggered.

5️⃣ LOGIN-005 – Sign in button disabled when password is empty (Negative)

Precondition

User is on the Login page.

Steps

Enter a valid username.

Leave Password field empty.

Observe the Sign In button.

Test Data

Username: valid (e.g. validUser)

Password: empty

Expected Result

Sign In button is disabled / cannot be clicked.

No login attempt is triggered.

🧾 Registration Test Cases
6️⃣ REG-001 – Register a new user with valid data (Positive)

Precondition

User is logged out.

Registration page is accessible.

Test username/email are unique (not used before).

Steps

Navigate to the Registration page.

Fill valid Username.

Fill valid Email.

Fill valid Password (meeting complexity/length).

Fill matching Confirm Password.

Click Sign Up / Register.

Test Data

Username: e.g. autoUser_<timestamp>

Email: e.g. autoUser_<timestamp>@mail.com

Password: Password123

Confirm Password: Password123

Expected Result

Registration succeeds.

User is automatically logged in.

Redirected to home/profile page.

Logged-in UI visible.

7️⃣ REG-002 – Registration fails when username is missing (Negative)

Precondition

User is on the Registration page.

Steps

Leave Username empty.

Fill valid Email, Password, Confirm Password.

Attempt to submit the form (click Sign Up).

Test Data

Username: empty

Email: valid

Password: valid

Confirm Password: same as password

Expected Result

Registration is not completed.

Validation error is shown for Username (e.g. Username is required).

User stays on the Registration page.

8️⃣ REG-003 – Registration fails with invalid email format (Negative)

Precondition

User is on the Registration page.

Steps

Enter valid Username.

Enter invalid Email (missing @ or domain).

Enter valid Password and Confirm Password.

Click Sign Up.

Test Data

Username: valid

Email: invalidEmail / user@mail

Password: Password123

Confirm Password: Password123

Expected Result

Registration fails.

Email field shows validation message (e.g. Invalid email).

User is not registered.

9️⃣ REG-004 – Registration fails when password is too short (Negative)

Precondition

User is on the Registration page.

Steps

Enter valid Username and Email.

Enter a password below the minimum length (e.g. 3–4 chars).

Enter same value in Confirm Password.

Click Sign Up.

Test Data

Username: valid

Email: valid

Password: 123

Confirm Password: 123

Expected Result

Registration fails.

Validation message about password length/strength is shown.

User is not registered.

🔟 REG-005 – Registration fails when passwords do not match (Negative)

Precondition

User is on the Registration page.

Steps

Enter valid Username and Email.

Enter a valid Password.

Enter a different value in Confirm Password.

Click Sign Up.

Test Data

Password: Password123

Confirm Password: Password321

Expected Result

Registration fails.

Error/validation shown (e.g. Passwords do not match).

User not registered.

1️⃣1️⃣ REG-006 – Registration fails when email is missing (Negative)

Steps

Leave Email empty.

Fill Username, Password, Confirm Password with valid values.

Click Sign Up.

Expected Result

Registration is blocked.

Email field shows required error.

No new user is created.

1️⃣2️⃣ REG-007 – Registration fails when password is missing (Negative)

Steps

Leave Password empty.

Fill valid Username, Email, and Confirm Password.

Click Sign Up.

Expected Result

Registration is blocked.

Password field shows required error.

1️⃣3️⃣ REG-008 – Registration fails when confirm password is missing (Negative)

Steps

Leave Confirm Password empty.

Fill valid Username, Email, Password.

Click Sign Up.

Expected Result

Registration is blocked.

Confirm Password field shows required error.

🚪 Logout Test Cases
1️⃣4️⃣ LOGOUT-001 – Logged-in user can logout successfully (Positive)

Precondition

User is logged in and on home/feed page.

Steps

Click on Logout icon/menu.

Wait for navigation.

Expected Result

User is redirected to the Login page.

Login form is visible.

Logged-in navigation (New Post, Profile, Logout) is no longer visible.

1️⃣5️⃣ LOGOUT-002 – User cannot access home after logout (Negative)

Precondition

User was logged in and has just logged out (as in LOGOUT-001).

Steps

After logout, try to open the home/feed URL directly (e.g. via address bar or browser history).

e.g. navigate to /posts/all.

Observe the behavior.

Expected Result

User is redirected back to the Login page.

Protected home/feed page is not accessible without authentication.

📝 New Post Test Cases
1️⃣6️⃣ POST-001 – Create a new post with image and caption (Positive)

Precondition

User is logged in.

User can access the New Post page.

Test image file exists (e.g. test-data/gaming.jpg).

Steps

Click New Post in navigation.

In the Caption field, enter a valid caption.

Upload a valid image file.

Click Create Post / Submit.

Test Data

Caption: My first automated post

Image: test-data/gaming.jpg

Expected Result

Post is successfully created.

User is redirected to feed or profile page.

New post with the correct image and caption is visible.

1️⃣7️⃣ POST-002 – Caption is required when creating a new post (Negative)

Precondition

User is logged in.

Test image is available.

Steps

Navigate to New Post page.

Leave the Caption field empty.

Upload a valid image.

Click Create Post / Submit.

Expected Result

Post is not created.

Validation message/toast related to caption is shown (e.g. Caption is required).

User stays on the New Post form.

1️⃣8️⃣ POST-003 – Image is required when creating a new post (Negative)

Precondition

User is logged in.

Steps

Go to New Post page.

Enter a valid caption.

Do not upload any image.

Click Create Post / Submit.

Expected Result

Post creation is blocked.

Error/toast appears (e.g. Please upload an image!).

User remains on the New Post page.

🧮 Summary for Jira “Test Coverage” section

You can also use this in your README or Jira test plan:

Total test cases: 18

Positive tests:

LOGIN-001

REG-001

LOGOUT-001

POST-001
→ 4 positive

Negative tests:

LOGIN-002 – LOGIN-005 (4)

REG-002 – REG-008 (7)

LOGOUT-002 (1)

POST-002 – POST-003 (2)
→ 14 negative