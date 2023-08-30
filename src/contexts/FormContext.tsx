'use client'

import {
  Dispatch,
  SetStateAction,
  ReactElement,
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'
import {
  Errors,
  ChangeEventType,
  FormEventType,
  useForm,
  FieldValidation,
} from '@hooks/useForm'
import { validationSchema as userSchema } from '@validation/schemas/userSchema'
import { validationSchema as addressSchema } from '@validation/schemas/addressSchema'
import { validationSchema as accountSchema } from '@validation/schemas/accountSchema'
import { getStepErrors } from '@validation/utils/getStepErrors'
import { getDisabledSteps } from '@validation/utils/getDisabledSteps'
import UserForm from '@components/forms/UserForm'
import AddressForm from '@components/forms/AddressForm'
import AccountForm from '@components/forms/AccountForm'

type Props = {
  children: ReactNode
}

export type Step = {
  step: ReactElement
  label: string
  validationSchema: FieldValidation<Values>
}

export type Values = {
  name: string
  age: string
  street: string
  country: string
  city: string
  postalCode: string
  email: string
  password: string
}

type FormContextType = {
  stepIndex: number
  step: ReactElement
  isFirstStep: boolean
  isLastStep: boolean
  disabled: boolean
  disabledSteps: boolean[]
  stepErrors: boolean[]
  values: Values
  errors: Errors<Values>
  back: () => void
  setStepIndex: Dispatch<SetStateAction<number>>
  handleChange: (e: ChangeEventType) => void
  handleSubmit: (e: FormEventType) => void
}

export const steps: Step[] = [
  { step: <UserForm />, label: 'User', validationSchema: userSchema },
  { step: <AddressForm />, label: 'Address', validationSchema: addressSchema },
  { step: <AccountForm />, label: 'Account', validationSchema: accountSchema },
]

const initialValues: Values = {
  name: '',
  age: '',
  street: '',
  country: '',
  city: '',
  postalCode: '',
  email: '',
  password: '',
}

export const FormContext = createContext<FormContextType | null>(null)

export const FormContextProvider = ({ children }: Props) => {
  const [stepIndex, setStepIndex] = useState(0)
  const [success, setSuccess] = useState(false)

  const { step, validationSchema } = steps[stepIndex]

  const isFirstStep = stepIndex === 0
  const isLastStep = stepIndex === steps.length - 1

  const next = () => {
    setStepIndex((index) => index + 1)
  }

  const back = () => {
    setStepIndex((index) => index - 1)
  }

  const onSubmit = () => {
    if (!isLastStep) return next()
    setSuccess(true)
    setValues(initialValues)
    alert('Success!')
  }

  useEffect(() => {
    if (success) {
      setStepIndex(0)
      setSuccess(false)
    }
  }, [success, setStepIndex])

  const { values, setValues, errors, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validationSchema,
  })

  const disabled = Object.keys(errors).length > 0

  const stepErrors = getStepErrors(values)
  const disabledSteps = getDisabledSteps(stepErrors)

  const value = {
    stepIndex,
    step,
    isFirstStep,
    isLastStep,
    disabled,
    disabledSteps,
    stepErrors,
    values,
    errors,
    back,
    setStepIndex,
    handleChange,
    handleSubmit,
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useFormContext = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider')
  }

  return context
}
