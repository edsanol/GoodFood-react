import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import '../../assets/styles/components/modals/ModalProducts.css'
import { toast } from 'react-toastify'
import { createProductAction } from '../../store/actions/ActionProducts'
import {
  updateImageAction,
  updateNullImageAction,
} from '../../store/actions/ActionsImageProfile'

export const ModalProducts = ({ setOpened }) => {
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

  useEffect(() => {
    dispatch(updateNullImageAction(null))
  }, [dispatch])

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
      let productUpdated
      if (imageProfile) {
        productUpdated = { ...data, image: imageProfile }
      } else {
        productUpdated = { ...data }
      }
      dispatch(createProductAction(productUpdated))
      toast.success('The product was created', {
        position: 'bottom-right',
        theme: 'colored',
      })

      setOpened(false)
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

        {image && imageProfile ? (
          <input
            data-cy="register-click-event"
            type="submit"
            value="Save"
            className="button-form-login-register"
          />
        ) : image && !imageProfile ? (
          <p className="button-nosave">Save</p>
        ) : (
          <input
            data-cy="register-click-event"
            type="submit"
            value="Save"
            className="button-form-login-register"
          />
        )}
      </div>

      <div className="container-edit-image">
        <img
          className="img__upload-image"
          src={
            imageProfile
              ? imageProfile
              : 'https://www.kindpng.com/picc/m/475-4750784_restaurant-building-icon-icon-logo-restaurant-png-transparent.png'
          }
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
            name="category"
            id="category"
            className="modal-select__select"
            {...register('category', {
              required: true,
            })}>
            <option value="without_category">Without category</option>
            <option value="62cf258898829d4a6706b98a">Hamburguer</option>
            <option value="62cf25b098829d4a6706b98c">Fries</option>
            <option value="62cf25d898829d4a6706b98e">Pizza</option>
            <option value="62cf266c98829d4a6706b994">Hot Dog</option>
            <option value="62cf260b98829d4a6706b990">Sodas</option>
            <option value="62cf26a898829d4a6706b996">Sandwich</option>
            <option value="62cf262798829d4a6706b992">Dessert</option>
          </select>
        </div>
      </div>
    </form>
  )
}
