import { validate } from './validate'
import { FieldValidation } from '@hooks/useForm'

export const checkErrors = <T>(
  values: T,
  validationSchema: FieldValidation<T>
) => {
  const errors = validate(values, validationSchema)
  return Object.keys(errors).length > 0
}
