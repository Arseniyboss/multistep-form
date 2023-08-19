'use client'

import { useFormContext } from '@contexts/FormContext'
import { Form, FormGroup, FormInput, FormError } from '@styles/form'
import StepIndicator from '@components/stepIndicator/StepIndicator'
import FormButtons from '@components/FormButtons'

const UserForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormContext()

  return (
    <Form onSubmit={handleSubmit}>
      <h1>User</h1>
      <StepIndicator />
      <FormGroup>
        <label htmlFor='name'>Name</label>
        <FormInput
          type='text'
          name='name'
          id='name'
          value={values.name}
          onChange={handleChange}
          $error={errors.name}
        />
        {errors.name && <FormError>{errors.name}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='age'>Age</label>
        <FormInput
          type='number'
          name='age'
          id='age'
          value={values.age}
          onChange={handleChange}
          $error={errors.age}
        />
        {errors.age && <FormError>{errors.age}</FormError>}
      </FormGroup>
      <FormButtons />
    </Form>
  )
}

export default UserForm
