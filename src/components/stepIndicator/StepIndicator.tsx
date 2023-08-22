'use client'

import { steps, useFormContext } from '@contexts/FormContext'
import { StepContainer, StepWrapper, CheckMark, StepLabel } from './styles'

const StepIndicator = () => {
  const { disabled, disabledSteps, stepErrors, stepIndex, setStepIndex } =
    useFormContext()
  const width = `${(100 / (steps.length - 1)) * stepIndex}%`
  return (
    <StepContainer width={width}>
      {steps.map((step, index) => (
        <StepWrapper
          key={index}
          $disabled={index === stepIndex || disabled || disabledSteps[index]}
          $completed={!stepErrors[index]}
          $active={index === stepIndex}
          onClick={() => setStepIndex(index)}
        >
          {!stepErrors[index] ? (
            <CheckMark>L</CheckMark>
          ) : (
            <span>{index + 1}</span>
          )}
          <StepLabel>{step.label}</StepLabel>
        </StepWrapper>
      ))}
    </StepContainer>
  )
}

export default StepIndicator
