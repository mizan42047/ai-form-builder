<?php
/**
 * Admin Class
 *
 * @package AIFormBuilder
 * @since 0.1.0
 */

namespace AIFormBuilder\Admin;

/**
 * Admin class
 * Handles the admin functionality of the plugin
 */
class Admin {
    use \AIFormBuilder\Traits\SingletonTrait;

    /**
     * Constructor
     */
    private function __construct() {
        // Register admin menu
        add_action('admin_menu', [$this, 'register_admin_menu']);
        // Enqueue admin scripts
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
        // Remove admin notices
        add_action('in_admin_header', [$this, 'disable_admin_notices'], PHP_INT_MAX);
    }

    /**
     * Enqueue admin assets
     *
     * @param string $hook The current admin page hook.
     * @return void
     */
    public function enqueue_admin_assets($hook) {
        if (strpos($hook, 'ai-form-builder') === false) {
            return;
        }
        // Ensure the correct path to your asset file
        $admin_asset_path = AIFORMBUILDER_PLUGIN_DIR . 'build/admin/index.asset.php';
       
        if (file_exists($admin_asset_path)) {
            $admin_asset = include_once $admin_asset_path;

            // Enqueue JavaScript file
            wp_enqueue_script(
                'ai-form-builder-admin',
                AIFORMBUILDER_PLUGIN_URL . 'build/admin/index.js',
                $admin_asset['dependencies'],
                $admin_asset['version'],
                true
            );

            // Enqueue CSS file
            wp_enqueue_style(
                'ai-form-builder-admin',
                AIFORMBUILDER_PLUGIN_URL . 'build/admin/index.css',
                ['wp-components'],
                $admin_asset['version']
            );
        }
    }

    /**
     * Register admin menu
     *
     * @return void
     */
    public function register_admin_menu() {
        // Add the main menu page
        add_menu_page(
            __('AI Form Builder', 'ai-form-builder'),
            __('AI Form Builder', 'ai-form-builder'),
            'manage_options',
            'ai-form-builder',
            null, // Placeholder, you can add a main page render function here
            'dashicons-feedback',
            30
        );

        // Add submenus
        $this->add_submenus();
    }

    /**
     * Add the submenus for the AI Form Builder menu
     *
     * @return void
     */
    private function add_submenus() {
        // Add Welcome submenu
        add_submenu_page(
            'ai-form-builder',
            __('Welcome', 'ai-form-builder'),
            __('Welcome', 'ai-form-builder'),
            'manage_options',
            'ai-form-builder-welcome',
            [$this, 'render_admin_root_markup']
        );

        // create form submenu
        add_submenu_page(
            'ai-form-builder',
            __('New Form', 'ai-form-builder'),
            __('New Form', 'ai-form-builder'),
            'manage_options',
            'ai-form-builder-create-form',
            [$this, 'render_admin_root_markup']
        );

        // Add Forms submenu
        add_submenu_page(
            'ai-form-builder',
            __('Forms', 'ai-form-builder'),
            __('Forms', 'ai-form-builder'),
            'manage_options',
            'ai-form-builder-forms',
            [$this, 'render_admin_root_markup']
        );

        // Add entries submenu
        add_submenu_page(
            'ai-form-builder',
            __('Entries', 'ai-form-builder'),
            __('Entries', 'ai-form-builder'),
            'manage_options',
            'ai-form-builder-entries',
            [$this, 'render_admin_root_markup']
        );

        // Remove default first submenu item
        global $submenu;
        if (isset($submenu['ai-form-builder'])) {
            unset($submenu['ai-form-builder'][0]);
        }
    }

    /**
     * Render the admin root markup (React app container)
     *
     * @return void
     */
    public function render_admin_root_markup() {
        echo '<div id="ai-form-builder-app"></div>';
    }

    /**
     * Disable admin notices
     *
     * @return void
     */
    public function disable_admin_notices() {
        if (isset($_GET['page']) && str_contains($_GET['page'], 'ai-form-builder')) {
            // Remove all admin notices
            remove_all_actions('admin_notices');
            remove_all_actions('all_admin_notices');
            remove_all_actions('network_admin_notices');
        }
    }
}
