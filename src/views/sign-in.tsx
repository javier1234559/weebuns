import SignInForm from '@/components/form/sign-in-form'
import { LocaleKeys } from '@/types/locales';
import { Button } from '@mui/material';


interface Props {
    dictionary: LocaleKeys
}

function SignInView({ dictionary }: Props) {
    return (
        <section className="bg-neutron">
            <SignInForm dictionary={dictionary} />
        </section>
    )
}
export default SignInView;