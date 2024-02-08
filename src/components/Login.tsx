import React from 'react';
import { useUserStore } from '../store/userStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Login.css'; 

interface LoginFormInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const { setEmail } = useUserStore();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    setEmail(data.email);
    
    toast.success('Login successful!');
  };

  return (
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
  );
};
