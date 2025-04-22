/**
 * WordPress dependencies
 */
import { createRoot } from '@wordpress/element';
import { RouterProvider } from './components/router';
import "./styles.scss";
import Page from './pages';

/**
 * Initialize the app
 */
const App = () => {
    return (
        <RouterProvider>
            <Page />
        </RouterProvider>
    );
};

createRoot(document.getElementById('ai-form-builder-app')).render(<App />);