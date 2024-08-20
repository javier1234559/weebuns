import { Audiowide, Inter } from 'next/font/google'
import MainProviders from '@/providers/main-provider'
import { getDictionary } from '@/dictionaries/get-dictionary'
import DictionaryProvider from '@/providers/dictionary'
import { DefaultPageProps } from '@/types/common'
import { constructMetadata } from '@/utils'
import { cn } from '@/utils/cn'

import './globals.scss'
import MuiProvider from '@/providers/mui-provider'

// const fontText = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700', '800'],
//   variable: '--font-text',
// })

// const fontHeading = Audiowide({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-heading',
// })

export const metadata = constructMetadata()

export default async function RootLayout({
  children,
  params,
}: React.PropsWithChildren<DefaultPageProps>) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          // fontText.variable,
          // fontHeading.variable,
          'flex min-h-screen flex-col antialiased',
        )}
      >
        <DictionaryProvider dictionary={dictionary}>
          <MuiProvider>
            <MainProviders>
              <main className="flex flex-1 flex-col">{children}</main>
            </MainProviders>
          </MuiProvider>
        </DictionaryProvider>
      </body>
    </html>
  )
}
