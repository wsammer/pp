<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package   Planetary_Position
 * @author    Sammy Wally
 * @license   GPL-3.0+
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

delete_option( 'pp_plugin_options' );
