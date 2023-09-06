import { ValidationSchema } from '@hooks/useForm'
import {
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_REQUIRED,
  PASSWORD_INVALID,
} from '@validation/constants/errors'
import { EMAIL_PATTERN } from '@validation/constants/patterns'

type Values = {
  email: string
  password: string
}

export const validationSchema: ValidationSchema<Values> = {
  email: {
    required: { value: true, message: EMAIL_REQUIRED },
    pattern: { value: EMAIL_PATTERN, message: EMAIL_INVALID },
  },
  password: {
    required: { value: true, message: PASSWORD_REQUIRED },
    isValid: {
      value: (password) => password.length >= 6,
      message: PASSWORD_INVALID,
    },
  },
}
