import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 350px;
  max-width: 80vw;
  padding: 2rem;
  color: #555;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.25rem darkgrey;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

type Props = {
  $error?: string
}

export const FormInput = styled.input<Props>`
  outline: none;
  border-radius: 0.25rem;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: ${({ $error }) => ($error ? '2px solid red' : '1px solid #ddd')};

  &:focus {
    border: ${({ $error }) => !$error && '1px solid #aaa'};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  border: none;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    cursor: initial;
    opacity: 0.5;
  }
`

export const FormButton = styled(Button)`
  background: var(--blue);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 2rem;
  letter-spacing: 1px;
  align-self: flex-end;

  &:hover {
    background-image: linear-gradient(rgb(0 0 0 / 25%) 0 0);
  }
`

export const FormError = styled.p`
  color: red;
  font-weight: bold;
`
