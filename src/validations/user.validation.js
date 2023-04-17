import * as yup from 'yup'

export const userValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  pasword: yup.string().required().min(6),
})

