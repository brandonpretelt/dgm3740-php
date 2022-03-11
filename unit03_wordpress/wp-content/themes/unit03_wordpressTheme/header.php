<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
   
    <title>WordPress Unit 03 | <?php  wp_title(); ?></title>

</head>

<body>
    <div class="container">
        <div class="header-grid">
            <nav class="site-nav-container">
                <div class="menu-toggle">
                    <span class="material-icons-outlined"> menu </span>
                    <span>Open</span>
                </div>

                <?php wp_nav_menu(array(
                    'container' => '',
                    'items_wrap' => '<ul class="nav mobile-menu"><span class="material-icons-outlined close-menu">close</span>%3$s</ul>',
                    'menu' => 'site-nav-container',
                    'menu_class' => 'nav mobile-menu',
                    'add_li_class' => 'nav-link'
                )); ?>

                <div class="menu-search">
                    <input placeholder="Search..." type="search" name="search-bar" id="search-bar" class="search-bar">
                    <button type="submit">
                        <span class="material-icons-outlined">
                            search
                        </span>
                    </button>
                </div>
            </nav>
            <header class="site-header-container">

                <div class="site-info">
                    <figure class="logo">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/3x/cabot_cruises@3x.png" srcset="
                                <?php echo get_template_directory_uri(); ?>/images/1x/cabot_cruises@1.png 1x,
                                <?php echo get_template_directory_uri(); ?>/images/2x/cabot_cruises@2x.png 2x,
                                <?php echo get_template_directory_uri(); ?>/images/3x/cabot_cruises@3x.png 3x
                            " alt="img src" loading="lazy">
                    </figure>
                    <div id="site-tel-number">
                        <a href="tel:1-800-555-1234">1-800-555-1234</a>
                    </div>
                </div>
            </header>
        </div>

        <main>

