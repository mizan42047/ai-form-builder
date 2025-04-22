<?php

namespace AIFormBuilder\Core;

defined('ABSPATH') || exit;

class Forms
{

    use \AIFormBuilder\Traits\SingletonTrait;
    /**
     * Constructor for the Form class.
     */
    public function __construct()
    {
        add_action('init', [$this, 'register_forms_post_type']);
    }

    /**
     * Register the custom post type for forms.
     * 
     * @return void
     */

    public function register_forms_post_type()
    {
        register_post_type('aifb-forms', [
            'public'             => true, // Set to false to disable front-end visibility
            'show_in_rest'       => true,  // Enable REST API support
            'supports'           => ['title', 'editor', 'custom-fields', 'thumbnail', 'excerpt'],
            'hierarchical'       => false,
            'labels'             => [
                'name'                  => __('Forms', 'ai-form-builder'),
                'singular_name'         => __('Form', 'ai-form-builder'),
                'add_new'               => __('Add New Form', 'ai-form-builder'),
                'add_new_item'          => __('Add New Form', 'ai-form-builder'),
                'edit_item'             => __('Edit Form', 'ai-form-builder'),
                'view_item'             => __('View Form', 'ai-form-builder'),
                'search_items'          => __('Search Forms', 'ai-form-builder'),
                'not_found'             => __('No forms found', 'ai-form-builder'),
                'not_found_in_trash'    => __('No forms found in trash', 'ai-form-builder'),
                'all_items'             => __('All Forms', 'ai-form-builder'),
                'menu_name'             => __('AI Form Builder', 'ai-form-builder'),
                'name_admin_bar'        => __('Form', 'ai-form-builder'),
            ],
        ]);
        
    }

}
