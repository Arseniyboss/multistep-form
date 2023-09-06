import { ValidationSchema } from '@hooks/useForm'
import {
  USERNAME_REQUIRED,
  USERNAME_INVALID,
  AGE_REQUIRED,
  AGE_INVALID,
} from '@validation/constants/errors'
import { USERNAME_PATTERN } from '@validation/constants/patterns'

type Values = {
  name: string
  age: string
}

export const validationSchema: ValidationSchema<Values> = {
  name: {
    required: { value: true, message: USERNAME_REQUIRED },
    pattern: { value: USERNAME_PATTERN, message: USERNAME_INVALID },
  },
  age: {
    required: { value: true, message: AGE_REQUIRED },
    isValid: {
      value: (age) => parseInt(age) >= 18 && parseInt(age) <= 100,
      message: AGE_INVALID,
    },
  },
}
