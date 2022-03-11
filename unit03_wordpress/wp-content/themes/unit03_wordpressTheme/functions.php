<?php
add_filter('user_can_richedit', '__return_false', 50);
register_nav_menu('siteNavigation', 'Primary Navigation');

/* from https://stackoverflow.com/questions/14464505/how-to-add-class-in-li-using-wp-nav-menu-in-wordpress */
function add_additional_class_on_li($classes, $item, $args) {
    if (isset($args->add_li_class)) {
        $classes[] = $args->add_li_class;
    }
    return $classes;
}
add_filter('nav-link', 'add_additional_class_on_li', 1, 1);
/* end stackoverflow  */

/* https://www.codinghook.com/how-to-change-wordpress-sub-menu-class-with-custom-class/ */
function replace_submenu_class($menu) {  
    $menu = preg_replace('/ class="sub-menu"/','/ class="drop-down" /',$menu);  
    return $menu;  
  }  
  add_filter('wp_nav_menu','replace_submenu_class'); 
/* end coding hook */
?>