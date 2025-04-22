import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import { useHistory } from './router';
const Header = () => {
    const history = useHistory();
    const goToWelcome = () => {
        history.push({
            page: 'ai-form-builder-welcome',
        });
    }
    return (
        <div className="header">
            <div className="header-left" onClick={goToWelcome}>
                <img src={logo} alt="Plugin Logo" className="plugin-logo" />
            </div>
            <div className="header-right">
                <Button variant='primary' className="header-button">
                    {__('Announcement', 'ai-form-builder')}
                </Button>
                <Button variant='secondary' className="header-button">
                    {__('Change Log', 'ai-form-builder')}
                </Button>
                <Button variant='primary' className="plugin-version-badge">v1.6.0</Button>
            </div>
        </div>
    );
};

export default Header;
