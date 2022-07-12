export const uplodadImageProfile = async (file) => {
  const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dho6leigc/upload'

  const formData = new FormData()
  formData.append('upload_preset', 'good-food-app')
  formData.append('file', file)

  try {
    const res = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    })
    if (res.ok) {
      const cloudResponse = await res.json()
      return cloudResponse.secure_url
    } else {
      throw await res.json()
    }
  } catch (err) {
    throw err
  }
}
