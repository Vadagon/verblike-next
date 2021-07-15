import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'

export default function Home({  }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
<section className="masthead js-masthead-height pb-0">
        <div className="masthead__style-overlay"></div>
        <div className="masthead__style-watter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="masthead__content masthead__content-mtop">
                            <h1 className="masthead__content-title">Chrome Extension Development</h1>
                            <p className="masthead__content-subtitle">With over 5 years of experience developing and deploying browser plug-ins for your business.</p>
                            <div className="masthead__content-action">
                                <a onclick="openContactFrom()" href="#" className="btn btn-primary btn-rounded btn-icon-left btn-lg"><i className="fa fa-envelope"></i> Inquiry Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="masthead__style-watter--image">
                            <div className="masthead__style-watter--icon flyIn">
                                <img src="/images/img/masthead-icon.png" className="img-fluid" alt="Icon" />
                            </div>
                            <img src="/images/img/businessman-meditating.png" className="img-fluid" alt="Business Man" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section pb-40 section2">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h2 className="section__heading section__heading-center">I provide wide range of Services</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center mb-40">
                    <p>
                        I have expertise in Chrome Extension and Web Scraping, including technologies from <b>Linux</b>, <b>PHP</b>/<b>Node</b>.js to <b>Angular</b>/<b>Vue</b> and <b>MySQL</b>/<b>MongoDB</b>/<b>Firebase</b>. I also have experience integrating <b>third-party APIs</b>.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-hard-disk column-icon"></span>
                        <h4>Data Scrapping</h4>
                        <p>
                            Scrape any information that you see on any website or even automate your data gathering / data entry tasks involving Google Spreadsheet, Excel, MySQL database, XML / JSON format.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-device column-icon"></span>
                        <h4>Selling Landing Page</h4>
                        <p>
                            ClickFunnel, Squarespace, Wordpress or made from scratch website to make your product shine even better and to sell membership accesses.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-cogs column-icon"></span>
                        <h4>Automation</h4>
                        <p>
                            Create a Google Chrome Extension for Automation of a manual process on regular basis or whenever you click on a button.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-linkedin column-icon"></span>
                        <h4>LinkedIn Extension</h4>
                        <p>
                            The LinkedIn extension can retrieve data from LinkedIn for various user profiles and retrieve various information about users, including name, position, experience, company and email.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-facebook column-icon"></span>
                        <h4>Facebook Extension</h4>
                        <p>
                            The Facebook extension can automatically send messages to new friends or bulk unsubscribe from all friends at once.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-instagram column-icon"></span>
                        <h4>Instagram Extension</h4>
                        <p>
                            You can use the Chrome extension to automate repetitive actions like following, commenting, posting etc.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-flask column-icon"></span>
                        <h4>AliExpress Extension</h4>
                        <p>
                            Extension that captures ASIN, a link to a product, image, name, seller, etc., and saves it in a Google Document or onto your store.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-twitter column-icon"></span>
                        <h4>Twitter Extension</h4>
                        <p>
                            Easily share current tab, links and selected text on Twitter, using toolbar button, keyboard command and context menu options.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="section__column section__column-left">
                        <span className="icon icon-gift column-icon"></span>
                        <h4>And much more...</h4>
                        <p>
                            Chrome extensions can interact with web pages, notifications, bookmarks, history, keyboard shortcuts, and so much more. They can also be used as an excellent way to promote your existing website or online business.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section-white" id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title">Why customers choose me?</h2>
                </div>
            </div>
        </div>
        <div className="services-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="main-services">
                            <img src="/images/img/services-icon3.png" alt="pic" />
                            <h3>Proffesinalism</h3>
                            <p>I have developed over 50 extensions with over 1M users in total.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-services">
                            <img src="/images/img/services-icon2.png" alt="pic" />
                            <h3>Price</h3>
                            <p>While developing such many extension I built a library of reusable parts of software to save time on trivial cases of development.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-services">
                            <img src="/images/img/services-icon1.png" alt="pic" />
                            <h3>Fast</h3>
                            <p>I deliver a MVP product blitzfully fast to let you test your idea as soon as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section-blue " id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center padding-bottom-10">
                    <h3 className="section-title white-text">Ready to create a great extension?</h3>
                    <a href="https://www.facebook.com/verbalike" className="btn-white-border scrool"><i className="fa fa-facebook"></i></a>
                    <a href="https://wa.me/+380934211049?text=Hi" className="btn-white-border scrool"><i className="fa fa-whatsapp"></i></a>
                    <a className="btn-white scrool" onclick="openContactFrom()">Connect Now</a>
                </div>
            </div>
        </div>
    </section>
    <section className="section-grey medium-paddings section4 sectionTestimonials">
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto padding-bottom-40">
                    <div id="carouselIndicators2" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators testimonials-indicators">
                            <li data-target="#carouselIndicators0" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselIndicators1" data-slide-to="1" className=""></li>
                            <li data-target="#carouselIndicators2" data-slide-to="2" className=""></li>
                            <li data-target="#carouselIndicators3" data-slide-to="3" className=""></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="testim-inner">
                                    <img src="/images/img/gregg.jpg" alt="testimonials" className="testim-img" />
                                    <p>The top most feature that stood out from the crowd was his ability to get in contact and good communication before, during, and after the job was completed. Trust me many leave you hanging, as if I need to tell you that.
                                    <br/>  
                  I also want to say do not let his young age sway you, he has shown himself very capable and dependable in not only understanding and creating code, but pushing to see the jobs completed in a Fast fashion!
                                    <br/>  
                  You can feel free to contact me in person if you have any further questions: www.facebook.com/GreggBlazer
                  </p>
                                    <h6>Gregg Blazer<span className="job-text"> - Screen Share Addition to Chrome Extension</span></h6>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testim-inner">
                                    <img src="/images/img/vadim.webp" alt="testimonials" className="testim-img" />
                                    <p>Vlad seems to be a real professional in anything related to chrome extensions. He works fast and keeps improving things until you're completely satisfied. He did a great job with quite a complex extension, which I requested. In the retrospective, I wish would insisted on more grooming sessions with Vlad, rather than relying only on detailed user stories. I will definitely hire Vlad for my next chrome extension job!</p>
                                    <h6>Vadim Pilipenko<span className="job-text"> - Chrome Extension for reading information from a specific web page and matching it to user's profile </span></h6>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testim-inner">
                                    <img src="/images/img/zavik.webp" className="testim-img" />
                                    <p>Vladislav did an incredible job for me. He thoroughly studied my complex Extension and made great improvements to it. He is very smart and diligent And I'll keep working with him!</p>
                                    <h6>Ze'ev Aviner<span className="job-text"> - Facebook Group Automation</span></h6>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testim-inner">
                                    <img src="/images/img/mehdi.webp" className="testim-img" />
                                    <p>Vlad did a great job for us, he's very talented when it comes to chrome extensions, front-end integrations, javascript, etc .. the resulting extension he did for us had a great UI and worked perfectly as we wanted it to. Will definitely use him again for all our chrome extensions projects.</p>
                                    <h6>Mehdi Bellatig<span className="job-text"> - Expert chrome extension developer needed</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section-grey" id="blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="section-title"><a href="#">Blog</a></h2>
                    <p className="section-subtitle">Latest news, tips and best practices.</p>
                </div>
            </div>
            <div className="row">
                {/* <?php
                    $wpb_all_query = new WP_Query(array('post_type'=>'post', 'post_status'=>'publish', 'posts_per_page'=>3));
                    if ( $wpb_all_query->have_posts() ) :
                    while ( $wpb_all_query->have_posts() ) : $wpb_all_query->the_post();
                  ?>*/}
                <div className="col-md-4">
                    <div className="blog-item">
                        <div className="popup-wrapper">
                            <div className="popup-gallery">
                                <a href="<?php the_permalink(); ?>">
                                        {/*<?php the_post_thumbnail($post->ID, 'small'); ?>*/}
                                        <span className="eye-wrapper2"><i className="fa fa-link eye-icon"></i></span>
                                    </a>
                            </div>
                        </div>
                        <div className="blog-item-inner">
                           {/* <h3 className="blog-title"><a href="<?php the_permalink(); ?>"><?php the_title() ?></a></h3>
                            <a className="blog-icons last"><i className="fa fa-calendar-o"></i> <?php the_date(); ?></a>
                            <?php the_excerpt() ?>*/}
                        </div>
                    </div>
                </div>
           {/* <?php
                  endwhile;
                  wp_reset_postdata();
                  endif;
            ?>*/}
            </div>
        </div>
    </section>

    </Layout>
  )
}