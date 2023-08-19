import { FieldValidation } from '@hooks/useForm'
import {
  USERNAME_REQUIRED,
  USERNAME_INVALID,
  AGE_REQUIRED,
  MIN_AGE_INVALID,
  MAX_AGE_INVALID,
} from '@validation/constants/errors'
import { USERNAME_PATTERN } from '@validation/constants/patterns'

type InitialValues = {
  name: string
  age: string
}

export const validationSchema: FieldValidation<InitialValues> = {
  name: {
    required: { value: true, message: USERNAME_REQUIRED },
    pattern: { value: USERNAME_PATTERN, message: USERNAME_INVALID },
  },
  age: {
    required: { value: true, message: AGE_REQUIRED },
    min: { value: 18, message: MIN_AGE_INVALID },
    max: { value: 100, message: MAX_AGE_INVALID },
  },
}
