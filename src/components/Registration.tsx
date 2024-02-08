import React from 'react';
import { useUserStore } from '../store/userStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Registration.css'; // Make sure to create and style your Registration.css

interface RegistrationFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const Registration = () => {
  const { setEmail } = useUserStore();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegistrationFormInputs>();
  const password = watch('password');

  const onSubmit = (data: RegistrationFormInputs) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    setEmail(data.email);
    
    // Here you would typically make an API call to register the user
    toast.success('Registration successful!');
  };

  return (
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
  );
};
