import SideBarLeft from '@/components/layout/siderbar';
import { LocaleKeys } from '@/types/locales';

interface Props {
    dictionary: LocaleKeys
}

function AppView({ dictionary }: Props) {
    return (
        <section className="bg-neutron">
            This is a main view
            <SideBarLeft />
        </section>
    )
}
export default AppView;