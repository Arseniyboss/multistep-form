import { FieldValidation } from '@hooks/useForm'
import {
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
  PASSWORD_INVALID,
} from '@validation/constants/errors'
import { EMAIL_PATTERN } from '@validation/constants/patterns'

type InitialValues = {
  email: string
  password: string
}

export const validationSchema: FieldValidation<InitialValues> = {
  email: {
    required: { value: true, message: EMAIL_REQUIRED },
    pattern: { value: EMAIL_PATTERN, message: EMAIL_INVALID },
  },
  password: {
    required: { value: true, message: PASSWORD_REQUIRED },
    minLength: { value: 6, message: PASSWORD_INVALID },
  },
}
