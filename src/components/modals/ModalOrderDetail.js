import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDinerByIdAction } from '../../store/actions/ActionHome'
import '../../assets/styles/components/modals/ModalOrderDetail.css'

export const ModalOrderDetail = ({ setOpened, order }) => {
  const dispatch = useDispatch()
  const { diner } = useSelector((state) => state.homeReducer)

  useEffect(() => {
    dispatch(getDinerByIdAction(order.dinerId))
  }, [dispatch, order.dinerId])

  return (
    <div>
      <div>
        <h2>User Information</h2>
        <hr />
      </div>
      <div>
        <div className="form__div-modal">
          <label>Name</label>
          <input
            type="text"
            placeholder={diner.name}
            readOnly
            className="form__input-modal"
          />
        </div>
        <div className="form__div-modal">
          <label>Email</label>
          <input
            type="text"
            placeholder={diner.email}
            readOnly
            className="form__input-modal"
          />
        </div>
        <div className="form__div-modal">
          <label>Phone</label>
          <input
            type="text"
            placeholder={diner.phone}
            readOnly
            className="form__input-modal"
          />
        </div>
        <div className="form__div-modal">
          <label>Address</label>
          <input
            type="text"
            placeholder={diner.address}
            readOnly
            className="form__input-modal"
          />
        </div>
        <div className="form__div-modal">
          <label>City</label>
          <input
            type="text"
            placeholder={diner.city}
            readOnly
            className="form__input-modal"
          />
        </div>
      </div>
    </div>
  )
}
