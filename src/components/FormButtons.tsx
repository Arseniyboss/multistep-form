'use client'

import { useFormContext } from '@contexts/FormContext'
import { ButtonContainer, FormButton } from '@styles/form'

const FormButtons = () => {
  const { disabled, isFirstStep, isLastStep, back } = useFormContext()
  return isFirstStep ? (
    <FormButton disabled={disabled}>Next</FormButton>
  ) : (
    <ButtonContainer>
      <FormButton type='button' disabled={disabled} onClick={back}>
        Back
      </FormButton>
      <FormButton disabled={disabled}>
        {isLastStep ? 'Submit' : 'Next'}
      </FormButton>
    </ButtonContainer>
  )
}

export default FormButtons
