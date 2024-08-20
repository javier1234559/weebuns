import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'
import FooterLanguageSelect from '@/components/common/language-select'
import AppLink from '@/components/common/app-link'
import RouteNames from '@/constants/routes'

export default async function Home({ params }: DefaultPageProps) {
  const t = await getDictionary(params.lang)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-blue-light text-4xl leading-4">{t.Hello}</h1>
      <div>
        <div>helllo</div>
        <AppLink href={RouteNames.App}>Move to Main App</AppLink>
        <FooterLanguageSelect />
      </div>
    </main>
  )
}
