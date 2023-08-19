'use client'

import { useFormContext } from '@contexts/FormContext'
import { Form, FormGroup, FormInput, FormError } from '@styles/form'
import StepIndicator from '@components/stepIndicator/StepIndicator'
import FormButtons from '@components/FormButtons'

const AccountForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormContext()

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Account</h1>
      <StepIndicator />
      <FormGroup>
        <label htmlFor='email'>Email</label>
        <FormInput
          type='email'
          name='email'
          id='email'
          value={values.email}
          onChange={handleChange}
          $error={errors.email}
        />
        {errors.email && <FormError>{errors.email}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>Password</label>
        <FormInput
          type='password'
          name='password'
          id='password'
          value={values.password}
          onChange={handleChange}
          $error={errors.password}
          autoComplete='on'
        />
        {errors.password && <FormError>{errors.password}</FormError>}
      </FormGroup>
      <FormButtons />
    </Form>
  )
}

export default AccountForm
