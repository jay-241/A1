# Assignment 3

* *Date Created*: 25 MARCH 2024
* *Last Modification Date*: 03 APRIL 2024
* *Assignment Login Page URL*: <https://parkflex.netlify.app/>
* *Assignment Registration Page URL*: <https://parkflex1.netlify.app/>
* *Git URL*: <https://git.cs.dal.ca/ketulp/csci-5709-grp-09>

## Authors

* [Jay Navinbhai Rana](jy834177@dal.ca)

## Feature Developed
Feature Name: Authentication

### Tasks
1.  


## Deployment

Initially, We imported existing project of front-end on netlify, back-end on Render from github as we had repository ready. We setup build settings to deploy the app. Finally, it was deployed and live on the mentioned link.

## Technologies Used

### Frontend
* [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
* [npm](https://docs.npmjs.com//) - Dependency Management
* [TypeScript] (https://www.typescriptlang.org/) - Programming Language
* [TailWindCSS] (https://tailwindcss.com/) - CSS Framework
* [Zustand] (https://medium.com/@joris.l/tutorial-zustand-a-simple-and-powerful-state-management-solution-9ad4d06d5334) - A Simple and Powerful State Management Solution
 
### Backend
* [Node.js] (https://www.w3schools.com/nodejs/) - Javascript Runtime Enviornment
* [Express] (https://expressjs.com/) - Web Frameword for Node.js

### Database
* [MongoDBAtlas] (https://www.mongodb.com/atlas/database) - Multi Cloud Database Service




### Login.tsx

*Lines 23 - 63*

```
<div className="login-container">
      <div className="login-image" /> 
      <div className="login-form">
        <div className="form-container">
          <h2 className="welcome-text">Welcome to ParkFlex</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                id="email" 
                type="email" 
                className="form-control" 
                placeholder="Enter Email Address"
              />
              {errors.email && <p className="text-danger">Email is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                {...register("password", { required: true })}
                id="password" 
                type="password" 
                className="form-control" 
                placeholder="Enter Password"
              />
              {errors.password && <p className="text-danger">Password is required</p>}
            </div>
            <div className="mb-3 text-end">
              <a href="/forgot-password" className="forgot-password-link">Forgot Password</a>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Log In</button>
            </div>
            <div className="mb-3 text-center">
              <span>Need an Account?</span> <a href="/register" className="create-account-link">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    </div>

```
The code above was created by adapting the code in [React Typescript Login and Registration example](https://www.bezkoder.com/react-typescript-login-example/) as shown below. Then I have changed code according to our project requirments.

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

### Login.css

*Lines 01 - 80*

``` 
.login-container {
    display: flex;
    flex-direction: row; 
    min-height: 100vh;
  }
  
  .login-image {
    width: 50%;
    height: 100vh;
    background: url('../assets/My.jpg') center/cover no-repeat;
  }
  
  .login-form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  
  .form-container {
    width: 100%; /* Responsive adjustment */
    max-width: 400px; /* Prevents form from stretching too wide on larger screens */
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    text-align: center;
  }
  
  .login-form .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-align: left;
  }
  
  .login-form input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .login-form button {
    padding: 0.75rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background-color: #0056b3;
  }
  
  .forgot-password-link,
  .create-account-link {
    color: #007bff;
    text-decoration: none;
  }
  
  .forgot-password-link:hover,
  .create-account-link:hover {
    text-decoration: underline;
  }
  
  .text-danger {
    color: #dc3545;
    font-size: 0.875em;
    margin-top: -0.5rem;
  }
  
  .welcome-text {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
```

The code above was created by adapting the code in [Common React Native App Layouts: Login Page](https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t) as shown below. Then I have changed CSS according to our Style. I have also change classname as I have use different classname in Login.tsx File.

``` 
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
image :{
    marginBottom: 40
  }

inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }

  forgot_button: {
    height: 30,
    marginBottom: 30,
  }

  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }

```
### Registration.tsx

*Lines 32 - 101*

```
<div className="registration-container">
      <div className="registration-image" /> 
      <div className="registration-form">
        <div className="registraion-form-container">
          <h2 className="welcome-text">Register for ParkFlex</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="firstName" className="registration-form-label">First Name</label>
              <input 
                {...register("firstName", { required: true })}
                id="firstName" 
                type="text" 
                className="registration-form-control" 
                placeholder="Enter First Name"
              />
              {errors.firstName && <p className="text-danger">First name is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="registration-form-label">Last Name</label>
              <input 
                {...register("lastName", { required: true })}
                id="lastName" 
                type="text" 
                className="registration-form-control" 
                placeholder="Enter Last Name"
              />
              {errors.lastName && <p className="text-danger">Last name is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="registration-form-label">Email</label>
              <input 
                {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                id="email" 
                type="email" 
                className="registration-form-control" 
                placeholder="Enter Email Address"
              />
              {errors.email && <p className="text-danger">Email is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="registration-form-label">Password</label>
              <input 
                {...register("password", { required: true })}
                id="password" 
                type="password" 
                className="registration-form-control" 
                placeholder="Enter Password"
              />
              {errors.password && <p className="text-danger">Password is required</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="registration-form-label">Confirm Password</label>
              <input 
                {...register("confirmPassword", { 
                  validate: (value) => value === password || "Passwords do not match"
                })}
                id="confirmPassword" 
                type="password" 
                className="registration-form-control" 
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
```
The code above was created by adapting the code in [React Typescript Login and Registration example](https://www.bezkoder.com/react-typescript-login-example/) as shown below. Then I have changed code according to our project requirments.

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
### Registration.css

*Lines 32 - 101*

```
.registration-container {
    display: flex;
    flex-direction: row; 
    min-height: 100vh;
}

.registration-image {
    width: 50%;
    height: 100vh;
    background: url('../assets/My.jpg') center/cover no-repeat; 
}

.registration-form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}

.registraion-form-container {
    width: 100%; 
    max-width: 400px; 
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #ffffff; 
    text-align: center;
}

.registration-form .registration-form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-align: left;
}

.registration-form .registration-form-control {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
}

.registration-form button {
    padding: 0.75rem;
    color: #fff;
    background-color: #007bff; 
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.registration-form button:hover {
    background-color: #0056b3; 
}

.text-danger {
    color: #dc3545; 
    font-size: 0.875em;
    margin-top: -0.5rem;
}
```
The code above was created by adapting the code in [Common React Native App Layouts: Login Page](https://code.tutsplus.com/common-react-native-app-layouts-login-page--cms-27639t) as shown below. Then I have changed CSS according to our Style. I have also change classname as I have use different classname in Registration.tsx File.

``` 
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },
image :{
    marginBottom: 40
  }

inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  }

  forgot_button: {
    height: 30,
    marginBottom: 30,
  }

  loginBtn:
  {
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#FF1493",
  }

```

### Image for Login and Registration Page(/assets/My.jpg)

Image Credit
* [Igor Karimov](https://unsplash.com/@ingvar_erik)
<img width="1680" alt="Parking App (ParkFlex)" src="https://unsplash.com/photos/gray-concrete-floor-with-brown-wooden-post-e9YSIyHC9Ug">

## Acknowledgments

* The code provided valuable insights and served as a foundation for understanding and learning it's functionality and logic. I am grateful for their work and dedication.
* It provided valuable insights and influenced my approach in understanding and learning the approaches and specific techniques. Their contribution is highly appreciated.
