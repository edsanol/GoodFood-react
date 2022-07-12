import axios from 'axios'
import { toast } from 'react-toastify'
const BASE_URL = process.env.REACT_APP_URL_BACKEND

export function registerUserAction(data) {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/restaurant/register`,
        {
          admin: data.administrator,
          name: data.restaurant,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          city: data.city,
          logo: data.image,
        },
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      if (response.data.ok) {
        localStorage.setItem('token', response.data.token)
      }

      dispatch(registerUser(response.data.data))
    } catch (error) {
      console.log(error)
      toast.error('email already exists', {
        position: 'bottom-right',
        theme: 'colored',
      })
    }
  }
}

const registerUser = (register) => ({
  type: 'CREATE_RESTAURANT',
  payload: register,
});
