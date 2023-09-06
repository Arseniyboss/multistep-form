import { validate } from './validate'
import { ValidationSchema } from '@hooks/useForm'

export const checkErrors = <T extends Record<keyof T, string>>(
  values: T,
  validationSchema: ValidationSchema<T>
) => {
  const errors = validate(values, validationSchema)
  return Object.keys(errors).length > 0
}
