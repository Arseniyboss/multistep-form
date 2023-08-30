import { Values, steps } from '@contexts/FormContext'
import { checkErrors } from './checkErrors'

export const getStepErrors = (values: Values) => {
  const stepErrors: boolean[] = []

  steps.forEach((step) => {
    const currentStepErrors = checkErrors(values, step.validationSchema)
    stepErrors.push(currentStepErrors)
  })

  return stepErrors
}
