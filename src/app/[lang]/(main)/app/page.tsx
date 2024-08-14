import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'
import AppView from '@/views/app'

async function AppPage({ params }: DefaultPageProps) {
  const dictionary = await getDictionary(params.lang)

  return <AppView dictionary={dictionary} />
}

export default AppPage
