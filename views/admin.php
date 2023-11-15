<?php
/**
 * Represents the view for the administration dashboard.
 *
 * @package   Planetary_Position
 * @author    Sammy Wally 
 * @license   GPL-3.0+
 */

?>
<?php
if ( !empty($_POST) ) {
	@update_option("pp_showPanchang", filter_var($_POST['pp_showPanchang'], FILTER_VALIDATE_BOOLEAN));
	@update_option("pp_showTable", filter_var($_POST['pp_showTable'], FILTER_VALIDATE_BOOLEAN));
	@update_option("pp_showMoon", filter_var($_POST['pp_showMoon'], FILTER_VALIDATE_BOOLEAN));
	@update_option("pp_showWheels", filter_var($_POST['pp_showWheels'], FILTER_VALIDATE_BOOLEAN));
	@update_option("pp_ayan", $_POST['pp_ayan']);
}
?>
<div class="wrap">


  <h2><?php echo esc_html( get_admin_page_title() ); ?></h2>

       <form name="pp_form" action="" method="post">
		<div>
		<label>Show Panchang Details&nbsp;&nbsp;<input type="checkbox" name="pp_showPanchang" id="pp_showPanchang" <?php echo (get_option('pp_showPanchang')) ? ' checked="checked"' : '' ?> /></label><br/>
		<label>Show Planetary Position Table&nbsp;&nbsp;<input type="checkbox" name="pp_showTable" id="pp_showTable" <?php echo (get_option('pp_showTable')) ? ' checked="checked"' : '' ?> /></label><br/>
		<label>Show Sidereal Nakshatra wheel and Tropical Zodiac wheel&nbsp;&nbsp;<input type="checkbox" name="pp_showWheels" id="pp_showWheels" <?php echo (get_option('pp_showWheels')) ? ' checked="checked"' : '' ?> /></label><br/>
		<label>Show Moon Phase&nbsp;&nbsp;<input type="checkbox" name="pp_showMoon" id="pp_showMoon" <?php echo (get_option('pp_showMoon')) ? ' checked="checked"' : '' ?> /></label>
		</div>
		<div ><label>Ayanmsa (leave as is if unsure):</label>
		<select id="pp_ayan" name="pp_ayan" style="width: 11em;">
		<option value="0" <?php $_POST['pp_ayan'] == 0 ? print ' selected="selected"' : print ''; ?>>True Chitrapaksha</option>
		<option value="1" <?php $_POST['pp_ayan'] == 1 ? print ' selected="selected"' : print ''; ?>>Lahiri</option>
		<option value="2" <?php $_POST['pp_ayan'] == 2 ? print ' selected="selected"' : print ''; ?>>Fagan/Bradley</option>
		<option value="3" <?php $_POST['pp_ayan'] == 3 ? print ' selected="selected"' : print ''; ?>>True Revati</option>
		<option value="4" <?php $_POST['pp_ayan'] == 4 ? print ' selected="selected"' : print ''; ?>>True Pushya</option>
		<option value="5" <?php $_POST['pp_ayan'] == 5 ? print ' selected="selected"' : print ''; ?>>True Mula</option>
		<option value="6" <?php $_POST['pp_ayan'] == 6 ? print ' selected="selected"' : print ''; ?>>Galactic Center at 0 Sag</option>
		<option value="7" <?php $_POST['pp_ayan'] == 7 ? print ' selected="selected"' : print ''; ?>>De Luce</option>
		<option value="8" <?php $_POST['pp_ayan'] == 8 ? print ' selected="selected"' : print ''; ?>>Raman</option>
		<option value="9" <?php $_POST['pp_ayan'] == 9 ? print ' selected="selected"' : print ''; ?>>Ushashashi</option>
		<option value="10" <?php $_POST['pp_ayan'] == 10 ? print ' selected="selected"' : print ''; ?>>Krishnamurti</option>
		<option value="11" <?php $_POST['pp_ayan'] == 11 ? print ' selected="selected"' : print ''; ?>>Djwhal Khul</option>
		<option value="12" <?php $_POST['pp_ayan'] == 12 ? print ' selected="selected"' : print ''; ?>>Yukteshwar</option>
		<option value="13" <?php $_POST['pp_ayan'] == 13 ? print ' selected="selected"' : print ''; ?>>J N Bhasin</option>
		<option value="14" <?php $_POST['pp_ayan'] == 14 ? print ' selected="selected"' : print ''; ?>>Babylon/Kugler 1</option>
		<option value="15" <?php $_POST['pp_ayan'] == 15 ? print ' selected="selected"' : print ''; ?>>Babylon/Kugler 2</option>
		<option value="16" <?php $_POST['pp_ayan'] == 16 ? print ' selected="selected"' : print ''; ?>>Babylon/Kugler 3</option>
		<option value="17" <?php $_POST['pp_ayan'] == 17 ? print ' selected="selected"' : print ''; ?>>Babylon/Huber</option>
		<option value="18" <?php $_POST['pp_ayan'] == 18 ? print ' selected="selected"' : print ''; ?>>Babylon/Eta Piscium</option>
		<option value="19" <?php $_POST['pp_ayan'] == 19 ? print ' selected="selected"' : print ''; ?>>Babylon/Aldebaran</option>
		<option value="20" <?php $_POST['pp_ayan'] == 20 ? print ' selected="selected"' : print ''; ?>>Hipparchos</option>
		<option value="21" <?php $_POST['pp_ayan'] == 21 ? print ' selected="selected"' : print ''; ?>>Sassanian</option>
		<option value="22" <?php $_POST['pp_ayan'] == 22 ? print ' selected="selected"' : print ''; ?>>J2000</option>
		<option value="23" <?php $_POST['pp_ayan'] == 23 ? print ' selected="selected"' : print ''; ?>>J1900</option>
		<option value="24" <?php $_POST['pp_ayan'] == 24 ? print ' selected="selected"' : print ''; ?>>B1950</option>
		</select>
		<?php submit_button( __( 'Save Changes', 'planetary-position' ) ); ?>
	</form>
</div> <!-- .wrap -->
<?php
$showPanchang = filter_var($_POST['pp_showPanchang'],FILTER_VALIDATE_BOOLEAN);
$showTable = filter_var($_POST['pp_showTable'],FILTER_VALIDATE_BOOLEAN);
$showWheels = filter_var($_POST['pp_showWheels'],FILTER_VALIDATE_BOOLEAN);
$showMoon = filter_var($_POST['pp_showMoon'],FILTER_VALIDATE_BOOLEAN);
$ayan = $_POST['pp_ayan'];
update_option('pp_showPanchang', $showPanchang);
update_option('pp_showTable', $showTable);
update_option('pp_showWheels', $showWheels);
update_option('pp_showMoon', $showMoon);
update_option('pp_ayan', $ayan);
?>
