import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from '/components/link'
import { useRouter } from "next/router";
import {init} from '/lib/main';

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  const router = useRouter();
  console.log(router);
  init();
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />


        <link href="https://fonts.googleapis.com/css?family=Dosis:500,600" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400,400i,600,700" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
        {/* <script data-ad-client="ca-pub-2157711695352215" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      </Head>
      <header className="header js-header-scroll">
        <nav className="core-nav open-responsive open-dropdown"><div className="nav-container">
          <div className="nav-header right">
            {/*<?php the_custom_logo(); ?>*/}
            <Link href="/" className="brand custom-logo-link">
                <img src="/images/img/logo.png" className="logo" alt="extension expert" style={{ height: 32 + 'px' }} />
            </Link>
            <button className="toggle-bar core-nav-toggle">
              <span className="fa fa-bars"></span>
            </button>
          </div>
          {/*<!-- Start Header menu for mobile -->*/}

          {/*<!-- End Header menu for mobile --> */}
          <div className="wrap-core-nav-list right"><ul className="attributes">
          </ul><div className="header__mobile js-header-menu">
              <a href="#" className="header__mobile-brand">Menu</a>
              <button className="toggle-bar header__mobile-toggle core-nav-toggle">
                <span className="fa fa-remove"></span>
              </button>
            </div>
            <ul className="menu core-nav-list">
              <li className={router.asPath == "/about" ? "active" : ""}><Link href="/about">About</Link></li>
              <li className={router.asPath == "/products" ? "active" : ""}><Link href="/products">Products</Link></li>
              <li className={router.asPath == "/blog" ? "active" : ""}><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

        </div></nav><div className="dropdown-overlay"></div>
      </header>
      {/* <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>*/}
      <main>{children}</main>


      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )} */}


      <footer className="footer-bottom gray-light-bg pt-4 pb-4">
        <div className="container">
          <div className="row text-center text-md-left align-items-center">
            <div className="col-md-6 col-lg-5">
              <p className="text-md-left copyright-text pb-0 mb-0">Copyrights © {new Date().getFullYear()}. All
                rights reserved by
                &nbsp;
                <Link href="/"><a href="/"><u>VerbLike</u></a></Link>
              </p>
            </div>
            <div className="col-md-6 col-lg-7">
              <ul className="social-list list-inline list-unstyled text-md-right">
                <li className="list-inline-item"><a href="#" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="Instagram"><i className="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}