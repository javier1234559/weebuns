import { getDictionary } from '@/dictionaries/get-dictionary'
import { DefaultPageProps } from '@/types/common'
import SignInView from '@/views/sign-in'

async function SignInPage({ params }: DefaultPageProps) {
  const dictionary = await getDictionary(params.lang)

  return <SignInView dictionary={dictionary} />
}

export default SignInPage
