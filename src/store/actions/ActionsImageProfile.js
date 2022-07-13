import { uplodadImageProfile } from '../../helpers/uplodadImageProfile'

export function updateImageAction(file) {
  return async (dispatch) => {
    const fileUrl = await uplodadImageProfile(file)
    dispatch(updateImage(fileUrl))
  }
}

const updateImage = (fileUrl) => ({
  type: 'UPDATE_IMAGE',
  payload: fileUrl,
})

export function updateNullImageAction(file) {
  return async (dispatch) => {
    dispatch(updateNullImage(file))
  }
}

const updateNullImage = (data) => ({
  type: 'UPDATE_NULL_IMAGE',
  payload: data,
})
