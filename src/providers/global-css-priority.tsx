import { StyledEngineProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function GlobalCssPriority({ children }: Props) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
}
