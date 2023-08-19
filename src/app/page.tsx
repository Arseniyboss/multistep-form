'use client'

import { useFormContext } from '@contexts/FormContext'
import { FormContainer } from '@styles/form'

const Home = () => {
  const { step } = useFormContext()
  return <FormContainer>{step}</FormContainer>
}

export default Home
