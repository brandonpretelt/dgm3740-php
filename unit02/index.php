<?php include('includes/_top.php') ?>
    <div class="container">
        <div class="header-grid">
            <nav class="site-nav-container">
                <div class="menu-toggle">
                    <span class="material-icons-outlined"> menu </span>
                    <span>Open</span>
                </div>

                <ul class="nav mobile-menu">
                    <span class="material-icons-outlined close-menu">
                        close
                    </span>
                    <li class="nav-link"><a href="#">Home</a></li>
                    <li class="nav-link"><a href="#">Cruises</a></li>
                    <li class="nav-link">
                        <div class="li-heading">
                            Agents
                            <span class="material-icons-outlined open-dropdown">
                                arrow_drop_down
                            </span>
                        </div>


                        <ul class="drop-down">
                            <li class="nav-link"><a href="#">Some Agent</a></li>
                            <li class="nav-link"><a href="#">Some Agent</a></li>
                        </ul>
                    </li>
                    <li class="nav-link"><a href="book/index.php">Book</a></li>
                </ul>
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
                        <img src="images/3x/cabot_cruises@3x.png" srcset="
                                images/1x/cabot_cruises@1.png 1x,
                                images/2x/cabot_cruises@2x.png 2x,
                                images/3x/cabot_cruises@3x.png 3x
                            " alt="img src" loading="lazy">
                    </figure>
                    <div id="site-tel-number">
                        <a href="tel:1-800-555-1234">1-800-555-1234</a>
                    </div>
                </div>
            </header>
        </div>

        <main>
            <section id="hero-section">
                <!-- https://cdn.jsdelivr.net/npm/tiny-slider@2.9.4/dist/tiny-slider.min.js use that instead -->
                <div class="slider-container">
                    <div class="image-slider">
                        <picture>
                            <source srcset="images/slider-images/slide_1h.jpg" media="(min-width: 700px)"
                                height="350px">
                            <img srcset="images/slider-images/slide_1s.jpg" alt="cruise 1"
                                src="images/slider-images/slide_1s.jpg" loading="lazy">
                        </picture>

                        <picture>
                            <source srcset="images/slider-images/slide_2h.jpg" media="(min-width: 700px)"
                                height="350px">
                            <img srcset="images/slider-images/slide_2s.jpg" alt="cruise 2"
                                src="images/slider-images/slide_2s.jpg" loading="lazy">
                        </picture>

                        <picture>
                            <source srcset="images/slider-images/slide_3h.jpg" media="(min-width: 700px)"
                                height="350px">
                            <img srcset="images/slider-images/slide_3s.jpg" alt="cruise 3"
                                src="images/slider-images/slide_3s.jpg" loading="lazy">
                        </picture>

                        <picture>
                            <source srcset="images/slider-images/slide_4h.jpg" media="(min-width: 700px)"
                                height="350px">
                            <img srcset="images/slider-images/slide_4s.jpg" alt="cruise 4"
                                src="images/slider-images/slide_4s.jpg" loading="lazy">
                        </picture>

                    </div>
                    <div class="image-slider-dots-container" aria-label="image slider nav"></div>
                </div>
                <!-- <div class="hero">
                    <figure class="hero-img
                    glider"></figure>
                </div> -->
            </section>
            <section id="blog-section" class="blog">
                <h2>Recent Blog Articles</h2>
                <div class="blog-grid">
                    <article class="article-card">
                        <figure class="card-content">
                            <figcaption>Carnival Cruise Fun For The Family</figcaption>
                            <img src="images/blog-images/family.jpg" alt="family image" loading="lazy">
                            <p class="caption">January 1st, 2021</p>
                        </figure>
                    </article>
                    <article class="article-card">
                        <figure class="card-content">
                            <figcaption>Popular Cruise Destinations</figcaption>
                            <img src="images/blog-images/caribbean.jpg" alt="caribbean image" loading="lazy">
                            <p class="caption">May 1st, 2021</p>
                        </figure>
                    </article>
                    <article class="article-card">
                        <figure class="card-content">
                            <figcaption>What Not To Do On a Cruise</figcaption>
                            <img src="images/blog-images/what-not-to-do.jpg" alt="phone with a strikethrough"
                                loading="lazy">
                            <p class="caption">June 1st, 2021</p>
                        </figure>
                    </article>
                    <article class="article-card">
                        <figure class="card-content">
                            <figcaption>Best Destinations for 2022</figcaption>
                            <img src="images/blog-images/santorini.jpg" alt="santorini" loading="lazy">
                            <p class="caption">August 1st, 2021</p>
                        </figure>
                    </article>
                </div>
            </section>
        </main>
<?php include('includes/_bottom.php') ?>