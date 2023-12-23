/**
 * Ephemeris namespace
 */

var $JQ = jQuery.noConflict();
var $ = $JQ;

function html2text( html ) {
    var d = document.createElement( 'div' );
    d.innerHTML = html;
    return d.textContent;
}


	var mons = [ "January", "February", "March","April","May","June","July","August","September","October","November","December" ];
	var zod_s = [ "Ari", "Tau", "Gem", "Cnc", "Leo", "Vir", "Lib", "Sco", "Sgr", "Cap", "Aqr", "Psc" ];

	var zods = [
	["Ari","#f00"],
	["Tau","#0a0"],
	["Gem","#a8a"],
	["Can","#00f"],
	["Leo","#f00"],
	["Vir","#0a0"],
	["Lib","#a8a"],
	["Sco","#00f"],
	["Sag","#f00"],
	["Cap","#0a0"],
	["Aqu","#a8a"],
	["Pis","#00f"] ];
	var nax = [
	"Ashwini",
	"Bharani",
	"Krittika",
	"Rohini",
	"Mrigashira",
	"Ardra",
	"Punarvasu",
	"Pushya",
	"Ashlesha",
	"Magha",
	"P.Phalguni",
	"U.Phalguni",
	"Hasta",
	"Chitra",
	"Swati",
	"Vishakha",
	"Anuradha",
	"Jyeshtha",
	"Moola",
	"P.Shada",
	"U.Shada",
	"Shravan",
	"Dhanishtha",
	"Shatabhisha",
	"P.Bhadrapada",
	"U.Bhadrapada",
	"Revati"
		];

var ayan = [
    [-1, -1],
    [2435553.5, 23.250182778 - 0.004660222], 
    [2433282.5, 24.042044444],  /* 0: Fagan/Bradley (Default) */
    [-2, -2],
    [-3, -3],
    [-4, -4],
    [-5, -5],
    [2415020.0, 360 - 333.58695],   /* 2: De Luce (Robert Hand) */
    [2415020.0, 360 - 338.98556],   /* 3: Raman (Robert Hand) */
    [2415020.0, 360 - 341.33904],   /* 4: Ushashashi (Robert Hand) */
    [2415020.0, 360 - 337.636111],  /* 5: Krishnamurti (Robert Hand) */
    [2415020.0, 360 - 333.0369024], /* 6: Djwhal Khool; (Graham Dawson)  
                                 *    Aquarius entered on 1 July 2117 */
    [2415020.0, 360 - 338.917778],  /* 7: Yukteshwar; (David Cochrane) */
    [2415020.0, 360 - 338.634444],  /* 8: JN Bhasin; (David Cochrane) */
    [1684532.5, -3.36667],      /* 9: Babylonian, Kugler 1 */
    [1684532.5, -4.76667],      /*10: Babylonian, Kugler 2 */
    [1684532.5, -5.61667],      /*11: Babylonian, Kugler 3 */
    [1684532.5, -4.56667],      /*12: Babylonian, Huber */
    [1673941, -5.079167],       /*13: Babylonian, Mercier;
                                 *    eta Piscium culminates with zero point */
    [1684532.5, -4.44088389],   /*14: t0 is defined by Aldebaran at 15 Taurus */
    [1674484, -9.33333],        /*15: Hipparchos */
    [1927135.8747793, 0],       /*16: Sassanian */
//    [1746443.513, 0],           /*17: Galactic Center at 0 Sagittarius */
    [2451545.0, 0],                 /*18: J2000 */
    [2415020.0, 0],                 /*19: J1900 */
    [2433282.423, 0]                 /*20: B1950 */
	];


var sel_ayan = 0;

var ayan_name = [
	"True Chitrapaksha",
	"Lahiri",
	"Fagan/Bradley",
	"True Revati",
	"True Pushya",
	"True Mula",
	"Galactic Center at 0Sagittarius",
	"De Luce",
	"Raman",
	"Ushashashi",
	"Krishnamurti",
	"Djwhal Khool",
	"Yukteshwar",
	"JN Bhasin",
	"Babylonian, Kugler 1",
	"Babylonian, Kugler 2",
	"Babylonian, Kugler 3",
	"Babylonian, Huber",
	"Babylonian, Mercier",
	"Aldebaran 15 Tau",
	"Hipparchos",
	"Sassanian",
//	"Galactic Center at 0 Sag",
	"J2000",
	"J1900",
	"B1950"
	];


	var mons = [ "January", "February", "March","April","May","June","July","August","September","October","November","December" ];
	var zod_s = [ "Ari", "Tau", "Gem", "Cnc", "Leo", "Vir", "Lib", "Sco", "Sgr", "Cap", "Aqr", "Psc" ];
	var weektxt = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var zods = [
	["Ari <span style='font-family:Saravali!important;'>A</span>","#f00"],
	["Tau <span style='font-family:Saravali!important;'>B</span>","#0a0"],
	["Gem <span style='font-family:Saravali!important;'>C</span>","#a8a"],
	["Can <span style='font-family:Saravali!important;'>D</span>","#00f"],
	["Leo <span style='font-family:Saravali!important;'>E</span>","#f00"],
	["Vir <span style='font-family:Saravali!important;'>F</span>","#0a0"],
	["Lib <span style='font-family:Saravali!important;'>G</span>","#a8a"],
	["Sco <span style='font-family:Saravali!important;'>H</span>","#00f"],
	["Sag <span style='font-family:Saravali!important;'>I</span>","#f00"],
	["Cap <span style='font-family:Saravali!important;'>J</span>","#0a0"],
	["Aqu <span style='font-family:Saravali!important;'>K</span>","#a8a"],
	["Pis <span style='font-family:Saravali!important;'>L</span>","#00f"] ];
	var nax = [
	"Ashwini",
	"Bharani",
	"Krittika",
	"Rohini",
	"Mrigashira",
	"Ardra",
	"Punarvasu",
	"Pushya",
	"Ashlesha",
	"Magha",
	"P.Phalguni",
	"U.Phalguni",
	"Hasta",
	"Chitra",
	"Swati",
	"Vishakha",
	"Anuradha",
	"Jyeshtha",
	"Moola",
	"P.Shada",
	"U.Shada",
	"Shravan",
	"Dhanishtha",
	"Shatabhisha",
	"P.Bhadrapada",
	"U.Bhadrapada",
	"Revati"
		];

var h_mon = [
	"Chaitra",
	"Vaishakha",
	"Jyestha",
	"Ashadha",
	"Shravana",
	"Bhadrapada",
	"Ashwin",
	"Kartik",
	"Margashirsha",
	"Paush",
	"Magha",
	"Phalguna",
	];

var h_tithi = [
	"Pratipada",
	"Dwitiya",
	"Tritiya",
	"Chaturthi",
	"Panchami",
	"Shashthi",
	"Saptami",
	"Ashtami",
	"Navami",
	"Dashami",
	"Ekadashi",
	"Dwadashi",
	"Trayodashi",
	"Chaturdashi",
	];

var karana_name = [
        'Kimstughna',
        'Bava      ',
        'Balava    ',
        'Kaulava   ',
        'Taitila   ',
        'Gara      ',
        'Vanij     ',
        'Visti     ',
        'Shakuni    ',
        'Chatuspada ',
        'Naga      '
    ];

var Jovian_Year_name = [
        'Kshaya',
        'Prabhava',
        'Vibhava',
        'Sukha',
        'Pramoda',
        'Prajapati',
        'Angiras',
        'Srimukha',
        'Bhava',
        'Yuva',
        'Dhaitri',
        'Ishvara',
        'Bahudhanya',
        'Pramadhi',
        'Vikrama',
        'Vrisha',
        'Chitrabhanu',
        'Svabhanu',
        'Tarana',
        'Parthiva',
        'Vyaya',
        'Sarvajit',
        'Sarvadhari',
        'Virodhi',
        'Vikrita',
        'Khara',
        'Nandana',
        'Vijaya',
        'Jaya',
        'Manmatha',
        'Durmukha',
        'Hemalamba',
        'Vilambi',
        'Vikari',
        'Sharvari',
        'Plava',
        'Shubhakruti',
        'Shobhana',
        'Krodhi',
        'Vishvavasu',
        'Parabhava',
        'Plavanga',
        'Kilaka',
        'Saumya',
        'Sadharana',
        'Virodhikruti',
        'Paridhavi',
        'Pramadicha',
        'Ananda',
        'Rakshasa',
        'Anala',
        'Pingala',
        'Kalayukti',
        'Siddharthi',
        'Raudra',
        'Durmathi',
        'Dundubhi',
        'Rudhirodgari',
        'Raktakshi',
        'Krodhana'
    ];

var yoga_name = [
        'Vishkambha',
        'Preethi',
        'Ayushman',
        'Saubhagya',
        'Shobhana',
        'Atiganda',
        'Sukarma',
        'Dhriti',
        'Shula',
        'Ganda',
        'Vriddhi',
        'Dhruva',
        'Vyaghata',
        'Harshana',
        'Vajra',
        'Siddhi',
        'Vyatipata',
        'Variyana',
        'Parigha',
        'Shiva',
        'Siddha',
        'Sadhya',
        'Shubha',
        'Shukla',
        'Brahma',
        'Indra',
        'Vaidhriti',
        'Vishkambha'
    ];

var YugaRotation = [];

function set_primary_constant_SuryaSiddhanta() {//# Saura, HIL, p.15
    YugaRotation['star']       = 1582237828;
    YugaRotation['sun']        = 4320000;
    YugaRotation['moon']       = 57753336;
    YugaRotation['mercury']    = 17937060;
    YugaRotation['venus']      = 7022376;
    YugaRotation['mars']       = 2296832;
    YugaRotation['jupiter']    = 364220;
    YugaRotation['saturn']     = 146568;
    YugaRotation['Candrocca']  = 488203;
    YugaRotation['Rahu']       = -232238;
}

function set_secondary_constant() {
    YugaCivilDays      = YugaRotation['star'] - YugaRotation['sun'];
    YugaSynodicMonth   = YugaRotation['moon'] - YugaRotation['sun'];
    YugaAdhimasa       = YugaSynodicMonth - 12 * YugaRotation['sun'];
    YugaTithi          = 30 * YugaSynodicMonth;
    YugaKsayadina      = YugaTithi - YugaCivilDays;
}

var PlanetRotation = [];
var PlanetSighra = [];
var PlanetApogee = [];
var PlanetCircumm = [];
var PlanetCircums = [];
var PlanetMeanPosition = [];
var PlanetTruePosition = [];
var PlanetApogee = [];
var PlanetCircumm = [];
var PlanetCircums = [];

var back_clong_ahar    = -1;
var back_nclong_ahar   = -1;
var back_clong         = -1;
var back_nclong        = -1;


var pi        = Math.atan2(1,1) * 4;
var pi2       = pi * 2;
var rad       = 180 / pi;
var eps       = 1e-6;
var epsiron   = 1e-8;

var samkranti;
var samkranti_year;
var samkranti_month;
var samkranti_day;
var samkranti_hour;
var samkranti_min;

var Ujjaini_lon;
var desantara;


function ModernDate_to_JulianDay(year, month, day) {
//    local($year, $month, $day) = @_;

    var julian_day;

    if (month < 3) {
        year = year -1 ;
        month = month + 12;
    }

    julian_day = Math.floor(365.25 * year) + Math.floor(30.59 * (month - 2)) + day + 1721086.5;
    if (year < 0) {
        julian_day = julian_day - 1;
        if (((year % 4) == 0) && (3 <= month)) {
            julian_day = julian_day + 1;
        }
    }
    if (2299160 < julian_day) {
        julian_day = julian_day + Math.floor(year / 400) - Math.floor(year / 100) + 2;
    }

    return julian_day;
}

function JulianDay_to_Ahargana(julian_day) {
//# {from epoch midnight to given midnight}
//    local($julian_day) = @_;

    return (julian_day - 588465.50);
}

function Ahargana_to_JulianDay(ahar) {
//    local($ahar) = @_;

    return (588465.50 + ahar);
}


function set_planetary_constant() {

    PlanetRotation['star']      = 0;
    PlanetSighra['star']        = 0;
    PlanetApogee['star']        = 0;
    PlanetCircumm['star']       = 0;
    PlanetCircums['star']       = 0;

    PlanetRotation['sun']       = YugaRotation['sun'];
    PlanetSighra['sun']         = YugaRotation['sun'];
    PlanetApogee['sun']         = 77 + 17 / 60;
    PlanetCircumm['sun']        = 13 + 50 / 60;
    PlanetCircums['sun']        = 0;

    PlanetRotation['moon']      = YugaRotation['moon'];
    PlanetSighra['moon']        = 0;
    PlanetApogee['moon']        = 0;
    PlanetCircumm['moon']       = 31 + 50 / 60;
    PlanetCircums['moon']       = 0;

    PlanetRotation['mercury']   = YugaRotation['sun'];
    PlanetSighra['mercury']     = YugaRotation['mercury'];
    PlanetApogee['mercury']     = 220 + 27 / 60;
    PlanetCircumm['mercury']    = 29;
    PlanetCircums['mercury']    = 131.5;

    PlanetRotation['venus']     = YugaRotation['sun'];
    PlanetSighra['venus']       = YugaRotation['venus'];
    PlanetApogee['venus']       = 79 + 50 / 60;
    PlanetCircumm['venus']      = 11.5;
    PlanetCircums['venus']      = 261;

    PlanetRotation['mars']      = YugaRotation['mars'];
    PlanetSighra['mars']        = YugaRotation['sun'];
    PlanetApogee['mars']        = 130 + 2 / 60;
    PlanetCircumm['mars']       = 73.5;
    PlanetCircums['mars']       = 233.5;

    PlanetRotation['jupiter']   = YugaRotation['jupiter'];
    PlanetSighra['jupiter']     = YugaRotation['sun'];
    PlanetApogee['jupiter']     = 171 + 18 / 60;
    PlanetCircumm['jupiter']    = 32.5;
    PlanetCircums['jupiter']    =  71;

    PlanetRotation['saturn']    = YugaRotation['saturn'];
    PlanetSighra['saturn']      = YugaRotation['sun'];
    PlanetApogee['saturn']      = 236 + 37 / 60;
    PlanetCircumm['saturn']     = 48.5;
    PlanetCircums['saturn']     = 39.5;

    PlanetRotation['Candrocca'] = YugaRotation['Candrocca'];
    PlanetSighra['Candrocca']   = 0;
    PlanetApogee['Candrocca']   = 0;
    PlanetCircumm['Candrocca']  = 0;
    PlanetCircums['Candrocca']  = 0;

    PlanetRotation['Rahu']      = YugaRotation['Rahu'];
    PlanetSighra['Rahu']        = 0;
    PlanetApogee['Rahu']        = 0;
    PlanetCircumm['Rahu']       = 0;
    PlanetCircums['Rahu']       = 0;
}

var intp_yoga;
function get_yoga_name(tslong, tllong) {
//    local($tslong, $tllong) = @_;

    var yoga1, yoga;

    yoga1 = zero360(tslong + tllong);
    yoga = Math.floor(yoga1 * 27 / 360) % 27;
	intp_yoga = yoga;
    return yoga_name[yoga];
}

var year_samvat;

function get_Jovian_Year_name(YearKali, x) {
//    local($YearKali) = @_;

    var Jovian_Year;

    Jovian_Year = (parseInt(((YearKali * 117) - 60) / 10000) + YearKali + 27) % 60;
if (x == 1) { 	year_samvat = Jovian_Year; }
    return Jovian_Year_name[Jovian_Year];
}


function get_Jovian_Year_name_south(YearKali) {
//    local($YearKali)  = @_;

    var Jovian_Year;

    if (YearKali < 4009) {
        Jovian_Year = YearKali;
    } else {
        Jovian_Year = (60 + YearKali - 14) % 60;
    }
    return get_Jovian_Year_name(Jovian_Year, 1);
}

var karana_no;

function get_karana_name(tithi) {
//    local($tithi) = @_;

    var karana;

    karana = Math.floor(2 * tithi);
    if (karana == 0) {
	karana_no = 0;
        return karana_name[0];}
    else if (karana < 57) {
        karana = karana % 7;
        if (karana ==0){
	karana_no = 7;
            return karana_name[7];
        } else if (karana !=0){
	karana_no = karana;
            return karana_name[karana];
        }
    } else if (karana == 57) {
	karana_no = 8;
        return karana_name[8];
    } else if (karana == 58) {
	karana_no = 9;
        return karana_name[9];
    } else if (karana == 59) {
	karana_no = 10;
        return karana_name[10];
    }
}

function Ahargana_to_JulianDay(ahar) {
//    local($ahar) = @_;

    return 588465.50 + ahar;
}

function Ahargana_to_Kali(ahar) {
//    local($ahar) = @_;
//# global variables: $YugaRotation{'sun'}, $YugaCivilDays

    return Math.floor(ahar * YugaRotation['sun'] / YugaCivilDays);
}

function Kali_to_Ahargana(YearKali, masa_num, tithi_day) {
//    local($YearKali, $masa_num, $tithi_day) = @_;
//# global variables: $YugaAdhimasa, $YugaRotation{'sun'}, $YugaKsayadina, $YugaTithi

    var sm, cm, adhim, avama, tithi;

    sm = YearKali;
    sm = sm * 12 + masa_num; 
    adhim = Math.floor(sm * YugaAdhimasa / (12 * YugaRotation['sun'])); 
    cm = sm + adhim; 
    tithi = 30 * cm + tithi_day -1;
    avama = Math.floor(tithi * YugaKsayadina / YugaTithi ); 

    return tithi - avama;
}

function Kali_to_Saka(YearKali) {
//    local($YearKali) = @_;

    return YearKali - 3179;
}

function three_relation(a,b,c) {
//    local($a, $b, $c) = @_;

    if ((a < b) && (b < c)) {
        return 1;
    } else if ((c < b) && (b < a)) {
        return -1;
    } else {
        return 0;
    }
}

function get_masa_num(tslong, clong) {
//    local($tslong, $clong) = @_;

    var masa_num;

    masa_num = Math.floor(tslong / 30) % 12;
    if ((Math.floor(clong / 30) % 12) == masa_num) {
        masa_num = masa_num + 1;
    }
    masa_num = (masa_num + 12) % 12;
    return masa_num;
}

function adhimasa_p(clong, nclong) {
//    local($clong, $nclong) = @_;

    if (Math.floor(clong / 30) == Math.floor(nclong / 30)) {
        return true;
    } else {
        return false;
    }
}

function get_adhimasa(clong, nclong) {
//    local($clong, $nclong) = @_;

    if (adhimasa_p(clong, nclong)) {
        return "Adhika-";
    } else {
        return "";
    }
}

function frac(x) {
//    local($x) = @_;

    return (x - Math.floor(x));
}

function zero360(longitude) {
//    local($longitude) = @_;

    longitude = longitude - (Math.floor(longitude / 360) * 360);
    if (longitude < 0) {
        longitude = longitude + 360;
    }

    return longitude;
}

function get_manda_equation(argument, planet) {
//    local($argument, $planet) = @_;

    return Math.asin(PlanetCircumm[planet] / 360 * Math.sin(argument / rad)) * rad;
}

function get_mean_long(ahar, rotation) {
//    local($ahar, $rotation) = @_;

    return (360 * frac(rotation * ahar / YugaCivilDays));
}

function get_tslong(ahar) {
//    local($ahar) = @_;

    var mslong;

    mslong = get_mean_long(ahar, YugaRotation['sun']);
    return zero360(mslong - get_manda_equation((mslong - PlanetApogee['sun']), 'sun'));
}

function get_tllong(ahar) {
//    local($ahar) = @_;

    var mllong, apogee;

    mllong = get_mean_long(ahar, YugaRotation['moon']);
    apogee = get_mean_long(ahar, YugaRotation['Candrocca']) + 90;
    return zero360(mllong - get_manda_equation((mllong - apogee), 'moon'));
}

function get_elong(ahar) {
//    local($ahar) = @_;

    var elong;

    elong = Math.abs(get_tllong(ahar) - get_tslong(ahar));
    if (180 < elong) {
        elong = 360 - elong;
    }
    return elong;
}

function find_conj(leftx, lefty, rightx, righty) {
//    local($leftx, $lefty, $rightx, $righty) = @_;

    var width, centrex, centrey, relation;

    width = (rightx - leftx) / 2;
    centrex = (rightx + leftx) / 2;
    if (width < epsiron) {
        return get_tslong(centrex);
    } else {
        centrey = get_elong(centrex);
        relation = three_relation(lefty, centrey, righty);
        if (relation < 0) {
            rightx = rightx + width;
	    righty = get_elong(rightx);
            return find_conj(centrex, centrey, rightx, righty);
        } else if (0 < relation) {
            leftx = leftx - width;
	    lefty = get_elong(leftx);
            return find_conj(leftx, lefty, centrex, centrey);
        } else {
            leftx = leftx + width / 2;
            lefty = get_elong(leftx);
            rightx = rightx - width / 2;
            righty = get_elong(rightx);
            return find_conj(leftx, lefty, rightx, righty);
        }
    }
}

function get_conj(ahar) {
//    local($ahar) = @_;

    return find_conj(ahar - 2, get_elong(ahar - 2), ahar + 2, get_elong(ahar + 2));
}

function get_clong(ahar, tithi) {
//    local($ahar, $tithi) = @_;

    var new_new;

    new_new = YugaCivilDays / (YugaRotation['moon'] - YugaRotation['sun']);
    ahar = ahar - tithi * (new_new / 30);

    if (Math.abs(ahar - back_clong_ahar) < 1) {
        return back_clong;
    } else if (Math.abs(ahar - back_nclong_ahar) < 1) {
        back_clong_ahar = back_nclong_ahar;
        back_clong = back_nclong;
        return back_nclong;
    } else {
        back_clong_ahar = ahar;
        back_clong = get_conj(ahar);
        return back_clong;
    }
}

function get_nclong(ahar, tithi) {
//    local($ahar, $tithi) = @_;

    var new_new;

    new_new = YugaCivilDays / (YugaRotation['moon'] - YugaRotation['sun']);
    ahar = ahar + (30 - tithi) * (new_new / 30);

    if (Math.abs(ahar - back_nclong_ahar) < 1) {
        return back_nclong;
    } else {
        back_nclong_ahar = ahar;
        back_nclong = get_conj(ahar);
        return back_nclong;
    }
}

function declination(long) {
//    local($long) = @_;

    return Math.asin(Math.sin(long / rad) * Math.sin(24 / rad)) * rad;
}

function get_daylight_equation(year, loc_lat, ahar) {
//# global variables: $ahar, $YugaRotation{'sun'}
//    local($year, $loc_lat) = @_;

    var mslong, samslong, sdecl, x;

    mslong = get_mean_long(ahar, YugaRotation['sun']);
    samslong = mslong + (54 / 3600) * (year - 499);
    sdecl = declination(samslong);
    x = Math.tan(loc_lat / rad) * Math.tan(sdecl / rad);
    return (0.5 * Math.asin(x) / pi);
}


function find_samkranti(o_ahar, n_ahar) {
//    local($o_ahar, $n_ahar) = @_;

    var o_tslong, n_tslong, c_ahar, c_tslong, width;

    o_tslong = get_tslong(o_ahar);
    n_tslong = get_tslong(n_ahar);

    o_tslong = o_tslong - Math.floor(o_tslong / 30) * 30;
    n_tslong = n_tslong - Math.floor(n_tslong / 30) * 30;

    width  = (n_ahar - o_ahar) / 2;
    c_ahar = (n_ahar + o_ahar) / 2;
    if (width < epsiron) {
        return c_ahar;
    } else {
        c_tslong = get_tslong(c_ahar);
        c_tslong = c_tslong - Math.floor(c_tslong / 30) * 30;
        if (c_tslong < 5) {
            return find_samkranti(o_ahar, c_ahar);
        } else {
            return find_samkranti(c_ahar, n_ahar);
        }
    }
}

function JulianDay_to_ModernDate(JulianDay) {
//    local($JulianDay) = @_;

    var year, month, day;


    if (JulianDay < 2299239) {
        return JulianDay_to_JulianDate(JulianDay);
    } else {
        return JulianDay_to_GregorianDate(JulianDay);
    }

}

function JulianDay_to_JulianDate(JulianDay, md) {
//    local($JulianDay) = @_;

    var j, k, l, n, i, J, I;
    var year, month, day;

    j = Math.floor(JulianDay) + 1402;
    k = Math.floor((j - 1) / 1461);
    l = j - 1461 * k;
    n = Math.floor((l - 1) / 365) - Math.floor(l / 1461);
    i = l - 365 * n  + 30;
    J = Math.floor(80 * i / 2447) ;
    day = i - Math.floor(2447 *J / 80);
    I = Math.floor(J / 11);
    month =  J + 2 -12 * I;
    year = 4 * k + n +I - 4716;
    md[0] = year; md[1] = month; md[2] =day;
    return;
}

function JulianDay_to_GregorianDate(JulianDay, md) {
//    local($JulianDay) = @_;

    var a, b, c, e, f, g, h;
    var  year, month, day;

    a = JulianDay + 68569;
    b = Math.floor(a / 36524.25);
    c = a - Math.floor(36524.25 * b + 0.75);
    e = Math.floor((c + 1) / 365.2425);

    f = c - Math.floor(365.25 * e) + 31;
    g = Math.floor(f / 30.59);
    h = Math.floor(g / 11);
    day = Math.floor(f - Math.floor(30.59 * g) + (JulianDay - Math.floor(JulianDay)));
    month = Math.floor(g - 12 * h + 2);
    year = Math.floor(100 * (b - 49) + e + h);
    md[0] = year; md[1] = month; md[2] =day;
    return;
}

function JulianDay_to_ModernDate(JulianDay, md) {
//    local($JulianDay) = @_;

    var year, month, day;


    if (JulianDay < 2299239) {
        JulianDay_to_JulianDate(JulianDay, md);
    } else {
        JulianDay_to_GregorianDate(JulianDay, md);
    }

}


function set_samkranti(ahar, md) {
//    local($ahar) = @_;

        samkranti = find_samkranti(ahar, ahar + 1);
        samkranti = samkranti + desantara;
        JulianDay_to_ModernDate(Ahargana_to_JulianDay(Math.floor(samkranti) + 0.5), md);
	samkranti_year = md[0]; samkranti_month= md[1]; samkranti_day= md[2];
	samkranti_hour = Math.floor(frac(samkranti) * 24);
        samkranti_min  = Math.floor(60 * frac(frac(samkranti) * 24));
}


function today_saura_masa_first_p(ahar, md) {

//    local($ahar) = @_;
    var tslong_today, tslong_tomorrow;

    tslong_today = get_tslong(ahar - desantara);
    tslong_tomorrow = get_tslong(ahar - desantara + 1);

    tslong_today = tslong_today - Math.floor(tslong_today / 30) * 30;
    tslong_tomorrow = tslong_tomorrow - Math.floor(tslong_tomorrow / 30) * 30;

    if ((25 < tslong_today) && (tslong_tomorrow < 5)) {
        set_samkranti(ahar, md);
        return true;
    } else {
        return false;
    }

}

function get_saura_masa_day(ahar, md) { 
//    local($ahar) = @_;
    var tslong_tomorrow, month, day;

    ahar = Math.floor(ahar);
    if (today_saura_masa_first_p(ahar, md)) {
        day = 1;
        tslong_tomorrow = get_tslong(ahar + 1);
        month = (Math.floor(tslong_tomorrow / 30)) % 12;
        month = (month + 12) % 12;
    } else {
        get_saura_masa_day(ahar - 1, md);
        day = day + 1;
    };
    md[0] = month; md[1] = day;
return;
}



function RASI() { 
	var locDate = new Date ();

	var tz =  -locDate.getTimezoneOffset();
	var curDate = new Date(locDate.getTime() - tz*60000.0);
	var ddate = (curDate.getDate());
	var dmonth = (curDate.getMonth()+1);
	var dyear = (curDate.getFullYear());
	var dhour = (curDate.getHours());
	var dminute = (curDate.getMinutes());
	var dseconds = (curDate.getSeconds());
	var lat =51.5; var lon= 0;
	var place = "UTC";
        var t = dyear  + ("00" + dmonth).substr(-2)  + ("00" + ddate).substr(-2)   + "." + ("00" + dhour).substr(-2) + ("00" + dminute).substr(-2)    + ("00" + dseconds).substr(-2);

	var classes, ids, value, d, date2;
	var showWheels = 0, showMoon = 0, showTable = 0, showPanchang = 0;
	var plugUrl = $JQ('#pluginUrl').val();
	var i, j, key;

		d = {
			day: ddate,
			month: dmonth,
			year: dyear,
			hours: dhour,
			minutes: dminute,
			seconds: dseconds
		};
		date2 = {
			day: ddate,
			month: dmonth,
			year: dyear,
			hours: dhour,
			minutes: dminute,
			seconds: dseconds
		};


	$const.glat = lat;
	$const.tlong = lon;
	$const.attemp = 28;
	$const.atpress = 1000;
	$const.height = 0;
$moshier.body.init ();
	$moshier.kepler.init ();
	$moshier.julian.calc (d);
//	d.julian = (d.julian);// - tz/24.0;
	delta = $moshier.delta.calc (d);
	d.julian = d.julian +  delta/864.0;
//	d.julian = d.julian - d.julian*6.969290134*Math.pow(10,-10) + 0.00170269828624;



	d.universalDate = $moshier.julian.toGregorian ({
		julian: d.julian
	});
$const.date = d;

	var mons = [ "January", "February", "March","April","May","June","July","August","September","October","November","December" ];
	d.universalDateString =
	d.universalDateString =
		dyear + ' ' +
		dmonth + ' ' +
		ddate + ' ' +
		dhour + ':' +
		dminute + ':' +
		dseconds 
	;
	// First to calculate the erath
	$moshier.kepler.calc (d, $moshier.body.earth);


	$const.body.key = 'sun';
	$moshier.sun.calc ();
	var sun = $moshier.body.sun.position.apparentLongitude;

	$const.body = $moshier.body.moon;
	$const.body.key = 'moon';
	$moshier.moon.calc ();
	var moon = $moshier.body.moon.position.apparentLongitude;

	var fracill = $moshier.body.moon.position.illuminatedFraction;
	var txt_fracill = Math.floor(fracill*100);
	var decfracill = Math.floor(100*(100*fracill - Math.floor(fracill*100)));
	txt_fracill = txt_fracill + "." + ("00"+decfracill).substr(-2) + "%";

	$moshier.planet.calc ($moshier.body.saturn);
	var saturn=$moshier.body.saturn.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.jupiter);
	var jupiter=$moshier.body.jupiter.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.mars);
	var mars=$moshier.body.mars.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.venus);
	var venus=$moshier.body.venus.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.mercury);
	var mercury=$moshier.body.mercury.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.neptune);
	var neptune=$moshier.body.neptune.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.uranus);
	var uranus=$moshier.body.uranus.position.apparentLongitude;
	$moshier.planet.calc ($moshier.body.pluto);
	var pluto=$moshier.body.pluto.position.apparentLongitude;


	moon_m = (moon - Math.floor(moon))*60.0;
	moon_s = (moon_m - Math.floor(moon_m))*60.0;

	sun_m = (sun - Math.floor(sun))*60.0;
	sun_s = (sun_m - Math.floor(sun_m))*60.0;
	
	mercury_m = (mercury - Math.floor(mercury))*60.0;
	mercury_s = (mercury_m - Math.floor(mercury_m))*60.0;
		
	venus_m = (venus - Math.floor(venus))*60.0;
	venus_s = (venus_m - Math.floor(venus_m))*60.0;

	mars_m = (mars - Math.floor(mars))*60.0;
	mars_s = (mars_m - Math.floor(mars_m))*60.0;

	jupiter_m = (jupiter - Math.floor(jupiter))*60.0;
	jupiter_s = (jupiter_m - Math.floor(jupiter_m))*60.0;

	saturn_m = (saturn - Math.floor(saturn))*60.0;
	saturn_s = (saturn_m - Math.floor(saturn_m))*60.0;

	uranus_m = (uranus - Math.floor(uranus))*60.0;
	uranus_s = (uranus_m - Math.floor(uranus_m))*60.0;

	neptune_m = (neptune - Math.floor(neptune))*60.0;
	neptune_s = (neptune_m - Math.floor(neptune_m))*60.0;

	pluto_m = (pluto - Math.floor(pluto))*60.0;
	pluto_s = (pluto_m - Math.floor(pluto_m))*60.0;


	$moshier.nutation2.calc(d);
        $moshier.epsilon.calc ( d );



	var juld = d.julian;
	var nnode = $moshier.moon.calc_nodes(juld);
	//	var mm = $moshier.body.moon.position.apparent.meanM;
//	var nnode = (360.0 + mm - node) % 360.0;
	var snode = (180.0 + nnode) % 360.0;


	var sid = $moshier.siderial.calc(d, lon);
	var sidt = (360+ (sid * 15.0) + parseFloat(lon)) % 360.0;
//console.log('sidt='+sidt);

	var eps = ($moshier.epsilon.eps+$moshier.nutation2.nuto);
	var y = ( -Math.cos ($const.DTR*(sidt))) ;
	var x = ( (Math.cos(eps)* Math.sin($const.DTR*(sidt))) + (Math.sin(eps)* Math.tan($const.DTR*lat)));
	var asc2 = (($const.RTD*Math.atan(y/x)) + 360.0) % 360.0;
	
	if (x < 0) { asc2 = asc2 + 180.0; } else { asc2 = asc2 + 360.0; }
	if (asc2 < 180.0) { asc2 = asc2 + 180.0; } else { asc2 = asc2 -180.0; }
	asc2 = asc2 % 360.0;

	nnode_m = (nnode - Math.floor(nnode))*60.0;
	nnode_s = (nnode_m - Math.floor(nnode_m))*60.0;

	asc_m = (asc2 - Math.floor(asc2))*60.0;
	asc_s = (asc_m - Math.floor(asc_m))*60.0;

//	$moshier.kepler.calc (d, $moshier.body.earth);


	var lon0 = $moshier.body.moon.position.apparent.lon0; var lon00 = lon0;
	
var remd = [],remd2 = [];
	$copy(remd2, d);
	$copy(remd , d);
	var dff_sun_moon = (moon - sun + 360) % 360;
	var n_tthi = Math.floor(dff_sun_moon/12);
	var f_tthi = (dff_sun_moon/12);
	var trem = (1- f_tthi + n_tthi)*12.67/lon0;
	var nnt = n_tthi;
var iter = 0;
	var od; var yod = 0;
	remd.julian = (remd.julian) + trem;
	do {
		iter++;od = remd;
		remd.julian += 1/1440;
		remd.universalDate = $moshier.julian.toGregorian ({julian: (remd.julian) });
	remd.universalDateString =
		remd.universalDate.day + '.' +
		remd.universalDate.month + '.' +
		remd.universalDate.year + ' ' +
		remd.universalDate.hours + ':' +
		remd.universalDate.minutes;
		$const.date = remd;
		$moshier.kepler.calc (remd, $moshier.body.earth);
		$const.body = $moshier.body.moon;
		$const.body.key = 'moon';
		$moshier.moon.calc ();

		$const.body = $moshier.body.sun;
		$const.body.key = 'sun';
		$moshier.sun.calc ();
		var diff_sun_moon2 = ($moshier.body.moon.position.apparentLongitude-$moshier.body.sun.position.apparentLongitude + 360) % 360;
		nnt = Math.floor(diff_sun_moon2/12);
		lon0 = $moshier.body.moon.position.apparent.lon0;
		if (iter > 100) { break; }
	} while ( Math.abs(nnt - n_tthi) < 1  )
		od.universalDate = $moshier.julian.toGregorian ({julian: (od.julian/*+((tz*3600.0)/86400.0)*/) });
	od.universalDateString =
		od.universalDate.day + '.' +
		od.universalDate.month + '.' +
		od.universalDate.year + ' ' +
		od.universalDate.hours + ':' +
		od.universalDate.minutes;
	var tthi = od.universalDate.hours + ':'+ od.universalDate.minutes + ' ' + od.universalDate.month + '/'+od.universalDate.day; 

//	d = remd;
	$const.date = d;

	$copy(remd , d);
	dff_sun_moon = (moon - sun + 360) % 360;
	n_tthi = Math.floor(dff_sun_moon/6);
	f_tthi = (dff_sun_moon/6);
	trem = (1- f_tthi + n_tthi)*5.66/lon00;
	nnt = n_tthi;
	iter = 0;
	remd.julian = (remd.julian) + trem;
	do {
		iter++;od = remd;
		remd.julian += 1/1440;
		remd.universalDate = $moshier.julian.toGregorian ({julian: (remd.julian) });
	remd.universalDateString =
		remd.universalDate.day + '.' +
		remd.universalDate.month + '.' +
		remd.universalDate.year + ' ' +
		remd.universalDate.hours + ':' +
		remd.universalDate.minutes;
		$const.date = remd;
		$moshier.kepler.calc (remd, $moshier.body.earth);
		$const.body = $moshier.body.moon;
		$const.body.key = 'moon';
		$moshier.moon.calc ();
		$const.body = $moshier.body.sun;
		$const.body.key = 'sun';
		$moshier.sun.calc ();
		diff_sun_moon2 = ($moshier.body.moon.position.apparentLongitude-$moshier.body.sun.position.apparentLongitude + 360) % 360;
		nnt = Math.floor(diff_sun_moon2/6);
		lon0 = $moshier.body.moon.position.apparent.lon0;
		if (iter > 100) { break; }
	} while ( Math.abs(nnt - n_tthi) < 1  )
		od.universalDate = $moshier.julian.toGregorian ({julian: (od.julian/*+((tz*3600.0)/86400.0)*/) });
	od.universalDateString =
		od.universalDate.day + '.' +
		od.universalDate.month + '.' +
		od.universalDate.year + ' ' +
		od.universalDate.hours + ':' +
		od.universalDate.minutes;
	var krna = od.universalDate.hours + ':' + od.universalDate.minutes + ' ' + od.universalDate.month + '/'+od.universalDate.day; 
//	d = remd;
	$const.date = d;



	date2.universalDate = $moshier.julian.toGregorian ({
		julian: d.julian
	});
	var dd2 = d;
	var polar = []; var temp = []; var temp2 = [];


	$moshier.julian.calc (date2);
	date2.julian = (date2.julian) ;//- ((tz*3600.0)/86400.0);
	date2.julian = date2.julian - (3600.0/86400.0); 
	$moshier.delta.calc (date2);
	var delta2 = $moshier.delta.calc (date2);
	date2.julian = date2.julian + delta2/864.0;

	date2.universalDate = $moshier.julian.toGregorian ({
		julian: date2.julian
	});

	// First to calculate the erath
	$moshier.kepler.calc (date2, $moshier.body.earth);

	var saturnR = '', jupiterR = '', venusR = '', marsR = '', mercuryR = '', uranusR = '', neptuneR = '', plutoR ='';
	$moshier.planet.calc ($moshier.body.saturn);
	if ((saturn - $moshier.body.saturn.position.apparentLongitude) < 0.0 ) { saturnR = 'R'; }
	$moshier.planet.calc ($moshier.body.jupiter);
	if ((jupiter - $moshier.body.jupiter.position.apparentLongitude) < 0.0 ) { jupiterR = 'R'; }
	$moshier.planet.calc ($moshier.body.mars);
	if ((mars - $moshier.body.mars.position.apparentLongitude) < 0.0 ) { marsR = 'R';  }
	
	$moshier.planet.calc ($moshier.body.venus);
	if ((venus - $moshier.body.venus.position.apparentLongitude) < 0.0 ) { venusR = 'R'; }
	$moshier.planet.calc ($moshier.body.mercury);
	if ((mercury - $moshier.body.mercury.position.apparentLongitude) < 0.0 ) { mercuryR = 'R'; }
	$moshier.planet.calc ($moshier.body.neptune);
	if ((neptune - $moshier.body.neptune.position.apparentLongitude) < 0.0 ) { neptuneR = 'R'; }
	$moshier.planet.calc ($moshier.body.uranus);
	if ((uranus - $moshier.body.uranus.position.apparentLongitude) < 0.0 ) { uranusR = 'R'; }
	$moshier.planet.calc ($moshier.body.pluto);
	if ((pluto - $moshier.body.pluto.position.apparentLongitude) < 0.0 ) { plutoR = 'R'; }



	$const.date = remd; d= remd;
	if (document.getElementById('pp_ayan') == null) return;
	sel_ayan = parseInt(document.getElementById('pp_ayan').value);
	var dj = ayan[sel_ayan][0];
if (dj > -1) {
	var diffd1 =  dj - $const.j2000; var diff3 = d.julian;
	var diffd2 = d.julian;
	var xx = [ 1,0,0 ];  var yy = xx;
	var dir;
	var dd = { julian: dj };
	var ddelta = $moshier.delta.calc (dd);
	if (ayan[sel_ayan][2]) { dd.julian = dd.julian + (ddelta/864.0); }
	var dd2 = d;
	var polar = []; var temp = []; var temp2 = [];

	$moshier.precess.calc(xx, d, 1 );
	
	$moshier.precess.calc(xx, dd, -1 );
        $moshier.epsilon.calc ( dd );
	var res2 = $util.showrd (xx, temp );
	var ll = $moshier.lonlat.calc(xx, d, temp2, 0);
	ll[0] = 360- (ll[0]*$const.RTD - ayan[sel_ayan][1]) % 360;
	$moshier.nutation2.calclo(d);

	var corr_ayan2 = (ayan[sel_ayan][1] ) % 360.0;
	var nn = $moshier.nutation2.nutl;
	ll[0] += nn*$const.RTD;
	var corr_ayan = -(ll[0]) % 360.0;
	var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
	var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';

	console.log('ayan = ' + (string_ayan));
} else {
//	$processor.init ();
	switch (dj) {
		case -1:
		$processor.calc(d, $moshier.body.spica);
		var spic = $moshier.body.spica.position.apparentLongitude*$const.RTD;
		if (spic > 180) { spic -= 180; 
		} 
		else if (spic < 180 && spic > 0 ) { spic -= 180; }
		var corr_ayan = -( spic );
		var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
		var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';
		console.log('spica = ' + spic + '  ayan = ' + string_ayan);
		break;

		case -2:
		$processor.calc(d, $moshier.body.revati);
		var spic = $moshier.body.revati.position.apparentLongitude*$const.RTD;
		spic = (360 + spic - 359.8333333333333) % 360; 
		var corr_ayan = -( spic );
		var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
		var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';
		console.log('revati = ' + spic + '  ayan = ' + string_ayan);
		break;
	
		case -3:
		$processor.calc(d, $moshier.body.pushya);
		var spic = $moshier.body.pushya.position.apparentLongitude*$const.RTD;
		spic = (360 + spic -106) % 360;
		var corr_ayan = -( spic );
		var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
		var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';
		console.log('pushya = ' + spic + '  ayan = ' + string_ayan);
		break;

		case -4:
		$processor.calc(d, $moshier.body.mula);
		var spic = $moshier.body.mula.position.apparentLongitude*$const.RTD;
		spic = (360 +spic -240) % 360;
		var corr_ayan = -( spic );
		var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
		var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';
		console.log('mula = ' + spic + '  ayan = ' + string_ayan);
		break;

		case -5:
		$processor.calc(d, $moshier.body.saggi);
		var spic = $moshier.body.saggi.position.apparentLongitude*$const.RTD;
		spic = (360 +spic -240) % 360;
		var corr_ayan = -( spic );
		var dmsLongitude = $util.dms (corr_ayan*$const.DTR);
		var string_ayan = dmsLongitude.degree + '\u00B0' + dmsLongitude.minutes + '\'' + Math.floor (dmsLongitude.seconds) + '"';
		console.log('0Sag = ' + spic + '  ayan = ' + string_ayan);
		break;
	}
}


	moon2 = ( 360.0 + moon + corr_ayan) % 360.0;
	sun2 = ( 360.0 + sun + corr_ayan) % 360.0;
	mercury2 = ( 360.0 + mercury + corr_ayan) % 360.0;
	venus2 = ( 360.0 + venus + corr_ayan) % 360.0;
	mars2 = ( 360.0 + mars + corr_ayan) % 360.0;
	jupiter2 = ( 360.0 + jupiter + corr_ayan) % 360.0;
	saturn2 = ( 360.0 + saturn + corr_ayan) % 360.0;
	uranus2 = ( 360.0 + uranus + corr_ayan) % 360.0;
	neptune2 = ( 360.0 + neptune + corr_ayan) % 360.0;
	pluto2 = ( 360.0 + pluto + corr_ayan) % 360.0;
	asc22 = ( 360.0 + asc2 + corr_ayan) % 360.0;
	nnode2= ( 360.0 + nnode + corr_ayan) % 360.0;

	moon2_n = Math.floor(moon2/13.33333334);
	sun2_n = Math.floor(sun2/13.33333334);
	mercury2_n = Math.floor(mercury2/13.33333334);
	venus2_n = Math.floor(venus2/13.33333334);
	mars2_n = Math.floor(mars2/13.33333334);
	jupiter2_n = Math.floor(jupiter2/13.333333334);
	saturn2_n = Math.floor(saturn2/13.333333334);
	uranus2_n = Math.floor(uranus2/13.333333334);
	neptune2_n = Math.floor(neptune2/13.3333333334);
	pluto2_n = Math.floor(pluto2/13.3333333334);
	asc2_n = Math.floor(asc22/13.3333333334);
	nnode2_n = Math.floor(nnode2/13.33333333334);

	moon2_m = (moon2 - Math.floor(moon2))*60.0;
	moon2_s = (moon2_m - Math.floor(moon2_m))*60.0;

	sun2_m = (sun2 - Math.floor(sun2))*60.0;
	sun2_s = (sun2_m - Math.floor(sun2_m))*60.0;
	
	mercury2_m = (mercury2 - Math.floor(mercury2))*60.0;
	mercury2_s = (mercury2_m - Math.floor(mercury2_m))*60.0;
		
	venus2_m = (venus2 - Math.floor(venus2))*60.0;
	venus2_s = (venus2_m - Math.floor(venus2_m))*60.0;

	mars2_m = (mars2 - Math.floor(mars2))*60.0;
	mars2_s = (mars2_m - Math.floor(mars2_m))*60.0;

	jupiter2_m = (jupiter2 - Math.floor(jupiter2))*60.0;
	jupiter2_s = (jupiter2_m - Math.floor(jupiter2_m))*60.0;

	saturn2_m = (saturn2 - Math.floor(saturn2))*60.0;
	saturn2_s = (saturn2_m - Math.floor(saturn2_m))*60.0;

	uranus2_m = (uranus2 - Math.floor(uranus2))*60.0;
	uranus2_s = (uranus2_m - Math.floor(uranus2_m))*60.0;

	neptune2_m = (neptune2 - Math.floor(neptune2))*60.0;
	neptune2_s = (neptune2_m - Math.floor(neptune2_m))*60.0;

	pluto2_m = (pluto2 - Math.floor(pluto2))*60.0;
	pluto2_s = (pluto2_m - Math.floor(pluto2_m))*60.0;

	nnode2_m = (nnode2 - Math.floor(nnode2))*60.0;
	nnode2_s = (nnode2_m - Math.floor(nnode2_m))*60.0;

	asc2_m = (asc2 - Math.floor(asc2))*60.0;
	asc2_s = (asc2_m - Math.floor(asc2_m))*60.0;

	
	var posneg = "+";
	if (tz < 0) { posneg="-"; }

	var yosm = (((360+moon2+sun2) % 360)*27/360);
	var yrem = 1 - yosm + Math.floor(yosm);
	yosm = Math.floor(yosm);
	$copy(d,remd2);
	d.julian += yrem*12.2/lon00;iter=0;
	$const.glat = lat;
	$const.tlong = lon;
	$const.attemp = 28;
	$const.atpress = 1000;
	$const.height = 0;
	$const.truepos = 0;
	$const.date = d;
	$moshier.body.init ();
	$moshier.kepler.init ();
	var nyo = yosm;
	do {
		iter++;od = d;
		d.julian += 1/1440;
		d.universalDate = $moshier.julian.toGregorian ({julian: (d.julian) });
	d.universalDateString =
		d.universalDate.day + '.' +
		d.universalDate.month + '.' +
		d.universalDate.year + ' ' +
		d.universalDate.hours + ':' +
		d.universalDate.minutes;
		$moshier.kepler.calc (d, $moshier.body.earth);
		$const.date = d;
		$const.body = $moshier.body.moon;
		$const.body.key = 'moon';
		$moshier.moon.calc ();
		$const.body = $moshier.body.sun;
		$const.body.key = 'sun';
		$moshier.sun.calc ();
		nyo = Math.floor(((360+$moshier.body.moon.position.apparentLongitude+$moshier.body.sun.position.apparentLongitude + 2*corr_ayan) % 360)*27/360);
		lon0 = $moshier.body.moon.position.apparent.lon0;
		if (iter > 100) { break; }
	} while ( Math.abs(nyo - yosm) < 1  )
		od.universalDate = $moshier.julian.toGregorian ({julian: (od.julian/*+((tz*3600.0)/86400.0)*/) });
	od.universalDateString =
		od.universalDate.day + '.' +
		od.universalDate.month + '.' +
		od.universalDate.year + ' ' +
		od.universalDate.hours + ':' +
		od.universalDate.minutes;
	var yoge = od.universalDate.hours + ':' +od.universalDate.minutes + ' ' + od.universalDate.month + '/'+od.universalDate.day; 


	var naxr = moon2/13.3333333333;
	yrem = 1 - naxr + Math.floor(naxr);
	naxr = Math.floor(naxr);
	$copy(d,remd2);
	d.julian += yrem*13.2/lon00;iter=0;
	var nyo = naxr;
	do {
		iter++;od = d;
		d.julian += 1/1440;
		d.universalDate = $moshier.julian.toGregorian ({julian: (d.julian) });
	d.universalDateString =
		d.universalDate.day + '.' +
		d.universalDate.month + '.' +
		d.universalDate.year + ' ' +
		d.universalDate.hours + ':' +
		d.universalDate.minutes;
		$moshier.kepler.calc (d, $moshier.body.earth);
		$const.date = d;
		$const.body = $moshier.body.moon;
		$const.body.key = 'moon';
		$moshier.moon.calc ();
		nyo = Math.floor(((360+$moshier.body.moon.position.apparentLongitude+corr_ayan) % 360)/13.3333333333);
		lon0 = $moshier.body.moon.position.apparent.lon0;
		if (iter > 100) { break; }
	} while ( Math.abs(nyo - naxr) < 1  )
		od.universalDate = $moshier.julian.toGregorian ({julian: (od.julian/*+((tz*3600.0)/86400.0)*/) });
	od.universalDateString =
		od.universalDate.day + '.' +
		od.universalDate.month + '.' +
		od.universalDate.year + ' ' +
		od.universalDate.hours + ':' +
		od.universalDate.minutes;
	var naxe = od.universalDate.hours + ':' +od.universalDate.minutes + ' ' + od.universalDate.month + '/'+od.universalDate.day; 


	$copy(d,remd2);
	$const.date = d;

	var dow = curDate.getDay();

	var diff_sun_moon = (moon2 - sun2 + 360) % 360;
	var n_tithi = Math.floor(diff_sun_moon/12); var n_tithi2=n_tithi;
	var f_tithi = (diff_sun_moon/12);
	var txt_hmonth ='';

	Ujjaini_lon   = 75.8;
	desantara = (lon - Ujjaini_lon) / 360;
	set_primary_constant_SuryaSiddhanta();
	set_secondary_constant();
	set_planetary_constant();
	JulianDay = d.julian;//ModernDate_to_JulianDay(cdate.getYear(), cdate.getMonth(), cdate.getDate());
	var ah = JulianDay_to_Ahargana(JulianDay);
	JulianDay = Math.floor(JulianDay+0.5);
	ah = Math.floor(ah + 0.5);
	ah = ah  + 0.25 - desantara;
	var eqt = get_daylight_equation(curDate.getFullYear(), lat, ah);
	ah = ah - eqt;

	var cl, ncl;

	PlanetMeanPosition['Candrocca'] = get_mean_long(ah, YugaRotation['Candrocca']) + 90;
	PlanetMeanPosition['Candrocca'] = zero360(PlanetMeanPosition['Candrocca']);

	PlanetMeanPosition['Rahu'] = get_mean_long(ah, YugaRotation['Rahu']) + 180;
	PlanetMeanPosition['Rahu'] = zero360(PlanetMeanPosition['Rahu']);

	mslong = get_mean_long(ah, YugaRotation['sun']);
	PlanetMeanPosition['sun'] = mslong;
//     	tslong = zero360(mslong - get_manda_equation((mslong - PlanetApogee['sun']), 'sun'));
//	PlanetTruePosition['sun'] = tslong;
	PlanetTruePosition['sun'] = sun2;
	tslong = sun2;

	mllong = get_mean_long(ah, YugaRotation['moon']);
	PlanetMeanPosition['moon'] = mllong;
	PlanetApogee['moon'] = PlanetMeanPosition['Candrocca'];

//	tllong = zero360(mllong - get_manda_equation((mllong - PlanetApogee['moon']), 'moon'));
//	PlanetTruePosition['moon'] = tllong;
	PlanetTruePosition['moon'] = moon2;
	tllong = moon2;	

	cl =get_clong(ah, n_tithi);
	ncl = get_nclong(ah, n_tithi);
	var adhimasa = get_adhimasa(cl, ncl);
	var masa_num = get_masa_num(tslong, cl);

	YearKali = Ahargana_to_Kali(ah + (4 - masa_num) * 30);
	YearSaka = Kali_to_Saka(YearKali);
//	saura_masa = get_saura_masa_name(saura_masa_num);
	var yog = get_yoga_name(tslong, tllong); //yoga_name[Math.floor(((sun2+moon2) % 360)*27/360)];
        year_mod  = (Math.floor((YearKali * 211 - 108)/18000) + YearKali + 26) % 60;

	if (((Math.floor(cl/30)+2)%12) == Math.floor(ncl/30)) { 
		var kshaya_masa = (Math.floor(cl/30)+1)%12;
		
		adhimasa = 'Kshaya-'+ h_mon[kshaya_masa] + ' ' + adhimasa;
		if (masa_num == kshaya_masa) { masa_num = (Math.floor(ncl/30))%12; }
	}
	txt_hmonth = adhimasa + h_mon[masa_num];

	var txt_tithi, txt_paksha;
	if (n_tithi == 14) { txt_tithi = "Purnima"; txt_paksha = "Shukla"; 
	} else if (n_tithi == 29) { txt_tithi = "Amavasya";  txt_paksha = "Krishna";
	} else if (n_tithi > 13) { n_tithi = n_tithi - 15; txt_tithi = h_tithi[n_tithi]; txt_paksha = "Krishna";
	} else { txt_tithi = h_tithi[n_tithi];  txt_paksha = "Shukla";
	}




var	sun2_l,moon2_l,mercury2_l,venus2_l,mars2_l,jupiter2_l,saturn2_l,uranus2_l,neptune2_l,pluto2_l;

	tab = "<h4 >" + d.universalDateString+" UTC/GMT<br/>";

	showPanchang = document.getElementById('pp_showPanchang').value;

	if (showPanchang) {
	tab = tab + "Ayanamsa "+ ayan_name[sel_ayan]+" : " + string_ayan+"</h4>";
	tab = tab + "<p><span>Nakshatra:</span><span style='float:right;clear:right;font-weight:900;'>" + nax[Math.floor(moon2/13.33333333334)] + " upto "+naxe+"</span><br/><span>Tithi:</span><span style='float:right;clear:right;font-weight:900;'>" + txt_tithi+" upto "+tthi+"</span><br/><span>Karana:</span><span style='float:right;clear:right;font-weight:900;'>"+get_karana_name(f_tithi)+" upto "+krna+"</span><br/><span>Yoga:</span><span style='float:right;clear:right;font-weight:900;'>" + yog + " upto "+yoge+"</span><br/><span>Month:</span><span style='float:right;clear:right;font-weight:900;'>"+ txt_hmonth+"</span><br/><span>Paksha:</span><span style='float:right;clear:right;font-weight:900;'>"+txt_paksha+"</span><br/><span>Year:</span><span style='float:right;clear:both;font-weight:900;'>"+ YearSaka + " " + get_Jovian_Year_name_south(YearKali)+ " Shaka Samvat<br/>"+ (YearSaka+135) + " " + get_Jovian_Year_name(YearKali) + " Vikrama Samvat</span></p><br>";
	}

	showTable = document.getElementById('pp_showTable').value;
	if (showTable) {
	tab = tab + "<table id='tropic' cellspacing='0' cellpadding='0' border='1'><th>Planet</th><th>Tropical Position</th><th>Sidereal Position</th><th>Lunar Mansion</th>";
	
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Sun</td><td><p style=\"color:"+zods[Math.floor(sun/30.0)][1]+"\">"+zods[Math.floor(sun/30.0)][0]+"</p> "+("00"+Math.floor(sun - (Math.floor(sun/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(sun_m)).substr(-2) + "'" + (sun_s).toFixed(1) + "\"</td><td><p style=\"color:"+zods[Math.floor(sun2/30.0)][1]+"\">"+zods[Math.floor(sun2/30.0)][0]+"</p> "+("00"+Math.floor(sun2 - (Math.floor(sun2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(sun2_m)).substr(-2) + "'" + (sun2_s).toFixed(1) + "\"</td><td style='font-family:sans,sans-serif!important;'>" + nax[sun2_n] + "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Moon</td><td><p style=\"color:"+zods[Math.floor(moon/30.0)][1]+"\">"+zods[Math.floor(moon/30.0)][0]+"</p> "+("00"+Math.floor(moon - (Math.floor(moon/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(moon_m)).substr(-2) + "'" + (moon_s).toFixed(1) + "\"</td><td><p style=\"color:"+zods[Math.floor(moon2/30.0)][1]+"\">"+zods[Math.floor(moon2/30.0)][0]+"</p> "+("00"+Math.floor(moon2 - (Math.floor(moon2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(moon2_m)).substr(-2) + "'" + (moon2_s).toFixed(1) + "\"</td><td style='font-family:sans,sans-serif!important;'>"+ nax[moon2_n] + "</td></tr>"; 
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Mercury</td><td><p style=\"color:"+zods[Math.floor(mercury/30.0)][1]+"\">"+zods[Math.floor(mercury/30.0)][0]+"</p> "+("00"+Math.floor(mercury - (Math.floor(mercury/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(mercury_m)).substr(-2) + "'"+(mercury_s).toFixed(1) +"\"" + mercuryR+"</td><td><p style=\"color:"+zods[Math.floor(mercury2/30.0)][1]+"\">"+zods[Math.floor(mercury2/30.0)][0]+"</p> "+("00"+Math.floor(mercury2 - (Math.floor(mercury2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(mercury2_m)).substr(-2) + "'"+(mercury2_s).toFixed(1) +"\"" + mercuryR+"</td><td style='font-family:sans,sans-serif!important;'>" + nax[mercury2_n] + "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Venus</td><td><p style=\"color:"+zods[Math.floor(venus/30.0)][1]+"\">"+zods[Math.floor(venus/30.0)][0]+"</p> "+("00"+Math.floor(venus - (Math.floor(venus/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(venus_m)).substr(-2) + "'"+ (venus_s).toFixed(1) + "\""+venusR+"</td><td><p style=\"color:"+zods[Math.floor(venus2/30.0)][1]+"\">"+zods[Math.floor(venus2/30.0)][0]+"</p> "+("00"+Math.floor(venus2 - (Math.floor(venus2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(venus2_m)).substr(-2) + "'"+ (venus2_s).toFixed(1) + "\""+venusR+"</td><td style='font-family:sans,sans-serif!important;'>" + nax[venus2_n] + "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Mars</td><td><p style=\"color:"+zods[Math.floor(mars/30.0)][1]+"\">"+zods[Math.floor(mars/30.0)][0]+"</p> "+("00"+Math.floor(mars - (Math.floor(mars/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(mars_m)).substr(-2) + "'"+ (mars_s).toFixed(1) + "\""+marsR+"</td><td><p style=\"color:"+zods[Math.floor(mars2/30.0)][1]+"\">"+zods[Math.floor(mars2/30.0)][0]+"</p> "+("00"+Math.floor(mars2 - (Math.floor(mars2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(mars2_m)).substr(-2) + "'"+ (mars2_s).toFixed(1) + "\""+marsR+"</td><td style='font-family:sans,sans-serif!important;'>" + nax[mars2_n] +"</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Jupiter</td><td><p style=\"color:"+zods[Math.floor(jupiter/30.0)][1]+"\">"+zods[Math.floor(jupiter/30.0)][0]+"</p> "+("00"+Math.floor(jupiter - (Math.floor(jupiter/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(jupiter_m)).substr(-2) + "'"+ (jupiter_s).toFixed(1) + "\""+ jupiterR+"</td><td><p t=\"_blank\" style=\"color:"+zods[Math.floor(jupiter2/30.0)][1]+"\">"+zods[Math.floor(jupiter2/30.0)][0]+"</p> "+("00"+Math.floor(jupiter2 - (Math.floor(jupiter2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(jupiter2_m)).substr(-2) + "'"+ (jupiter2_s).toFixed(1) + "\""+ jupiterR+"</td><td style='font-family:sans,sans-serif!important;'>" + nax[jupiter2_n] +"</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Saturn</td><td><p style=\"color:"+zods[Math.floor(saturn/30.0)][1]+"\">"+zods[Math.floor(saturn/30.0)][0]+"</p> "+("00"+Math.floor(saturn - (Math.floor(saturn/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(saturn_m)).substr(-2) + "'"+ (saturn_s).toFixed(1) + "\""+ saturnR+"</td><td><p style=\"color:"+zods[Math.floor(saturn2/30.0)][1]+"\">"+zods[Math.floor(saturn2/30.0)][0]+"</p> "+("00"+Math.floor(saturn2 - (Math.floor(saturn2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(saturn2_m)).substr(-2) + "'"+ (saturn2_s).toFixed(1) + "\""+ saturnR+"</td><td style='font-family:sans,sans-serif!important;'>" + nax[saturn2_n] + "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Uranus</td><td><p style=\"color:"+zods[Math.floor(uranus/30.0)][1]+"\">"+zods[Math.floor(uranus/30.0)][0]+"</p> "+("00"+Math.floor(uranus - (Math.floor(uranus/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(uranus_m)).substr(-2) + "'"+ (uranus_s).toFixed(1) + "\""+ uranusR+"</td><td><p style=\"color:"+zods[Math.floor(uranus2/30.0)][1]+"\">"+zods[Math.floor(uranus2/30.0)][0]+"</p> "+("00"+Math.floor(uranus2 - (Math.floor(uranus2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(uranus2_m)).substr(-2) + "'"+ (uranus2_s).toFixed(1) + "\""+ uranusR+"</td><td style='font-family:sans,sans-serif!important;'>"+ nax[uranus2_n] + "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Neptune</td><td><p style=\"color:"+zods[Math.floor(neptune/30.0)][1]+"\">"+zods[Math.floor(neptune/30.0)][0]+"</p> "+("00"+Math.floor(neptune - (Math.floor(neptune/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(neptune_m)).substr(-2) + "'"+ (neptune_s).toFixed(1) + "\""+ neptuneR+"</td><td><p et=\"_blank\" style=\"color:"+zods[Math.floor(neptune2/30.0)][1]+"\">"+zods[Math.floor(neptune2/30.0)][0]+"</p> "+("00"+Math.floor(neptune2 - (Math.floor(neptune2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(neptune2_m)).substr(-2) + "'"+ (neptune2_s).toFixed(1) + "\""+ neptuneR+"</td><td style='font-family:sans,sans-serif!important;'>"+nax[neptune2_n]+"</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Pluto</td><td><p style=\"color:"+zods[Math.floor(pluto/30.0)][1]+"\">"+zods[Math.floor(pluto/30.0)][0]+"</p> "+("00"+Math.floor(pluto - (Math.floor(pluto/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(pluto_m)).substr(-2) + "'"+ (pluto_s).toFixed(1) + "\""+ plutoR+"</td><td><p style=\"color:"+zods[Math.floor(pluto2/30.0)][1]+"\">"+zods[Math.floor(pluto2/30.0)][0]+"</p> "+("00"+Math.floor(pluto2 - (Math.floor(pluto2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(pluto2_m)).substr(-2) + "'"+ (pluto2_s).toFixed(1) + "\""+ plutoR+"</td><td style='font-family:sans,sans-serif!important;'>"+nax[pluto2_n]+"</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>North Node</td><td><p style=\"color:"+zods[Math.floor(nnode/30.0)][1]+"\">"+zods[Math.floor(nnode/30.0)][0]+"</p> "+("00"+Math.floor(nnode - (Math.floor(nnode/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(nnode_m)).substr(-2) + "'" + (nnode_s).toFixed(1) + "\"R</td><td><p style=\"color:"+zods[Math.floor(nnode2/30.0)][1]+"\">"+zods[Math.floor(nnode2/30.0)][0]+"</p> "+("00"+Math.floor(nnode2 - (Math.floor(nnode2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(nnode2_m)).substr(-2) + "'" + (nnode2_s).toFixed(1) + "\"R</td><td style='font-family:sans,sans-serif!important;'>"+nax[nnode2_n]+ "</td></tr>" ;  
	tab = tab + "<tr><td style='font-family:sans,sans-serif!important;'>Ascendant</td><td><span style=\"color:"+zods[Math.floor(asc2/30.0)][1]+"\">"+zods[Math.floor(asc2/30.0)][0]+"</span> "+("00"+Math.floor(asc2 - (Math.floor(asc2/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(asc_m)).substr(-2) + "'" + (asc_s).toFixed(1) + "\"</td><td><span style=\"color:"+zods[Math.floor(asc22/30.0)][1]+"\">"+zods[Math.floor(asc22/30.0)][0]+"</span> "+("00"+Math.floor(asc22 - (Math.floor(asc22/30)*30.0))).substr(-2) + "°"+ ("00"+Math.floor(asc2_m)).substr(-2) + "'" + (asc2_s).toFixed(1) + "\"</td><td style='font-family:sans,sans-serif!important;'>"+ nax[asc2_n]+"</td></tr></table>";
	}

	var houses = [];
	var planets_h = [];
	var ruler_h = [ 
		"Mars","Venus","Mercury","Moon","Sun","Mercury","Venus","Mars","Jupiter","Saturn","Saturn","Jupiter"
		];

	var snode = (nnode + 180.0) % 360.0;
	var k;
	for (k = 0; k < 12; k++) {
		houses [k] = (asc2 + k*30.0);
		if (houses[k] > 390.0) { houses[k] = houses[k] % 360.0; }
	}
	for (k = 0; k < 12; k++) {
		var n = k+1;
		if (n == 12) { n = 0; }
		if (sun > houses[k] && sun < houses[n]) { planets_h[0] = k+1; }
		if (moon > houses[k] && moon < houses[n]) { planets_h[1] = k+1; }
		if (mercury > houses[k] && mercury < houses[n]) { planets_h[2] = k+1; }
		if (venus > houses[k] && venus < houses[n]) { planets_h[3] = k+1; }
		if (mars > houses[k] && mars < houses[n]) { planets_h[4] = k+1; }
		if (jupiter > houses[k] && jupiter < houses[n]) { planets_h[5] = k+1; }
		if (saturn > houses[k] && saturn < houses[n]) { planets_h[6] = k+1; }
		if (uranus > houses[k] && uranus < houses[n]) { planets_h[7] = k+1; }
		if (neptune > houses[k] && neptune < houses[n]) { planets_h[8] = k+1; }
		if (pluto > houses[k] && pluto < houses[n]) { planets_h[9] = k+1; }
		if (nnode > houses[k] && nnode < houses[n]) { planets_h[10] = k+1; }
		if (snode > houses[k] && snode < houses[n]) { planets_h[11] = k+1; }
	}

	var snode2 = (nnode2 + 180.0) % 360.0;
	p_sort = [ 
			sun2,
			moon2,
			mars2,
			venus2,
			mercury2,
			jupiter2,
			saturn2,
			uranus2,
			neptune2,
			pluto2,
			nnode2,
			snode2,
			asc22
			];
	p_sort1 = [ 
			sun,
			moon,
			mars,
			venus,
			mercury,
			jupiter,
			saturn,
			uranus,
			neptune,
			pluto,
			nnode,
			snode,
			asc2
			];
var	p_name1 = [ 
			["sun","a","f00"],
			["moon","b","00f"],
			["mars","e","f00"],
			["venus","d","f0c"],
			["mercury","c","080"],
			["jupiter","f","840"],
			["saturn","g","333"],
			["uranus","h","a0a"],
			["neptune","i","00a"],
			["pluto","j","a00"],
			["nnode","T","555"],
			["snode","U","555"],
			["asc","M","678"]
		 ];
var	p_name = [ 
			["sun","a","f00"],
			["moon","b","00f"],
			["mars","e","f00"],
			["venus","d","f0c"],
			["mercury","c","080"],
			["jupiter","f","840"],
			["saturn","g","333"],
			["uranus","h","a0a"],
			["neptune","i","00a"],
			["pluto","j","a00"],
			["nnode","T","555"],
			["snode","U","555"],
			["asc","M","678"]
		 ];

	var p_sort = [ 
			sun2,
			moon2,
			mars2,
			venus2,
			mercury2,
			jupiter2,
			saturn2,
			uranus2,
			neptune2,
			pluto2,
			nnode2,
			snode2,
			asc22
			];

	var retro = [ "", "",
			marsR,
			venusR,
			mercuryR,
			jupiterR,
			saturnR,
			uranusR,
			neptuneR,
			plutoR,
			"R","R",""];
	var k; var swp;
	do {
		swp = 0;
		for (k = 0; k < 12; k++) {
			if (p_sort[k+1] < p_sort[k]) {
				var tmp;
				tmp = p_sort[k+1];
				p_sort[k+1] = p_sort[k];
				p_sort[k] = tmp;
				tmp = p_name[k+1];
				p_name[k+1] = p_name[k];
				p_name[k] = tmp;
				tmp = p_sort1[k+1];
				p_sort1[k+1] = p_sort1[k];
				p_sort1[k] = tmp;
				tmp = p_name1[k+1];
				p_name1[k+1] = p_name1[k];
				p_name1[k] = tmp;
				tmp = retro[k+1];
				retro[k+1] = retro[k];
				retro[k] = tmp;
				swp = 1;
			}
		}	
	} while (swp == 1);

	var waxing = false; var fracp = Math.abs(diff_sun_moon/180);var txt_phase = "Waning "; var txt_phase2 = "";
	showMoon = document.getElementById('pp_showMoon').value;
	if (showMoon) {
	tab = tab + "<br/><br/><br/><br/><p style='text-align:center;margin-top:-4em!important;' >Moon Phase : <span id='pom' style='text-align:center;margin:0 auto;'></span></p><div id='moonpp' class='moonpp' style='position:relative;display:block;text-align:center;width:150px;height:150px;margin:auto;'><img style='position:absolute;display:inline-block;width:150px;height:150px;' id='moonp' class='moonp' src='"+plugUrl+"../images/moon.png' /><div style='display:inline-block;position:relative;width:75px;height:150px;left:0;opacity:0.7;'><img style='display:inline-block;position:absolute;margin:0;width:75px;height:150px;left:0;' id='moon-left-bg' class='moon-left-bg' src='"+plugUrl+"../images/moon_left_bg.svg' /><img style='display:inline-block;position:absolute;margin:0;width:75px;height:150px;left:0;' id='moon-left-fg' class='moon-left-fg' src='"+plugUrl+"../images/moon_left_fg.svg' /></div><div style='display:inline-block;position:relative;width:75px;height:150px;left:0;opacity:0.7;'><img id='moon-right-bg' class='moon-right-bg' style='display:inline-block;position:absolute;margin:0;width:75px;height:150px;left:0;' src='"+plugUrl+"../images/moon_right_bg.svg'/><img id='moon-right-fg' class='moon-right-fg' style='display:inline-block;position:absolute;margin:0;width:75px;height:150px;left:0px;' src='"+plugUrl+"../images/moon_right_fg.svg'/></div></div>";
	if (txt_paksha == "Shukla") { waxing = true; txt_phase = "Waxing "; }
	if ( Math.abs(fracp - 0.5) < 0.075  && Math.abs(fracill) < 0.525 && Math.abs(fracill) > 0.475) { txt_phase = "First Quarter"; }
	else if ( Math.abs(fracp - 1.0) < 0.075 && Math.abs(fracill) > 0.99 ) { txt_phase = "Full Moon"; }
	else if ( Math.abs(fracill) < 0.01) { txt_phase = "New Moon"; }
	else if ( Math.abs(fracp - 1.5) < 0.075  && Math.abs(fracill) < 0.525 && Math.abs(fracill) > 0.475) { txt_phase = "Third Quarter"; }
	if (txt_phase.substring(0,1) == 'W') { if (fracp < 0.5 || fracp > 1.5) {txt_phase2 = "Crescent"; } else { txt_phase2 = "Gibbous"; } }
	tab = tab + "</span>";
	}
	
	showWheels = document.getElementById('pp_showWheels').value;
	if (!showWheels) {
		tab = tab + "</div></div>";
		$JQ("#rasi").html(tab);

		if (showMoon) {
		var phaseScale = 1;
		var phaseTrans = 100;
		var phaseRight = 0,phase = fracill*200;
		if (!waxing){
			$JQ('.moonpp').css({'-webkit-transform':'scaleX(-1)' });
			$JQ('.moonpp').css({'-o-transform':'scaleX(-1)' });
			$JQ('.moonpp').css({'-moz-transform':'scaleX(-1)' });
			$JQ('.moonpp').css({'transform':'scaleX(-1)' });
			$JQ('.moonp').css({'-webkit-transform':'scaleX(-1)' });
			$JQ('.moonp').css({'-o-transform':'scaleX(-1)' });
			$JQ('.moonp').css({'-moz-transform':'scaleX(-1)' });
			$JQ('.moonp').css({'transform':'scaleX(-1)' });
		}
		if(phase <= 100) {
		phaseRight = (1-(phase/100));
		}
		$JQ('.moon-right-fg').css({'-webkit-transform':'scaleX(' + phaseRight + ')' });
		$JQ('.moon-right-fg').css({'-moz-transform':'scaleX(' + phaseRight + ')' });
		$JQ('.moon-right-fg').css({'-o-transform':'scaleX(' + phaseRight + ')' });
		$JQ('.moon-right-fg').css({'transform':'scaleX(' + phaseRight + ')' });
		$JQ('.moon-right-fg').css({'transform-origin':'0% 0%' });

		if(phase >= 100) {
		phaseScale = (1-(phase-100)/100);
		phaseTrans = 75*phaseScale;
		}
		$JQ('.moon-left-fg').css({'-webkit-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
		$JQ('.moon-left-fg').css({'-moz-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
		$JQ('.moon-left-fg').css({'-o-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
		$JQ('.moon-left-fg').css({'transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
		$JQ('.moon-left-fg').css({'transform-origin':'0% 0%' });
		$JQ('#pom').html(txt_phase+txt_phase2+ " : fraction " + txt_fracill);
		}
		return;
	}

	tab = tab + "\r\n";
	tab = tab + "<h4>Sidereal Lunar mansion (nakshatra) Chart<br/><br/></h4>\r\n";

	tab = tab + "<div class='circl'>";
	tab = tab + "<p class='ppos'>Place: <br/>" + "Greenwich, U.K." + "<br/>Time: <br />" + d.universalDateString+" UTC/GMT</p>";
	tab = tab + "<div class='rasicircle' style='transform: rotate("+(asc22)+"deg);-webkit-transform: rotate("+(asc22)+"deg)'>";
	tab = tab + "<img src='"+plugUrl+"../images/nax7.png' />";
	
	var oddeven = ""; var p_class = []; var overl;
	for ( k = 0 ; k < 13; k++) {
		overl = "";
		if (retro[k]) { overl = "; text-decoration:underline;"; }
		if (oddeven == "2") { oddeven = ""; } else { oddeven = "2"; }
		tab = tab + "<span class='"+ p_name[k][0] + oddeven + "' style='font-family:Saravali!important;" + overl + ";color:#"+ p_name[k][2] + ";transform:rotate("+(-p_sort[k])+"deg);-webkit-transform:rotate("+(-p_sort[k])+"deg);" + "' >";
		tab = tab +  p_name[k][1];
		tab = tab + "</span>";
		p_class[p_name[k]] = "." + p_name[k][0] + oddeven;
	}


	tab = tab + "</div></div>";
	
	tab = tab + "<div id='tropical'>";
	tab = tab + "<h4>Tropical Zodiac Wheel</h4>";

	tab = tab + "<div class='circl2'>";
	tab = tab + "<p class='ppos'>Place: <br/>" + "Greenwich, U.K." + "<br />Time: <br />" + d.universalDateString+ " UTC/GMT</p>";
	tab = tab + "<div class='zodiac' style='transform: rotate("+(asc2+270)+"deg);-webkit-transform: rotate("+(asc2+270)+"deg);'>";
//	$JQ(".zodiac").css({"transform" : "rotate(" + ((asc2+270)%360) + "deg)" });
	tab = tab + "<img src='"+plugUrl+"../images/zodiac-wheel9.png' />";


	var aspects = ["<span style='font-family:Saravali!important;'>M</span>", "<span style='font-family:Saravali!important;'>Q</span>", "<span style='font-family:Saravali!important;'>O</span>", "<span style='font-family:Saravali!important;'>P</span>", "<span style='font-family:Saravali!important;'>N</span>", "<span style='font-family:Saravali!important;'>V</span>", "<span style='font-family:Saravali!important;'>:</span>", "<span style='font-family:Saravali!important;'>%</span>","<span style='font-family:Saravali!important;'>R</span>","<span style='font-family:Saravali!important;'>±</span>","<span style='font-family:Saravali!important;'>W</span>"];
	var asp_name = [ "Conjunction - 0°",
			"Sextile - 60°",
			"Square - 90°",
			"Trine - 120°",
			"Opposition - 180°",
			"Semisextile - 30°",
			"Semisquare - 45°",
			"Quintile - 72°",
			"Sesquiquadrate - 135°",
			"Biquintile - 144°",
			"Quincunx - 150°"
			];
	var p_asp = [];
	for (k= 0; k < 13; k++) {
		p_asp[k] = [];
		for (i=0; i < 13; i++) {
			p_asp[k][i] = [ ];
		}
	}
	for (k= 0; k < 13; k++) {
		for (i=0; i < 13; i++) {
			if (k !== i) {
				var degdiff = Math.abs((p_sort1[i] - p_sort1[k] + 360) % 360);
				p_asp[i][k][2] = degdiff;
				if ((Math.abs(degdiff - 0) < 10) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[0];
					p_asp[i][k][1] = Math.abs(degdiff - 0);
				} else if ((Math.abs(degdiff - 180 % 360) < 10) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[4];
					p_asp[i][k][1] = Math.abs(degdiff - 180 % 360);
				} else if ((Math.abs(degdiff - 90 % 360) < 10) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[2];
					p_asp[i][k][1] = Math.abs(degdiff - 90 % 360);
				} else if ((Math.abs(degdiff - 120 % 360) < 10) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[3];
					p_asp[i][k][1] = Math.abs(degdiff - 120 % 360);
				} else if ((Math.abs(degdiff - 60 % 360) < 6) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[1];
					p_asp[i][k][1] = Math.abs(degdiff - 60 % 360);
				} else if ((Math.abs(degdiff - 30 % 360) < 3) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[5];
					p_asp[i][k][1] = Math.abs(degdiff - 30 % 360);
				} else if ((Math.abs(degdiff - 45 % 360) < 3) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[6];
					p_asp[i][k][1] = Math.abs(degdiff - 45 % 360);
				} else if ((Math.abs(degdiff - 150 % 360) < 3) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[10];
					p_asp[i][k][1] = Math.abs(degdiff - 150 % 360);
				} else if ((Math.abs(degdiff - 135 % 360) < 3) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[8];
					p_asp[i][k][1] = Math.abs(degdiff - 135 % 360);
				} else if ((Math.abs(degdiff - 72 % 360) < 2) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[7];
					p_asp[i][k][1] = Math.abs(degdiff - 72 % 360);
				} else if ((Math.abs(degdiff - 144 % 360) < 2) && (p_name1[i][0] !== "asc" && p_name1[k][0] !== "asc")) {
					p_asp[i][k][0] = aspects[9];
					p_asp[i][k][1] = Math.abs(degdiff - 144 % 360);
				} else if (p_name1[i][0] == "asc" || p_name1[k][0] == "asc") {
					if (Math.abs(degdiff - 0) < 1) {
						p_asp[i][k][0] = aspects[0];
						p_asp[i][k][1] = Math.abs(degdiff - 0 % 360);
					} else if (Math.abs(degdiff - 180 % 360) < 1) {
						p_asp[i][k][0] = aspects[4];
						p_asp[i][k][1] = Math.abs(degdiff - 180 % 360);
					} else if (Math.abs(degdiff - 90 % 360) < 1) {
						p_asp[i][k][0] = aspects[2];
						p_asp[i][k][1] = Math.abs(degdiff - 90 % 360);
					} else if (Math.abs(degdiff - 120 % 360) < 1) {
						p_asp[i][k][0] = aspects[3];
						p_asp[i][k][1] = Math.abs(degdiff - 120 % 360);
					} else if (Math.abs(degdiff - 60 % 360) < 1) {
						p_asp[i][k][0] = aspects[1];
						p_asp[i][k][1] = Math.abs(degdiff - 60 % 360);
					} else if (Math.abs(degdiff - 30 % 360) < 1) {
						p_asp[i][k][0] = aspects[5];
						p_asp[i][k][1] = Math.abs(degdiff - 30 % 360);
					} else if (Math.abs(degdiff - 45 % 360) < 1) {
						p_asp[i][k][0] = aspects[6];
						p_asp[i][k][1] = Math.abs(degdiff - 45 % 360);
					} else if (Math.abs(degdiff - 150 % 360) < 1) {
						p_asp[i][k][0] = aspects[10];
						p_asp[i][k][1] = Math.abs(degdiff - 45 % 360);
					} else if (Math.abs(degdiff - 135 % 360) < 1) {
						p_asp[i][k][0] = aspects[8];
						p_asp[i][k][1] = Math.abs(degdiff - 135 % 360);
					} else if (Math.abs(degdiff - 72 % 360) < 1) {
						p_asp[i][k][0] = aspects[7];
						p_asp[i][k][1] = Math.abs(degdiff - 72 % 360);
					} else if (Math.abs(degdiff - 144 % 360) < 1) {
						p_asp[i][k][0] = aspects[9];
						p_asp[i][k][1] = Math.abs(degdiff - 144 % 360);
					}
				}
			}
		}
	}

	
	var oddeven = "";
	for ( k = 0 ; k < 13; k++) {
		if (oddeven == "2") { oddeven = ""; } else { oddeven = "2"; }
		overl = "";
		if (retro[k]) { overl = "; text-decoration:underline;"; }
		tab = tab + "<div class='"+ p_name1[k][0] + "1" + oddeven + "' style='font-family:Saravali!important;color:#"+ p_name1[k][2] + overl + ";transform:rotate("+(-p_sort1[k])+"deg);-webkit-transform:rotate("+(-p_sort1[k])+"deg);' >" + p_name1[k][1];
		tab = tab + "</div>";
	}

	for ( k = 0 ; k < 13; k++) {
		for (i = 0; i < k; i++) {
		if (oddeven == "2") { oddeven = ""; } else { oddeven = "2"; }
		if (p_asp[k][i][0] ) { degrr = (360-p_sort1[i]+p_sort1[k])/2 % 180; 
			var widt =Math.abs(360.0*Math.sin(degrr*$const.DTR)/5.0);
			tab = tab + "<div style='border:none!important;color:transparent!important;transform:rotate("+(-p_sort1[k])+"deg);-webkit-transform:rotate("+(-p_sort1[k])+"deg);' class='"+p_name1[k][0]+"1"+oddeven+"'><div class='asp' style='border-bottom: 1px dotted #"+(p_name1[k][2])+";transform: rotate("+(degrr)+"deg);-webkit-transform: rotate("+(degrr)+"deg);width:"+(widt)+"%!important;'>&nbsp;</div></div>";  
		} else if (p_asp[i][k][0] ) { degrr = (360-(p_sort1[k]-p_sort1[i]) )/2 % 180; 
			var widt =Math.abs(360.0*Math.sin(degrr*$const.DTR)/5.0); 
			tab = tab + "<div style='border:none!important;color:transparent!important;transform:rotate("+(-p_sort1[i])+"deg);-webkit-transform:rotate("+(-p_sort1[i])+"deg);'  class='"+p_name1[i][0]+"1"+oddeven+"'><div class='asp' style='border-bottom: 1px dotted #"+(p_name1[i][2])+";transform: rotate("+(degrr)+"deg);-webkit-transform: rotate("+(degrr)+"deg);width:"+(widt)+"%!important;'>&nbsp;</div></div>"; 
		}
		}
	}
	tab = tab + "</div></div></div>";
	$JQ("#rasi").html(tab);
	
	if (showMoon) {
	var phaseScale = 1;
	var phaseTrans = 100;
	var phaseRight = 0,phase = fracill*200;
	if (!waxing){
		$JQ('.moonpp').css({'-webkit-transform':'scaleX(-1)' });
		$JQ('.moonpp').css({'-o-transform':'scaleX(-1)' });
		$JQ('.moonpp').css({'-moz-transform':'scaleX(-1)' });
		$JQ('.moonpp').css({'transform':'scaleX(-1)' });
		$JQ('.moonp').css({'-webkit-transform':'scaleX(-1)' });
		$JQ('.moonp').css({'-o-transform':'scaleX(-1)' });
		$JQ('.moonp').css({'-moz-transform':'scaleX(-1)' });
		$JQ('.moonp').css({'transform':'scaleX(-1)' });
	}
	if(phase <= 100) {
	phaseRight = (1-(phase/100));
	}
	$JQ('.moon-right-fg').css({'-webkit-transform':'scaleX(' + phaseRight + ')' });
	$JQ('.moon-right-fg').css({'-moz-transform':'scaleX(' + phaseRight + ')' });
	$JQ('.moon-right-fg').css({'-o-transform':'scaleX(' + phaseRight + ')' });
	$JQ('.moon-right-fg').css({'transform':'scaleX(' + phaseRight + ')' });
	$JQ('.moon-right-fg').css({'transform-origin':'0% 0%' });

	if(phase >= 100) {
	phaseScale = (1-(phase-100)/100);
	phaseTrans = 75*phaseScale;
	}
	$JQ('.moon-left-fg').css({'-webkit-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
	$JQ('.moon-left-fg').css({'-moz-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
	$JQ('.moon-left-fg').css({'-o-transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
	$JQ('.moon-left-fg').css({'transform':'translate('+phaseTrans+'px,0) scaleX(' + (1-phaseScale) + ')' });
	$JQ('.moon-left-fg').css({'transform-origin':'0% 0%' });
	$JQ('#pom').html(txt_phase+txt_phase2+ " : fraction " + txt_fracill);
	}
	
};   

function waitasec() {
	var t = new Date;
	if (t.getSeconds() % 30 < 2) { RASI(); }
}

$JQ(document).ready(function(){ 
	RASI(); 
//       setInterval(function() {waitasec(); } , 2000);

});
