<?php
add_filter('user_can_richedit', '__return_false', 50);
register_nav_menu('siteNavigation', 'Primary Navigation');
?>