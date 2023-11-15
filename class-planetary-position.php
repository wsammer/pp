<?php
/**
 * Planetary Position
 *
 * @package   Planetary_Position
 * @author    Sammy Wally 
 * @license   GPL-3.0+
 */

class Planetary_Position
{

    const VERSION = '1.5.2';

    protected $plugin_slug = 'planetary-position';

    protected static $default_options = array() ;

    protected $options = array();

    protected static $instance = null;

    private function __construct()
    {

        add_action('init', array($this, 'load_plugin_textdomain'));

        add_action('wpmu_new_blog', array($this, 'activate_new_site'));

	$this -> _setDefaultOptions();

        $this->_getCurrentOptions();

    }

    public function get_plugin_slug()
    {
        return $this->plugin_slug;
    }

    public static function get_instance()
    {

        if (null == self::$instance)
        {
            self::$instance = new self;
        }

        return self::$instance;
    }

    public static function activate($network_wide)
    {

        if (function_exists('is_multisite') && is_multisite())
        {

            if ($network_wide)
            {

                $blog_ids = self::get_blog_ids();

                foreach ($blog_ids as $blog_id)
                {

                    switch_to_blog($blog_id);
                    self::single_activate();
                }

                restore_current_blog();
            }
            else
            {
                self::single_activate();
            }
        }
        else
        {
            self::single_activate();
        }
    }

    public static function deactivate($network_wide)
    {

        if (function_exists('is_multisite') && is_multisite())
        {

            if ($network_wide)
            {

                $blog_ids = self::get_blog_ids();

                foreach ($blog_ids as $blog_id)
                {

                    switch_to_blog($blog_id);
                    self::single_deactivate();
                }

                restore_current_blog();
            }
            else
            {
                self::single_deactivate();
            }
        }
        else
        {
            self::single_deactivate();
        }
    }

    public function activate_new_site($blog_id)
    {

        if (1 !== did_action('wpmu_new_blog'))
        {
            return;
        }

        switch_to_blog($blog_id);
        self::single_activate();
        restore_current_blog();
    }

    private static function get_blog_ids()
    {

        global $wpdb;

        $sql = "SELECT blog_id FROM $wpdb->blogs
            WHERE archived = '0' AND spam = '0'
            AND deleted = '0'";

        return $wpdb->get_col($sql);
    }

    private static function single_activate()
    {
        $option_name = 'pp_plugin_options';
        update_option($option_name, self :: $default_options);
    }

    private static function single_deactivate()
    {
        $option_name = 'pp_plugin_options';
        // delete_option($option_name);
    }

    public function load_plugin_textdomain()
    {

        $domain = $this->plugin_slug;
        $locale = apply_filters('plugin_locale', get_locale(), $domain);

        load_textdomain($domain, trailingslashit(WP_LANG_DIR) . $domain . '/' . $domain . '-' . $locale . '.mo');
        load_plugin_textdomain($domain, FALSE, basename(dirname(__FILE__)) . '/languages');
    }

    private function _getCurrentOptions()
    {
	$pp_options = array_merge( self :: $default_options , (array) get_option( 'pp_plugin_options', array() ) );
        $this->options = $pp_options;
    }

    private function _setDefaultOptions()
    {
        if( !get_option( 'pp_plugin_options' ) ) {
            update_option('pp_plugin_options', self :: $default_options);
        }
    }

    private function _removePluginOptions()
    {
        delete_option('pp_plugin_options');
    }

    public function planetary_position_get_options_array(){
	return $this->options;
    }

}
