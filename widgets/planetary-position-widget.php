<?php


function wptuts_scripts_final() {

    wp_register_script( 'final-script3', plugins_url( '/jquery.min.js', __FILE__ )  );
    wp_enqueue_script( 'final-script3' );

    wp_register_script( 'final-script2', plugins_url( '/jquery-ui.min.js', __FILE__ )  );
    wp_enqueue_script( 'final-script2' );

    wp_register_script( 'custom-script0', plugins_url( '/mosh.js', __FILE__ ), true  );
    wp_enqueue_script( 'custom-script0' );
    
    wp_register_script( 'final-script', plugins_url( '/load.js', __FILE__ )  );
    wp_enqueue_script( 'final-script' );  

    wp_register_style( 'custom-style', plugins_url( '/rasi-style.css', __FILE__ ) );
    wp_enqueue_style( 'custom-style' );

    wp_register_style( 'custom-style0', plugins_url( '/print2.css', __FILE__ ) );
    wp_enqueue_style( 'custom-style0' );

}

class Planetary_Position_Widget extends WP_Widget {

	function __construct() {

		$widget_ops = array( 'classname' => 'planetary_position_widget', 'description' => __( 'Planetary Position Widget', 'planetary-position' ) );
		parent::__construct( 'planetary-position-widget', __( 'Planetary Position', 'planetary-position' ), $widget_ops );
add_action( 'wp_enqueue_scripts', 'wptuts_scripts_final' );
add_shortcode('planets', array( $this, 'widget'));
	}

	function widget( $args, $instance ) {

		ob_start();

		if (is_array($args)) extract( $args );
		if (isset($instance['title'])) $title = $instance['title']; else $title = '' ;
		if (isset($args['before_title'])) $before_title = $args['before_title']; else $before_title = '';
		if (isset($args['after_title'])) $after_title =  $args['after_title']; else $after_title = '';
		?>
	<?php echo $before_title . $title . $after_title; ?>

<input class="pp_showPanchang" id="pp_showPanchang" type="hidden" value="<?php echo esc_attr(get_option( 'pp_showPanchang' )); ?>" />
<input class="pp_showTable" id="pp_showTable" type="hidden" value="<?php echo esc_attr(get_option( 'pp_showTable' )); ?>" />
<input class="pp_showWheels" id="pp_showWheels" type="hidden" value="<?php echo esc_attr(get_option( 'pp_showWheels' )); ?>" />
<input class="pp_showMoon" id="pp_showMoon" type="hidden" value="<?php echo esc_attr(get_option( 'pp_showMoon' )); ?>" />
<input class="pp_ayan" id="pp_ayan" type="hidden" value="<?php echo esc_attr(get_option( 'pp_ayan' )); ?>" />
<input class="pluginUrl" id="pluginUrl" type="hidden" value="<?php echo esc_url(plugin_dir_url( __FILE__ )); ?>" />

	<div id='rasi'>
	</div>

<?php
	wp_reset_postdata();
	ob_end_flush();
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title']     = strip_tags( $new_instance['title'] );
		return $instance;
	}

	function form( $instance ) {
		$title     = isset( $instance['title'] ) ? esc_attr( $instance['title'] ) : '';
		$post_type = isset( $instance['post_type'] ) ? esc_attr( $instance['post_type'] ) : 'post';
?>
    <p><label for="<?php echo esc_attr($this->get_field_id( 'title' )); ?>"><?php esc_attr(_e( 'Title:', 'planetary-position' )); ?></label>
    <input id="<?php echo esc_attr($this->get_field_id( 'title' )); ?>" name="<?php echo esc_attr($this->get_field_name( 'title' )); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>

<?php
	}
}
