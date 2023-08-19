import './globals.css'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { FormContextProvider } from '@contexts/FormContext'
import StyledComponentsRegistry from '@lib/registry'

type Props = {
  children: ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multistep Form',
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <FormContextProvider>
            <main>{children}</main>
          </FormContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
