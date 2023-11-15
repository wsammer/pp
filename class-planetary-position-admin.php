<?php
/**
 * 
 *
 * @package   Planetary_Position_Admin
 * @author    Sammy Wally 
 * @license   GPL-3.0+
 */

require_once(plugin_dir_path( __FILE__ ) . 'widgets/planetary-position-widget.php');

class Planetary_Position_Admin
{

    protected static $instance = null;

    protected $plugin_screen_hook_suffix = null;

    protected $options = array();

    private function __construct()
    {

        $plugin = Planetary_Position::get_instance();
        $this->plugin_slug = $plugin->get_plugin_slug();
    		$this->options = $plugin->planetary_position_get_options_array();

        add_action('admin_menu', array($this, 'planetary_position_add_plugin_admin_menu'));

        add_action( 'widgets_init', array( $this, 'pp_custom_widgets' ) );

        $plugin_basename = plugin_basename(plugin_dir_path(__FILE__) . 'planetary-position.php');
        add_filter('plugin_action_links_' . $plugin_basename, array($this, 'planetary_position_add_action_links'));

    }

    public static function get_instance()
    {

        if (null == self::$instance)
        {
            self::$instance = new self;
        }

        return self::$instance;
    }

    public function planetary_position_add_plugin_admin_menu()
    {

        $this->plugin_screen_hook_suffix = add_options_page(
                __('Planetary Position', 'planetary-position'), __('Planetary Position', 'planetary-position'), 'manage_options', 'planetary-position', array($this, 'display_plugin_admin_page')
        );
    }

    public function display_plugin_admin_page()
    {
        if (!current_user_can('manage_options'))
        {
            wp_die('You do not have sufficient permissions to access this page.');
        }

        include_once( 'views/admin.php' );

    }

    public function planetary_position_add_action_links( $links ) {

    	return array_merge(
    		array(
    			'settings' => '<a href="' . esc_url( admin_url( 'options-general.php?page=' . $this->plugin_slug ) ) . '">' . __( 'Settings', 'planetary-position' ) . '</a>'
    			),
    		$links
		);
    }

   function pp_custom_widgets(){
        register_widget( 'Planetary_Position_Widget' );
    }

    public function plugin_register_settings()
    {



    }
}

