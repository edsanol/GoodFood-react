import axios from 'axios'
const BASE_URL = process.env.REACT_APP_URL_BACKEND

export const actionsChangeHome = (val) => ({
  type: 'CHANGE_VIEW',
  payload: val,
})

export const getAllOrdersAction = (val) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || ''
      if (!token) {
        return false
      }
      const response = await axios.get(`${BASE_URL}/api/order`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-token': token,
        },
      })
      dispatch(getAllOrders(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const getAllOrders = (val) => ({
  type: 'GET_ALL_ORDERS',
  payload: val,
})

export const updateSuccessOrderAction = (val) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || ''
      if (!token) {
        return false
      }
      const response = await axios.put(
        `${BASE_URL}/api/order/success/${val}`,
        {
          data: true,
        },
        {
          headers: {
            'x-token': token,
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      )
      dispatch(updateSuccessOrder(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const updateSuccessOrder = (val) => ({
  type: 'UPDATE_SUCCESS_ORDER',
  payload: val,
})

export const getDinerByIdAction = (val) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token') || ''
      if (!token) {
        return false
      }
      const response = await axios.get(`${BASE_URL}/api/diner/${val}`, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-token': token,
        },
      })
      dispatch(getDinerById(response.data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

const getDinerById = (val) => ({
  type: 'GET_DINER_BY_ID',
  payload: val,
})
