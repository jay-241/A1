# Assignment 3

* *Date Created*: 25 MARCH 2024
* *Last Modification Date*: 04 APRIL 2024
* *Project Deployment URL*: <https://park-flex.netlify.app/>
* *Project Git URL*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09>
* *Individual Git URL*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09/-/tree/jay_rana?ref_type=heads>

## Authors

* [Jay Navinbhai Rana](jy834177@dal.ca)

## Deployment

Initially, We imported existing project of front-end on netlify, back-end on Render from github as we had repository ready. We setup build settings to deploy the app. Finally, it was deployed and live on the mentioned link.

## Feature Developed
Feature Name: Authentication

### Tasks
1. Sign Up
2. Log In
3. Forget Password
4. Logout
5. Profile Management

## Technologies Used

### Frontend
* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management
* [TypeScript](https://www.typescriptlang.org/) - Programming Language
* [TailWindCSS](https://tailwindcss.com/) - CSS Framework
* [Zustand](https://medium.com/@joris.l/tutorial-zustand-a-simple-and-powerful-state-management-solution-9ad4d06d5334) - A Simple and Powerful State Management Solution
 
### Backend
* [Node.js] (https://www.w3schools.com/nodejs/) - Javascript Runtime Enviornment
* [Express] (https://expressjs.com/) - Web Frameword for Node.js

### Database
* [MongoDBAtlas] (https://www.mongodb.com/atlas/database) - Multi Cloud Database Service

## Directory Structure

### Frontend 
Frontend - /frontend/src/Auth
* The 'Auth' directory is part of our project's specific folder structure, which is required by the React framework and TypeScript that we are using for the development of our authentication features. This directory contains TypeScript files (.tsx) that are associated with user authentication functionality within the application.

Contents

LoginPage.tsx 
* Contains the code for the user login interface and logic.

Registration.tsx 
* Manages the user registration process.

ProfilePage.tsx 
* Used for displaying the user profile and handling profile updates.

ForgetPasswordPage.tsx
* Handles the password recovery process.

ResetPasswordPage.tsx
* Allows users to reset their password.

### Backend
Directory and Files Descriptions:

src/controllers/authController.ts
* This file contains the logic for user authentication processes, including user login, registration, and session management.

src/middleware/authenticateToken.ts
* The middleware for token authentication is defined here. It is used to verify the tokens attached to HTTP requests to secure protected routes.

src/models/Users.ts
* Defines the User model schema for the application, which is used to interact with the corresponding 'users' collection in the database.

src/routes/authRoutes.ts
* Contains all routing logic related to authentication. It connects HTTP requests to their respective controller functions for user authentication.

src/utils/mailer.ts
* This utility module is responsible for sending emails from our application, such as password reset links.


## Sources Used

### /frontend/src/Auth/LoginPage.tsx

*Lines 60 - 92*

```
<div className='flex flex-col md:flex-row min-h-screen bg-gray-100'>
      <div className='md:flex-1 flex justify-center items-center bg-blue-500'>
        <img
          src={LoginImage}
          alt='ParkFlex'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='md:flex-1 flex justify-center items-center'>
        <form
          onSubmit={handleLogin}
          className='space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
        >
          <h2 className='text-center font-bold text-xl mb-4'>
            Welcome to ParkFlex
          </h2>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email Address'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Log In
            </button>
          </div>
          <div className='text-center'>
            <a
              onClick={handleNavigate("/forgetpassword")}
              className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
              href='/forgot-password'
            >
              Forgot Password?
            </a>
            <p className='text-sm text-gray-600 mt-4'>
              Need an Account?{" "}
              <a
                onClick={handleNavigate("/register")}
                className='text-blue-500 hover:text-blue-800'
                href='/register'
              >
                Create an account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>

```
The code above was created by adapting the code in [React Typescript Login and Registration example](https://www.bezkoder.com/react-typescript-login-example/) as shown below. Then I have changed code according to our project requirments.

#### Modifications Made:
Form Layout:

* What was modified: Tailored the CSS classes to fit the visual theme of our application, ParkFlex.
* How it was modified: Adjusted the Tailwind CSS classes to ensure the form matches the color scheme, spacing, and responsiveness of the rest of the app.
* Why it was modified: To provide a consistent user experience that aligns with our branding and design guidelines.

```
<div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className="form-control" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>

              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
```
### /frontend/src/Auth/Registration.tsx
*Lines 86 - 155*

```
return (
    <div className='flex flex-col md:flex-row min-h-screen bg-gray-100'>
      <div className='md:flex-1 flex justify-center items-center bg-green-500'>
        <img
          src={RegistrationImage}
          alt='Welcome to ParkFlex'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='md:flex-1 flex justify-center items-center'>
        <form
          onSubmit={handleRegister}
          className='space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg'
        >
          <h2 className='text-center font-bold text-xl mb-4'>
            Create Your Account
          </h2>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder='First Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Last Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder='Confirm Password'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );

```
The code above was created by adapting the code in [React Typescript Login and Registration example](https://www.bezkoder.com/react-typescript-login-example/) as shown below. Then I have changed code according to our project requirments.

#### Modifications Made:
Form Layout and Styling:

* What was modified: Altered the layout to a two-column design on wider screens and updated the color scheme to match our application's theme.
* How it was modified: Applied Tailwind CSS classes to achieve the responsive design and color palette that aligns with our branding.
* Why it was modified: To provide a consistent user interface that reflects our brand's visual identity and enhances the user experience on various devices.

```
<div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Formik
            initialValues={initialValues}
            validationSchema={this.validationSchema}
            onSubmit={this.handleRegister}
          >
            <Form>
              {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username"> Username </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      successful ? "alert alert-success" : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
            </Form>
          </Formik>
        </div>
      </div>
```
### /frontend/src/Auth/ForgetPasswordPage.tsx

*Lines 31 - 56*

```
 return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:flex-1 flex justify-center items-center bg-blue-500">
        <img src={LoginImage} alt="ParkFlex" className="w-full h-full object-cover" />
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <h2 className="text-center font-bold text-xl mb-4">Reset Password</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
```
The code above was created by adapting the code in [Password Reset](https://www.back4app.com/docs/react/working-with-users/react-password-reset) as shown below. Then I have changed CSS according to our Style. 

Modifications Made:
Compared to the original version of this component, the following key modifications have been made to enhance functionality and user experience:

Layout Optimization
* Adjusted the form to a flexbox layout with responsive design considerations (flex flex-col md:flex-row). The original layout was likely less responsive and not optimized for various screen sizes.

Theming and Styling
* Updated the background color (bg-blue-500) to match the ParkFlex branding. The previous version might have had a default or different color scheme.

``` 
 return (
	    <div>
      <div className="header">
	        <img
          className="header_logo"
          alt="Back4App Logo"
	          src={
	            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
	          }
	        />
	        <p className="header_text_bold">{'React on Back4App'}</p>
	        <p className="header_text">{'User Password Reset'}</p>
	      </div>
	      <div className="container">
	        <h2 className="heading">{'Request password reset email'}</h2>
	        <Divider />
	        <div className="form_wrapper">
	          <Input
	            value={email}
	            onChange={(event) => setEmail(event.target.value)}
	            placeholder="Your account email"
	            size="large"
	            className="form_input"
	          />
	        </div>
	        <div className="form_buttons">
	          <Button
	            onClick={() => doRequestPasswordReset()}
            type="primary"
	            className="form_button"
	            color={'#208AEC'}
	            size="large"
	          >
	            Request password reset
	          </Button>
        </div>
	      </div>
	    </div>
	  );

```

### /frontend/src/Auth/ResetPasswordPage.tsx

*Lines 60 - 91*

```
return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:flex-1 flex justify-center items-center bg-blue-500">
        <img src={LoginImage} alt="Reset Password" className="w-full h-full object-cover" />
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <h2 className="text-center font-bold text-xl mb-4">Reset Your Password</h2>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );

```
The code above was created by adapting the code in [Password Reset](https://www.back4app.com/docs/react/working-with-users/react-password-reset) as shown below. Then I have changed CSS according to our Style. 

Modifiaction Made:
Responsive Design
* Added Tailwind CSS utility classes to make the form responsive. Previously, the form might not have adjusted well to different screen sizes.

Styling Enhancements
* Introduced a color scheme (bg-blue-500) and additional styling (shadow, rounded) to match the application's design theme. The original might have had a more basic design without these visual enhancements.

Form Field Updates
* Added two password fields (newPassword and confirmNewPassword) with placeholder text to guide the user more clearly through the password reset process. The original form may have had different fields or less clear instructions.

``` 
 return (
	    <div>
      <div className="header">
	        <img
          className="header_logo"
          alt="Back4App Logo"
	          src={
	            'https://blog.back4app.com/wp-content/uploads/2019/05/back4app-white-logo-500px.png'
	          }
	        />
	        <p className="header_text_bold">{'React on Back4App'}</p>
	        <p className="header_text">{'User Password Reset'}</p>
	      </div>
	      <div className="container">
	        <h2 className="heading">{'Request password reset email'}</h2>
	        <Divider />
	        <div className="form_wrapper">
	          <Input
	            value={email}
	            onChange={(event) => setEmail(event.target.value)}
	            placeholder="Your account email"
	            size="large"
	            className="form_input"
	          />
	        </div>
	        <div className="form_buttons">
	          <Button
	            onClick={() => doRequestPasswordReset()}
            type="primary"
	            className="form_button"
	            color={'#208AEC'}
	            size="large"
	          >
	            Request password reset
	          </Button>
        </div>
	      </div>
	    </div>
	  );

```

### /api/src/models/User.ts

*Lines 06 - 23*

```
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  resetToken?: string;
  resetTokenExpiry?: number;
}

// User schema definition with field validations and settings
const UsersSchema: Schema = new Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  resetToken: String,
  resetTokenExpiry: Number,
});

```
The code above was created by adapting the code in [Login Logout using Express.js](https://dev.to/m_josh/build-a-jwt-login-and-logout-system-using-expressjs-nodejs-hd2) as shown below. Then I have changed according to our Style. 

Modifications Made:

Interface Creation (IUser)
* Defined an interface IUser that extends Mongoose's Document object, representing a user document from MongoDB. This was likely introduced to provide type-checking and IntelliSense support in TypeScript, which the original JavaScript version didn't have.

Schema Definition (UsersSchema)
* Developed a Mongoose Schema to represent a user in the database. 
* Adding field validations such as required to ensure that essential information is present.
* Implementing trim to remove whitespace from the firstName, lastName, and email fields.
* Ensuring email is unique and lowercase for consistent data entry and lookup.
* Adding optional fields resetToken and resetTokenExpiry to facilitate password recovery processes.

``` 
 const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: "Your firstname is required",
            max: 25,
        },
        last_name: {
            type: String,
            required: "Your lastname is required",
            max: 25,
        },
        email: {
            type: String,
            required: "Your email is required",
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: "Your password is required",
            select: false,
            max: 25,
        },
        role: {
            type: String,
            required: true,
            default: "0x01",
        },
    },
    { timestamps: true }
);

```

### /api/src/controller/authController.ts

*Lines 11 - 64*

```
// Handles user registration.
export const register = async (req: Request, res: Response) => {
    try {
        
        let user = await Users.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ message: 'Email is already in use.' });
        }
    
        user = new Users(req.body);
        await user.save();
        await Wallet.create({ userId: user._id, balance: 0 });
    
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string);
        
        res.status(201).send({ user: user._id, token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).send({ message: error.message });
        } else {
            res.status(500).send({ message: 'An unexpected error occurred' });
        }
    }
};

// Handles user login, including token generation.
export const login = async (req: Request, res: Response) => {
  try {
      const user = await Users.findOne({ email: req.body.email });
      if (!user) {
          return res.status(400).send({ message: 'Invalid email or password.' });
      }
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
          return res.status(400).send({ message: 'Invalid email or password.' });
      }
  
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET as string); 
   
      const userToSend = {
        _id: user._id,
      };

      
      res.header('Authorization', token).send({ token, user: userToSend });
  } catch (error) {
      if (error instanceof Error) {
          res.status(500).send({ message: error.message });
      } else {
          res.status(500).send({ message: 'An unexpected error occurred' });
      }
  }
};

```
The code above was created by adapting the code in [Login Logout using Express.js](https://dev.to/m_josh/build-a-jwt-login-and-logout-system-using-expressjs-nodejs-hd2) as shown below. Then I have changed according to our Style. 

Modifications Made:

Registration Function Modifications:

Email Uniqueness Check
* Added a check to see if the email already exists in the database before creating a new user to ensure uniqueness.

User Creation and Saving
* Modified to instantiate a new Users document from the req.body and save it to the database, capturing the complete user data.

Login Function Modifications:

User Email Verification
* Added logic to check if the user with the provided email exists, enhancing security by not allowing login attempts on non-existent accounts.

Password Validation
* Introduced password validation using bcrypt.compare to safely check if the provided password matches the stored hash.

``` 
 export async function Login(req, res) {
    // Get variables for the login process
    const { email } = req.body;
    try {
        // Check if user exists
        const user = await User.findOne({ email }).select("+password");
        if (!user)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again with the correct credentials.",
            });
        // if user exists
        // validate password
        const isPasswordValid = bcrypt.compare(
            `${req.body.password}`,
            user.password
        );
        // if not valid, return unathorized response
        if (!isPasswordValid)
            return res.status(401).json({
                status: "failed",
                data: [],
                message:
                    "Invalid email or password. Please try again with the correct credentials.",
            });
        // return user info except password
        const { password, ...user_data } = user._doc;

        res.status(200).json({
            status: "success",
            data: [user_data],
            message: "You have successfully logged in.",
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
    res.end();
}
```

### /api/src/middleware/authenticateToken.ts

*Lines 12 - 24*

```
export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.sendStatus(401);

  // Verify token and set user in request on success
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; 
    next();
  });
};
```
The code above was created by adapting the code in [Login Logout using Express.js](https://dev.to/m_josh/build-a-jwt-login-and-logout-system-using-expressjs-nodejs-hd2) as shown below. Then I have changed according to our Style. 

Modifications Made:

Token Extraction
* Modified the method to extract the token from the Authorization header. The token is expected to follow the 'Bearer [token]' format. This change allows for a more standardized way of sending tokens in HTTP headers.

Unauthorized Access Handling
* Added a check to immediately return a 401 Unauthorized status if the token is missing. This ensures that requests without a token are swiftly rejected without further processing.

``` 
import { validationResult } from "express-validator";

const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err) => (error[err.param] = err.msg));
        return res.status(422).json({ error });
    }
    next();
};
export default Validate;

```

### /api/src/utils/mailer.ts

*Lines 06 - 23*

```
export const sendEmail = async (to: string, subject: string, body: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Setting up email options: sender, recipient, subject, and body.
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: to,
    subject: subject,
    text: body,
  };

  await transporter.sendMail(mailOptions);
```
The code above was created by adapting the code in [Send Mail with Nodemailer](https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437) as shown below. Then I have changed according to our Style. 

Modifications Made:

Simplification of Transporter Creation
*Simplified to a single transporter creation method using Gmail's SMTP service directly. This decision was driven by our application's initial requirement to send emails via Gmail, streamlining the setup process for development and production.

Environment Variables for Authentication
* Consolidated authentication to use process.env.GMAIL_EMAIL and process.env.GMAIL_PASSWORD for Gmail SMTP, ensuring a consistent approach to accessing sensitive information securely.

``` 
async createLocalConnection() {
        let account = await nodemailer.createTestAccount();
        this.transporter = nodemailer.createTransport({
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass,
            },
        });
    }
    //CREATE A CONNECTION FOR LIVE
    async createConnection() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_TLS === 'yes' ? true : false,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }
    //SEND MAIL
    async sendMail(
        requestId: string | number | string[],
        options: MailInterface
    ) {
        return await this.transporter
            .sendMail({ 
                from: `"chiragmehta900" ${process.env.SMTP_SENDER || options.from}`,
                to: options.to,
                cc: options.cc,
                bcc: options.bcc,
                subject: options.subject,
                text: options.text,
                html: options.html,
            })
            .then((info) => {
                Logging.info(`${requestId} - Mail sent successfully!!`);
                Logging.info(`${requestId} - [MailResponse]=${info.response} [MessageID]=${info.messageId}`);
                if (process.env.NODE_ENV === 'local') {
                    Logging.info(`${requestId} - Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
                        info
                    )}`);
                }
                return info;
            });
    }

```

### Image for Authentication Feature (/assets/Login.jpg)

Image Credit
* [Igor Karimov](https://unsplash.com/@ingvar_erik)
<img width="1680" alt="Parking App (ParkFlex)" src="https://unsplash.com/photos/gray-concrete-floor-with-brown-wooden-post-e9YSIyHC9Ug">

## Acknowledgments

* The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
* It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.
