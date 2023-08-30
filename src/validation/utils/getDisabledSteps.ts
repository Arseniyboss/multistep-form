export const getDisabledSteps = (stepErrors: boolean[]) => {
  const disabledSteps = [false]

  stepErrors.forEach((stepError, index) => {
    if (index < stepErrors.length - 1) {
      const disabledStep = disabledSteps[index] || stepError
      disabledSteps.push(disabledStep)
    }
  })

  return disabledSteps
}
