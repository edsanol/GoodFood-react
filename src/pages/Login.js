import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginUserAction } from '../store/actions/ActionRestaurants'

export const Login = () => {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data

    dispatch(loginUserAction({ email, password }))
  }

  return (
    <>
      <main className="register__main-container">
        <div className="register__logo"></div>
        <div className="register__title">
          <h1>Login</h1>
        </div>
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="register__form-label">
            Email
          </label>
          <input
            data-cy="email"
            className="register__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Enter the email"
            {...register('email', {
              required: true,
              pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            })}
          />
          {errors.email?.type === 'required' && (
            <p className="input__error" data-cy="error-email-input">
              ⚠ The email field is required
            </p>
          )}
          {errors.email?.type === 'pattern' && (
            <p className="input__error" data-cy="error-email-format-input">
              ⚠ The email format is incorrect
            </p>
          )}

          <label htmlFor="name" className="register__form-label">
            Password
          </label>
          <input
            data-cy="password"
            className="register__form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register('password', {
              required: true,
              minLength: 8,
              pattern:
                /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
            })}
          />
          {errors.password?.type === 'required' && (
            <p className="input__error" data-cy="error-password-input">
              ⚠ The password field is required
            </p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="input__error" data-cy="error-password-2-input">
              ⚠ The password must have at least 8 characters
            </p>
          )}
          {errors.password?.type === 'pattern' && (
            <p className="input__error" data-cy="error-password-3-input">
              ⚠ The password must have at least one uppercase letter, one
              lowercase letter, a number or special character, and a length
              minimum of 8 characters
            </p>
          )}
          <input
            data-cy="register-click-event"
            type="submit"
            value="Register"
            className="button-form-login-register"
          />
        </form>
      </main>
      <ToastContainer />
    </>
  )
}
