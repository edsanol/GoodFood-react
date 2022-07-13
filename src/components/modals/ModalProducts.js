import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import '../../assets/styles/components/modals/ModalProducts.css'

export const ModalProducts = () => {
  const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)

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
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form className="create-product__form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container-edit-input">
      <h2>Add a new product</h2>
        <label htmlFor="name" className="create-product__form-label">
          Name
        </label>
        <input
          data-cy="name"
          className="create-product__form-input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter the product name"
          {...register('name', {
            required: true,
            pattern: /^[a-z\d A-Z\d]{2,30}$/i,
          })}
        />
        {errors.name?.type === 'required' && (
          <p className="input__error">⚠ The name field is required</p>
        )}
        {errors.name?.type === 'pattern' && (
          <p className="input__error" data-cy="error-fullName-input">
            ⚠ Enter a name of minimum 2 characters and maximum 30
          </p>
        )}

        <label htmlFor="price" className="create-product__form-label">
          Price
        </label>
        <input
          data-cy="price"
          className="create-product__form-input"
          type="text"
          name="price"
          id="price"
          placeholder="Enter the product price"
          {...register('price', {
            required: true,
            pattern: /^(\d{1,7})$/i,
          })}
        />
        {errors.price?.type === 'required' && (
          <p className="input__error">⚠ The price field is required</p>
        )}
        {errors.price?.type === 'pattern' && (
          <p className="input__error" data-cy="error-fullName-input">
            ⚠ price must be a number without puntuation
          </p>
        )}

        <label htmlFor="description" className="create-product__form-label">
          Product description
        </label>
        <textarea
          data-cy="description"
          className="create-product__form-textarea"
          type="text"
          name="description"
          id="description"
          placeholder="Enter the product description"
          {...register('description', {
            required: true,
          })}
        />
        {errors.description?.type === 'required' && (
          <p className="input__error">⚠ The description field is required</p>
        )}

        <input
          data-cy="register-click-event"
          type="submit"
          value="Save"
          className="button-form-login-register"
        />
      </div>

      <div className="container-edit-image">
        <img
          className="img__upload-image"
          src="https://www.kindpng.com/picc/m/475-4750784_restaurant-building-icon-icon-logo-restaurant-png-transparent.png"
          alt="edit your profile"
        />
        <span
          type="button"
          className="product__button-upload"
          onClick={handleUpdateImageProfile}>
          Upload Image
        </span>
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

        <div className="product__select">
          <label htmlFor="select" className="create-product__select-label">
            Select category
          </label>
          <select
            name="select"
            id="select"
            className="modal-select__select"
            {...register('select', {
              required: true,
            })}>
            <option value="without_category">Without category</option>
            <option value="hamburguer">Hamburguer</option>
            <option value="fries">Fries</option>
            <option value="pizza">Pizza</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="salchipapa">Salchipapa</option>
            <option value="sodas">Sodas</option>
            <option value="drinks">Drinks</option>
            <option value="especials">Especials</option>
          </select>
        </div>
      </div>
    </form>
  )
}
