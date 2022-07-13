import axios from 'axios'
import { toast } from 'react-toastify'
const BASE_URL = process.env.REACT_APP_URL_BACKEND

export function createProductAction(data) {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || ''
      if (!token) {
        return false
      }
      const response = await axios.post(
        `${BASE_URL}/api/food`,
        {
          categoryId: data.category,
          name: data.name,
          description: data.description,
          price: data.price,
          image: data.image,
          rating: "-",
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'x-token': token,
          },
        }
      )

      dispatch(createProduct(response.data.data))
    } catch (error) {
      console.log(error)
      toast.error('email already exists', {
        position: 'bottom-right',
        theme: 'colored',
      })
    }
  }
}

const createProduct = (product) => ({
  type: 'CREATE_PRODUCT',
  payload: product,
})

export const getProductsByRestaurantAction = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || ''
      if (!token) {
        return false
      }
      const response = await axios.get(`${BASE_URL}/api/food`, {
        headers: {
          'x-token': token,
        },
      })

      dispatch(getProductsByRestaurant(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const getProductsByRestaurant = (products) => ({
  type: 'GET_PRODUCTS_BY_RESTAURANT',
  payload: products,
})
