const users = {
  // This is used for login tests. Both fields are < 20 chars.
  validUser: {
    username: 'Tsvetomir',   // 14 chars
    password: 'Temp12345',      // 12 chars
  },

  // Template for new registration users
  newUserTemplate: {
    emailDomain: 'test.com',       // we keep domain short
    password: 'Pass123!',          // 8 chars
  },

  // All of these are for NEGATIVE registration scenarios (each field <= 20 chars)
  invalidRegistrationUsers: [
    {
      description: 'missing username',
      username: '',
      email: 'u1@test.com',
      password: 'Pass123!',
      confirmPassword: 'Pass123!',
      expectedError: 'Username is required',
    },
    {
      description: 'invalid email format',
      username: 'userInvEmail',      // 12 chars
      email: 'not-an-email',         // 12 chars
      password: 'Pass123!',
      confirmPassword: 'Pass123!',
      expectedError: 'Email is invalid',
    },
    {
      description: 'short password',
      username: 'userShortPwd',      // 12 chars
      email: 'u2@test.com',
      password: '123',               // too short on purpose
      confirmPassword: '123',
      expectedError: 'Password must be at least',
    },
    {
      description: 'password mismatch',
      username: 'userMismatch',      // 12 chars
      email: 'u3@test.com',
      password: 'Pass123!',
      confirmPassword: 'Pass999!',
      expectedError: 'Passwords do not match',
    },
    {
      description: 'missing email',
      username: 'userNoEmail',       // 10 chars
      email: '',
      password: 'Pass123!',
      confirmPassword: 'Pass123!',
      expectedError: 'Email is required',
    },
    {
      description: 'missing password',
      username: 'userNoPass',        // 10 chars
      email: 'u4@test.com',
      password: '',
      confirmPassword: '',
      expectedError: 'Password is required',
    },
    {
      description: 'missing confirm password',
      username: 'userNoConf',        // 10 chars
      email: 'u5@test.com',
      password: 'Pass123!',
      confirmPassword: '',
      expectedError: 'Verify password is required',
    },
  ],
};

export default users;