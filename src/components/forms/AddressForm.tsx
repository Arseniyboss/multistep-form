'use client'

import { useFormContext } from '@contexts/FormContext'
import { Form, FormGroup, FormInput, FormError } from '@styles/form'
import StepIndicator from '@components/stepIndicator/StepIndicator'
import FormButtons from '@components/FormButtons'

const AddressForm = () => {
  const { values, errors, handleChange, handleSubmit } = useFormContext()

  return (
    <Form onSubmit={handleSubmit}>
      <h1>Address</h1>
      <StepIndicator />
      <FormGroup>
        <label htmlFor='street'>Street</label>
        <FormInput
          type='text'
          name='street'
          id='street'
          value={values.street}
          onChange={handleChange}
          $error={errors.street}
        />
        {errors.street && <FormError>{errors.street}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='country'>Country</label>
        <FormInput
          type='text'
          name='country'
          id='country'
          value={values.country}
          onChange={handleChange}
          $error={errors.country}
        />
        {errors.country && <FormError>{errors.country}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='city'>City</label>
        <FormInput
          type='text'
          name='city'
          id='city'
          value={values.city}
          onChange={handleChange}
          $error={errors.city}
        />
        {errors.city && <FormError>{errors.city}</FormError>}
      </FormGroup>
      <FormGroup>
        <label htmlFor='postalCode'>Postal Code</label>
        <FormInput
          type='text'
          name='postalCode'
          id='postalCode'
          value={values.postalCode}
          onChange={handleChange}
          $error={errors.postalCode}
        />
        {errors.postalCode && <FormError>{errors.postalCode}</FormError>}
      </FormGroup>
      <FormButtons />
    </Form>
  )
}

export default AddressForm
