import { useLocation } from '../components/router';
import { useMemo, useEffect } from '@wordpress/element';
import Header from '../components/header';
import Forms from './forms';
import Welcome from './welcome';
import Entries from './Entries';
import CreateForm from './create-form';
import clsx from 'clsx';

const Page = () => {
    const location = useLocation();

    const page = location?.params?.page;

    const RouteElement = useMemo(() => {
        switch (page) {
            case 'ai-form-builder-forms':
                return <Forms />;
            case 'ai-form-builder-entries':
                return <Entries />;
            case 'ai-form-builder-create-form':
                return <CreateForm />;
            default:
                return <Welcome />;
        }
    }, [page]);

    useEffect(() => {
        const subMenuItems = document.querySelectorAll('.toplevel_page_ai-form-builder ul li');
        subMenuItems.forEach((item) => {
            const link = item.querySelector('a');
            if (link) {
                const href = link.getAttribute('href');
                const isCurrent = href.includes(page);
                if (isCurrent) {
                    item.classList.add('current');
                    link.classList.add('current');
                } else {
                    item.classList.remove('current');
                    link.classList.remove('current');
                }
            }
        });
    }, [page]);

    return (
        <div className="ai-form-builder-app">
            <Header />
            <div className={clsx('ai-form-builder-page', { [page]: page })}>
                {RouteElement}
            </div>
        </div>
    );
}
export default Page;