<?php
/**
 * Plugin Name:       AI Form Builder
 * Description:       Starter plugin for bdthemes.
 * Requires at least: 6.8
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            bdthemes
 * Author URI:        https://bdthemes.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ai-form-builder
 */

use AIFormBuilder\Core\Blocks;
use AIFormBuilder\Core\Enqueue;
use AIFormBuilder\Core\ExtenSions;
use AIFormBuilder\Admin\Admin;
use AIFormBuilder\Core\Forms;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Main AIFormBuilder Class.
 * Implements the singleton pattern to ensure only one instance is running.
 */
final class AIFormBuilder {
    
    /**
     * Plugin version.
     *
     * @var string
     */
    const VERSION = '0.1.0';

    /**
     * Holds the instance of this class.
     *
     * @var AIFormBuilder|null
     */
    private static $instance = null;

    /**
     * Private constructor for singleton pattern.
     * Prevents the direct creation of an object from this class.
     */
    private function __construct() {
        // Define plugin constants.
        $this->define_constants();

        // Load after plugin activation.
        register_activation_hook( __FILE__, array( $this, 'activated_plugin' ) );

        // Load autoloader (vendor/autoload.php).
        require_once AIFORMBUILDER_PLUGIN_DIR . 'vendor/autoload.php';

        // Initialize plugin hooks.
        add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );
    }

    /**
     * Defines plugin constants for easy access across the plugin.
     *
     * @return void
     */
    public function define_constants() {
        define( 'AIFORMBUILDER_PLUGIN_VERSION', self::VERSION );
        define( 'AIFORMBUILDER_PLUGIN_NAME', 'AI Form Builder' );
        define( 'AIFORMBUILDER_PLUGIN_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );
        define( 'AIFORMBUILDER_PLUGIN_DIR', trailingslashit( plugin_dir_path( __FILE__ ) ) );
        define( 'AIFORMBUILDER_INCLUDES_DIR', AIFORMBUILDER_PLUGIN_DIR . 'includes/' );
        define( 'AIFORMBUILDER_STYLES_DIR', AIFORMBUILDER_PLUGIN_DIR . 'build/styles/' );
        define( 'AIFORMBUILDER_BLOCKS_DIR', AIFORMBUILDER_PLUGIN_DIR . 'build/blocks/' );
        define( 'AIFORMBUILDER_EXTENSIONS_DIR', AIFORMBUILDER_PLUGIN_DIR . 'build/extensions/' );
    }

    /**
     * Handles tasks to run upon plugin activation.
     * Sets version and installed time in the WordPress options table.
     *
     * @return void
     */
    public function activated_plugin() {
        // Update plugin version in the options table.
        update_option( 'aiformbuilder_version', AIFORMBUILDER_PLUGIN_VERSION );

        // Set installed time if it doesn't exist.
        if ( ! get_option( 'aiformbuilder_installed_time' ) ) {
            add_option( 'aiformbuilder_installed_time', time() );
        }
    }

    /**
     * Fires once all plugins have been loaded.
     * Initializes textdomain and other plugin-wide features.
     *
     * @return void
     */
    public function plugins_loaded() {
        // Load plugin textdomain for translations.
        load_plugin_textdomain( 'ai-form-builder', false, AIFORMBUILDER_PLUGIN_DIR . 'languages/' );

        // Add a custom class to the admin body tag.
        add_filter( 'admin_body_class', function( $classes ) {
            return $classes . ' ai-form-builder';
        });

        // Add custom classes to the front-end body tag.
        add_filter( 'body_class', function( $classes ) {
            return array_merge( $classes, array( 'ai-form-builder', 'ai-form-builder-frontend' ) );
        });

        add_action( 'admin_enqueue_scripts', [$this, 'admin_enqueue_scripts'] );

        // Load plugin classes.
        Blocks::get_instance();
        Enqueue::get_instance();
        ExtenSions::get_instance();
        Admin::get_instance();
        Forms::get_instance();
    }

    public function admin_enqueue_scripts($screen) {
        wp_localize_script( 'wp-block-editor', 'boilerplateBlocks', [
            'ajaxurl' => admin_url( 'admin-ajax.php' ),
            'screen' => $screen
        ]);
    }

    /**
     * Ensures that only one instance of the plugin is running.
     *
     * @return AIFormBuilder
     */
    public static function instance() {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Prevents the plugin from being cloned.
     */
    public function __clone() {}

    /**
     * Prevents the plugin from being unserialized.
     */
    public function __wakeup() {}
}

/**
 * Kickstart the AIFormBuilder plugin.
 *
 * @return AIFormBuilder
 */
function aiformbuilder() {
    return AIFormBuilder::instance();
}
aiformbuilder();
