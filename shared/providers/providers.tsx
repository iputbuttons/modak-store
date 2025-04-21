import { PropsWithChildren } from 'react'
import { ReactQuery } from './reactQuery.provider'
import { FontProvider } from './fonts.provider'
import { ThemeProvider } from './themeProvider'
import { KeyboardAvoidingProvider } from './keyboardAvoid.provider'

export const Providers = ({ children }: PropsWithChildren) => (
  <ReactQuery>
    <FontProvider>
      <ThemeProvider>
        <KeyboardAvoidingProvider>{children}</KeyboardAvoidingProvider>
      </ThemeProvider>
    </FontProvider>
  </ReactQuery>
)
