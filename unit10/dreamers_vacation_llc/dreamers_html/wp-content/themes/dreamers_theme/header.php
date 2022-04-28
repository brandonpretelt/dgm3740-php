<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css">
    <title>HOME || Dreamer Vacations LLC </title>
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js" defer></script>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">
</head>

<body>
    <div>
        <section class="site-head">
            <nav>
                <div class="menu-toggle"><span class="material-icons-outlined open"> menu </span></div>
                <?php wp_nav_menu(array(
                    'container' => '',
                    'items_wrap' => '<ul class="menu"><span class="material-icons-outlined close-menu close">close</span>%3$s</ul>',
                    'menu_class' => 'menu',
                    'depth' => '0',
                )) ?>
                <!-- <ul class="menu">
                    <span class="material-icons-outlined close-menu close">
                        close
                    </span>
                    <li><a href="#">Home</a> </li>
                    <li><a href="#">Resorts</a> </li>
                    <li><a href="#">Popular Destinations</a> </li>
                    <li><a href="#">Partners</a> </li>
                    <li><a href="#">About Us</a></li>
                </ul> -->
                <div class="search-bar">
                    <input type="search" placeholder="search...">
                </div>
            </nav>


            <header>
                <div>
                    <p> The logo goes here </p>
                </div>
            </header>
        </section>

        <main>

            <section class="main-content">
             