import React, { useEffect, useState } from 'react'
import '../assets/styles/pages/Register.css'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { updateImageAction } from '../store/actions/ActionsImageProfile'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import { registerUserAction } from '../store/actions/ActionRestaurants'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

export const Register = () => {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const { imageProfile } = useSelector((state) => state.updateImageReducer)

  const dispatch = useDispatch()

  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.onloadend = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
      dispatch(updateImageAction(file))
    }
  }, [file, dispatch])

  const handleUpdateImageProfile = () => {
    document.querySelector('#imageSelector').click()
  }
  const handleChangeSelectImage = (e) => {
    setFile(e.target.files[0])
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { password, repeatPassword } = data
      let userUpdated
      if (imageProfile) {
        userUpdated = { ...data, image: imageProfile }
      } else {
        userUpdated = { ...data }
      }
      if (password !== repeatPassword) {
        toast.error('Passwords do not match', {
          position: 'bottom-right',
          theme: 'colored',
        })
        return
      }
      dispatch(registerUserAction(userUpdated))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <main className="register__main-container">
        <div className="register__logo"></div>
        <div className="register__title">
          <h1>Register</h1>
        </div>
        <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="register__container">
            <div className="register__container-group">
              <label htmlFor="restaurant" className="register__form-label">
                Restaurant
              </label>
              <input
                className="register__form-input"
                type="text"
                name="restaurant"
                id="restaurant"
                placeholder="Enter the restaurant name"
                {...register('restaurant', {
                  required: true,
                  pattern: /^[a-z\d A-Z\d]{2,30}$/i,
                })}
              />
              {errors.restaurant?.type === 'required' && (
                <p className="input__error">⚠ The name field is required</p>
              )}
              {errors.restaurant?.type === 'pattern' && (
                <p className="input__error" data-cy="error-fullName-input">
                  ⚠ Enter a name of minimum 2 characters and maximum 30
                </p>
              )}
            </div>

            <div className="register__container-group">
              <label htmlFor="administrator" className="register__form-label">
                Administrator
              </label>
              <input
                className="register__form-input"
                type="text"
                name="administrator"
                id="administrator"
                placeholder="Enter your first and last name"
                {...register('administrator', {
                  required: true,
                  pattern: /^[a-z\d A-Z\d]{2,30}$/i,
                })}
              />
              {errors.administrator?.type === 'required' && (
                <p className="input__error">⚠ The name field is required</p>
              )}
              {errors.administrator?.type === 'pattern' && (
                <p className="input__error" data-cy="error-fullName-input">
                  ⚠ Enter a name of minimum 2 characters and maximum 30
                </p>
              )}
            </div>
          </div>

          <div className="register__container">
            <div className="register__container-group">
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
            </div>

            <div className="register__container-group">
              <label htmlFor="phone" className="register__form-label">
                Phone
              </label>
              <input
                className="register__form-input"
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter the phone number"
                {...register('phone', {
                  required: true,
                  pattern: /^[a-z\d A-Z\d]{10}$/i,
                })}
              />
              {errors.phone?.type === 'required' && (
                <p className="input__error">
                  ⚠ The number phone field is required
                </p>
              )}
              {errors.phone?.type === 'pattern' && (
                <p className="input__error" data-cy="error-fullName-input">
                  ⚠ Incorrect phone number
                </p>
              )}
            </div>
          </div>

          <div className="register__container">
            <div className="register__container-group">
              <label htmlFor="address" className="register__form-label">
                Address
              </label>
              <input
                data-cy="address"
                className="register__form-input"
                type="text"
                name="address"
                id="address"
                placeholder="Enter the address"
                {...register('address', {
                  required: true,
                  pattern: /^[a-z\d A-Z\d]{3,30}$/i,
                })}
              />
              {errors.address?.type === 'required' && (
                <p className="input__error">⚠ The address field is required</p>
              )}
              {errors.address?.type === 'pattern' && (
                <p className="input__error" data-cy="error-fullName-input">
                  ⚠ Incorrect address
                </p>
              )}
            </div>

            <div className="register__container-group">
              <label htmlFor="city" className="register__form-label">
                City
              </label>
              <input
                className="register__form-input"
                type="text"
                name="city"
                id="city"
                placeholder="Enter the city"
                {...register('city', {
                  required: true,
                  pattern: /^[a-z\d A-Z\d]{2,30}$/i,
                })}
              />
              {errors.city?.type === 'required' && (
                <p className="input__error">⚠ The city field is required</p>
              )}
              {errors.city?.type === 'pattern' && (
                <p className="input__error" data-cy="error-fullName-input">
                  ⚠ Incorrect city
                </p>
              )}
            </div>
          </div>

          <div className="register__container">
            <div className="register__container-group">
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
            </div>

            <div className="register__container-group">
              <label htmlFor="repeatPassword" className="register__form-label">
                Repeat password
              </label>
              <input
                className="register__form-input"
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repeat password"
                {...register('repeatPassword', {
                  required: true,
                  minLength: 8,
                  pattern:
                    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                })}
              />
              {errors.repeatPassword?.type === 'required' && (
                <p className="input__error">⚠ The password field is required</p>
              )}
              {errors.repeatPassword?.type === 'minLength' && (
                <p className="input__error">
                  ⚠ The password must have at least 8 characters
                </p>
              )}
              {errors.repeatPassword?.type === 'pattern' && (
                <p className="input__error">
                  ⚠ The password must have at least one uppercase letter, one
                  lowercase letter, a number or special character, and a length
                  minimum of 8 characters
                </p>
              )}
            </div>
          </div>

          <div className="container-submit-image containerB">
            <div>
              <img
                className="img__upload-image"
                src={
                  imageProfile
                    ? imageProfile
                    : 'https://www.kindpng.com/picc/m/475-4750784_restaurant-building-icon-icon-logo-restaurant-png-transparent.png'
                }
                alt="edit you profile"
              />
              <span
                type="button"
                className="span__button-upload"
                onClick={handleUpdateImageProfile}>
                Upload Image
              </span>
            </div>
            <div className="button-edit">
              <input
                id="imageSelector"
                type="file"
                name="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChangeSelectImage}
              />
            </div>
          </div>

          {image && imageProfile ? (
            <input
              data-cy="register-click-event"
              type="submit"
              value="Register"
              className="button-form-login-register"
            />
          ) : image && !imageProfile ? (
            <p className="button-nosave">Register</p>
          ) : (
            <input
              data-cy="register-click-event"
              type="submit"
              value="Register"
              className="button-form-login-register"
            />
          )}
        </form>
        <p className="pin__magic">
          Already using Good Food? <Link to="/login"> Sign in</Link>
        </p>
      </main>
      <ToastContainer />
    </>
  )
}
