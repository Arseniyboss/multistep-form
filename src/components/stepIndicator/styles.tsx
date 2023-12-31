'use client'

import styled from 'styled-components'
import { Button, ButtonContainer } from '@styles/form'

type StepContainerProps = {
  width: string
}

type StepWrapperProps = {
  $completed: boolean
  $active: boolean
}

export const StepContainer = styled(ButtonContainer)<StepContainerProps>`
  position: relative;
  margin-bottom: 1.7rem;

  &::before,
  &::after {
    content: '';
    height: 4px;
    position: absolute;
    border-radius: 3px;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    background: #ddd;
    width: 100%;
  }

  &::after {
    background: var(--blue);
    width: ${({ width }) => width};
  }
`

export const StepWrapper = styled(Button)<StepWrapperProps>`
  --size: 40px;
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
  z-index: 1;
  color: ${({ $completed, $active }) => {
    return $active ? 'var(--lightblue)' : $completed ? 'var(--blue)' : '#ddd'
  }};
  border: 3px solid
    ${({ $completed, $active }) => {
      return $active ? 'var(--lightblue)' : $completed ? 'var(--blue)' : '#ddd'
    }};

  :first-child {
    font-size: 1.3rem;
  }

  &:disabled {
    opacity: 1;
  }
`

export const StepLabel = styled.span`
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
`

export const CheckMark = styled.div`
  font-weight: 600;
  scale: -1 1;
  rotate: 40deg;
`
