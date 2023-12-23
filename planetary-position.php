<?php
/**
 * Planetary Position Plugin
 *
 * @wordpress-plugin
 * Plugin Name:       Planetary Position
 * Description:       Plugin to display Planetary Positions
 * Version:           1.5.3
 * Author:            Sammy Wally
 * License:           GPL-3.0+
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.txt
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once( plugin_dir_path( __FILE__ ) . 'class-planetary-position.php' );
require_once( plugin_dir_path( __FILE__ ) . 'class-planetary-position-admin.php' );

register_activation_hook( __FILE__, array( 'Planetary_Position', 'activate' ) );
register_deactivation_hook( __FILE__, array( 'Planetary_Position', 'deactivate' ) );

add_action( 'plugins_loaded', array( 'Planetary_Position', 'get_instance' ) );
add_action( 'plugins_loaded', array( 'Planetary_Position_Admin', 'get_instance' ) );
