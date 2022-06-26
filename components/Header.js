/* eslint-disable @next/next/no-html-link-for-pages */
import {useRouter} from 'next/router'

export default function Header() {
    const router = useRouter()
    return <header className={router.asPath !== '/' ?"listivo-header listivo-header--with-submit-button listivo-header--with-dashboard-link not-home":"listivo-header listivo-header--with-submit-button listivo-header--with-dashboard-link"}>
    <div className="listivo-header__container">
        <div className="listivo-header__inner">
            <div className="listivo-hide-mobile listivo-hide-tablet">
                <div className="listivo-menu__desktop">
                    <div className="listivo-menu__wrapper">
                        <div className="listivo-menu__limit-width">
                            <div className="listivo-menu__left">
                                <div className="listivo-logo">
                                    <a href="/"
                                        title="Listivo - Classified Ads WordPress Theme">
                                        <img src="https://demo2.listivotheme.com/wp-content/uploads/2021/11/logo-yellow-white-font-1.png"
                                            alt="Listivo - Classified Ads WordPress Theme" />
                                    </a>
                                </div>
                                <div className="listivo-logo listivo-logo--sticky">
                                    <a href="/"
                                        title="Listivo - Classified Ads WordPress Theme">
                                        <img src="https://demo2.listivotheme.com/wp-content/uploads/2021/11/logo-yellow-white-font-1.png"
                                            alt="Listivo - Classified Ads WordPress Theme" />
                                    </a>
                                </div>
                                <div className="listivo-menu__container">
                                    <div className="listivo-menu-hover" style={{width: "0px", left: "0px"}} ></div>
                                    <div id="listivo-menu" className="listivo-menu">
                                        <div id="listivo-menu-element-menu-item-1-5293"
                                            className="listivo-home-menu-link menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5039 current_page_item menu-item-5293 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="/" title="Home"
                                                className="listivo-menu__link">
                                                Home </a>
                                        </div>
                                        <div id="listivo-menu-element-menu-item-1-5255"
                                            className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-5255 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="#" title="Demos" className="listivo-menu__link">
                                                Demos </a>
                                            <div
                                                className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                <div id="listivo-menu-element-menu-item-1-5256"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5256 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://demo.listivotheme.com" title="Classic"
                                                        className="listivo-menu__link">
                                                        Classic </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-5257"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-5257 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://demo2.listivotheme.com" title="Modern"
                                                        className="listivo-menu__link">
                                                        Modern </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="listivo-menu-element-menu-item-1-485"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-485 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="#" title="Search" className="listivo-menu__link">
                                                Search </a>
                                            <div
                                                className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                <div id="listivo-menu-element-menu-item-1-1742"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1742 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/listings/"
                                                        title="Classic Search" className="listivo-menu__link">
                                                        Classic Search </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-2445"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2445 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/map-search/"
                                                        title="Map Search" className="listivo-menu__link">
                                                        Map Search </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="listivo-menu-element-menu-item-1-851"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-851 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="#" title="Listing" className="listivo-menu__link">
                                                Listing </a>
                                            <div
                                                className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                <div id="listivo-menu-element-menu-item-1-2205"
                                                    className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2205 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/listing/google-pixel-4a-5g/"
                                                        title="Style: Gallery" className="listivo-menu__link">
                                                        Style: Gallery </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-2203"
                                                    className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2203 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/listing/summer-house/"
                                                        title="Style: Carousel" className="listivo-menu__link">
                                                        Style: Carousel </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-2202"
                                                    className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2202 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/listing/auto-detailing/"
                                                        title="Style: Mosaic" className="listivo-menu__link">
                                                        Style: Mosaic </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="listivo-menu-element-menu-item-1-489"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-489 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="#" title="Pages" className="listivo-menu__link">
                                                Pages </a>
                                            <div
                                                className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                <div id="listivo-menu-element-menu-item-1-1736"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1736 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/blog/" title="Blog"
                                                        className="listivo-menu__link">
                                                        Blog </a>
                                                    <div
                                                        className="listivo-submenu listivo-submenu--level-1 listivo-menu__submenu listivo-menu__submenu--1">
                                                        <div id="listivo-menu-element-menu-item-1-1737"
                                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1737 listivo-menu-item listivo-menu__item listivo-menu-item-depth-2 listivo-menu__item--depth-2">
                                                            <a href="/blog/" title="Blog"
                                                                className="listivo-menu__link">
                                                                Blog </a>
                                                        </div>
                                                        <div id="listivo-menu-element-menu-item-1-478"
                                                            className="menu-item menu-item-type-post_type menu-item-object-post menu-item-478 listivo-menu-item listivo-menu__item listivo-menu-item-depth-2 listivo-menu__item--depth-2">
                                                            <a href="/best-holiday-gift-ideas-for-2021/"
                                                                title="Single Post" className="listivo-menu__link">
                                                                Single Post </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-865"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-865 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/about/" title="About Us"
                                                        className="listivo-menu__link">
                                                        About Us </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-474"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-474 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/contact/" title="Contact Us"
                                                        className="listivo-menu__link">
                                                        Contact Us </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-1672"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1672 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/login-register/"
                                                        title="Login / Register" className="listivo-menu__link">
                                                        Login / Register </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-898"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-898 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/our-team/" title="Our Team"
                                                        className="listivo-menu__link">
                                                        Our Team </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-494"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-494 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://demo.listivotheme.com/user/emily-rees/"
                                                        title="User Page" className="listivo-menu__link">
                                                        User Page </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-856"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-856 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/faq/" title="FAQ"
                                                        className="listivo-menu__link">
                                                        FAQ </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-1673"
                                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1673 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="/page-404/" title="Page 404"
                                                        className="listivo-menu__link">
                                                        Page 404 </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="listivo-menu-element-menu-item-1-5272"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5272 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                            <a href="#" title="More" className="listivo-menu__link" target="_blank" rel="noreferrer" >
                                                More </a>
                                            <div
                                                className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                <div id="listivo-menu-element-menu-item-1-5273"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5273 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://support.listivotheme.com/" title="Help Center"
                                                        className="listivo-menu__link" target="_blank" rel="noreferrer" >
                                                        Help Center </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-5274"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5274 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://support.listivotheme.com/support/solutions/articles/101000373828"
                                                        title="Refund Policy" className="listivo-menu__link"
                                                        target="_blank" rel="noreferrer" >
                                                        Refund Policy </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-5275"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5275 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://listivotheme.com/try-free-demo-2" title="Free Demo"
                                                        className="listivo-menu__link" target="_blank" rel="noreferrer" >
                                                        Free Demo </a>
                                                </div>
                                                <div id="listivo-menu-element-menu-item-1-5276"
                                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5276 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                    <a href="https://1.envato.market/rnJ25y" title="Buy Now"
                                                        className="listivo-menu__link">
                                                        Buy Now </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="listivo-menu__more">
                                <div className="listivo-menu-desktop-login-register-link">
                                    <svg className="listivo-menu-user-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                    <div className="listivo-menu-item-depth-0">
                                        <a href="/login-register/?tab=login">
                                            <span
                                                className="listivo-menu-desktop-login-register-link__login-text listivo-menu-item-depth-0">
                                                Log In </span>
                                        </a>
                                    </div>
                                    <span className="listivo-menu-desktop-login-register-link__separator"></span>
                                    <div className="listivo-menu-item-depth-0">
                                        <a href="/login-register/?tab=register">
                                            <span
                                                className="listivo-menu-desktop-login-register-link__register-text listivo-menu-item-depth-0">
                                                Register </span>
                                        </a>
                                    </div>
                                </div>
                                <a className="listivo-primary-button listivo-primary-button--icon listivo-button--menu-submit"
                                    href="/add-listing">
                                    <span className="listivo-primary-button__text">
                                        Add Listing </span>
                                    <span className="listivo-primary-button__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 4v16m8-8H4"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listivo-hide-desktop">
                <div className="listivo-mobile-menu__wrapper listivo-hide-desktop">
                    <div className="listivo-mobile-menu__hamburger">
                        <div>
                            <div className="listivo-menu-icon-wrapper"><svg fill="#222" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="16" viewBox="0 0 25 16">
                                    <g>
                                        <g>
                                            <path
                                                d="M1.125 6.875H20.75a1.125 1.125 0 1 1 0 2.25H1.125a1.125 1.125 0 1 1 0-2.25zm.012 6.844h22.726c.628 0 1.137.509 1.137 1.137v.007C25 15.49 24.49 16 23.863 16H1.137C.51 16 0 15.49 0 14.863v-.007c0-.628.51-1.137 1.137-1.137zM1.137 0h16.476c.628 0 1.137.51 1.137 1.137v.007c0 .628-.51 1.137-1.137 1.137H1.137C.51 2.281 0 1.772 0 1.144v-.007C0 .51.51 0 1.137 0z">
                                            </path>
                                        </g>
                                    </g>
                                </svg></div>
                            <div className="listivo-mobile-menu__open">
                                <div className="listivo-mobile-menu__open__content">
                                    <div className="listivo-mobile-menu__open__top">
                                        <div className="listivo-mobile-menu__open__top__submit-button"><a
                                                href="/panel/create/"
                                                className="listivo-primary-button listivo-primary-button--icon"><span
                                                    className="listivo-primary-button__text">
                                                    Add Listing </span> <span className="listivo-primary-button__icon"><svg
                                                        xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                                    </svg></span></a></div>
                                        <div className="listivo-mobile-menu__open__top__x"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="21" height="19"
                                                viewBox="0 0 21 19">
                                                <g>
                                                    <g>
                                                        <path fill="#fff"
                                                            d="M.602 18.781h2.443c.335 0 .574-.106.766-.284l6.178-6.615a.216.216 0 0 1 .336 0l6.13 6.615c.192.178.431.284.766.284h2.347c.48 0 .67-.284.383-.569L12.05 9.89a.176.176 0 0 1 0-.213l7.902-8.322c.288-.284.096-.569-.383-.569H17.03c-.336 0-.575.107-.767.285l-6.13 6.614a.215.215 0 0 1-.335 0l-6.13-6.614C3.475.893 3.235.786 2.9.786H.6c-.478 0-.67.285-.382.57l7.855 8.321a.177.177 0 0 1 0 .213L.219 18.212c-.288.285-.096.57.383.57z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg></div>
                                    </div>
                                    <div className="listivo-mobile-menu__nav">
                                        <div id="listivo-menu-mobile" className="listivo-menu">
                                            <div id="listivo-menu-element-menu-item-2-5293"
                                                className="listivo-home-menu-link menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5039 current_page_item menu-item-5293 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="/" title="Home"
                                                    className="listivo-menu__link">
                                                    Home </a></div>
                                            <div id="listivo-menu-element-menu-item-2-5255"
                                                className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-5255 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="#" title="Demos" className="listivo-menu__link">
                                                    Demos </a>
                                                <div
                                                    className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                    <div id="listivo-menu-element-menu-item-2-5256"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5256 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://demo.listivotheme.com" title="Classic"
                                                            className="listivo-menu__link">
                                                            Classic </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-5257"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-5257 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://demo2.listivotheme.com" title="Modern"
                                                            className="listivo-menu__link">
                                                            Modern </a></div>
                                                </div>
                                            </div>
                                            <div id="listivo-menu-element-menu-item-2-485"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-485 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="#" title="Search" className="listivo-menu__link">
                                                    Search </a>
                                                <div
                                                    className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                    <div id="listivo-menu-element-menu-item-2-1742"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1742 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/listings/"
                                                            title="Classic Search" className="listivo-menu__link">
                                                            Classic Search </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-2445"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2445 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/map-search/"
                                                            title="Map Search" className="listivo-menu__link">
                                                            Map Search </a></div>
                                                </div>
                                            </div>
                                            <div id="listivo-menu-element-menu-item-2-851"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-851 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="#" title="Listing" className="listivo-menu__link">
                                                    Listing </a>
                                                <div
                                                    className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                    <div id="listivo-menu-element-menu-item-2-2205"
                                                        className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2205 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/listing/google-pixel-4a-5g/"
                                                            title="Style: Gallery" className="listivo-menu__link">
                                                            Style: Gallery </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-2203"
                                                        className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2203 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/listing/summer-house/"
                                                            title="Style: Carousel" className="listivo-menu__link">
                                                            Style: Carousel </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-2202"
                                                        className="menu-item menu-item-type-post_type menu-item-object-listivo_listing menu-item-2202 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/listing/auto-detailing/"
                                                            title="Style: Mosaic" className="listivo-menu__link">
                                                            Style: Mosaic </a></div>
                                                </div>
                                            </div>
                                            <div id="listivo-menu-element-menu-item-2-489"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-489 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="#" title="Pages" className="listivo-menu__link">
                                                    Pages </a>
                                                <div
                                                    className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                    <div id="listivo-menu-element-menu-item-2-1736"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1736 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/blog/" title="Blog"
                                                            className="listivo-menu__link">
                                                            Blog </a>
                                                        <div
                                                            className="listivo-submenu listivo-submenu--level-1 listivo-menu__submenu listivo-menu__submenu--1">
                                                            <div id="listivo-menu-element-menu-item-2-1737"
                                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1737 listivo-menu-item listivo-menu__item listivo-menu-item-depth-2 listivo-menu__item--depth-2">
                                                                <a href="/blog/"
                                                                    title="Blog" className="listivo-menu__link">
                                                                    Blog </a></div>
                                                            <div id="listivo-menu-element-menu-item-2-478"
                                                                className="menu-item menu-item-type-post_type menu-item-object-post menu-item-478 listivo-menu-item listivo-menu__item listivo-menu-item-depth-2 listivo-menu__item--depth-2">
                                                                <a href="/best-holiday-gift-ideas-for-2021/"
                                                                    title="Single Post" className="listivo-menu__link">
                                                                    Single Post </a></div>
                                                        </div>
                                                    </div>
                                                    <div id="listivo-menu-element-menu-item-2-865"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-865 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/about/" title="About Us"
                                                            className="listivo-menu__link">
                                                            About Us </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-474"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-474 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/contact/"
                                                            title="Contact Us" className="listivo-menu__link">
                                                            Contact Us </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-1672"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1672 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/login-register/"
                                                            title="Login / Register" className="listivo-menu__link">
                                                            Login / Register </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-898"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-898 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/our-team/"
                                                            title="Our Team" className="listivo-menu__link">
                                                            Our Team </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-494"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-494 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://demo.listivotheme.com/user/emily-rees/"
                                                            title="User Page" className="listivo-menu__link">
                                                            User Page </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-856"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-856 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/faq/" title="FAQ"
                                                            className="listivo-menu__link">
                                                            FAQ </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-1673"
                                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1673 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="/page-404/"
                                                            title="Page 404" className="listivo-menu__link">
                                                            Page 404 </a></div>
                                                </div>
                                            </div>
                                            <div id="listivo-menu-element-menu-item-2-5272"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5272 listivo-menu-item listivo-menu__item listivo-menu-item-depth-0 listivo-menu__item--depth-0">
                                                <a href="#" title="More" target="_blank" rel="noreferrer"  className="listivo-menu__link">
                                                    More </a>
                                                <div
                                                    className="listivo-submenu listivo-submenu--level-0 listivo-menu__submenu listivo-menu__submenu--0">
                                                    <div id="listivo-menu-element-menu-item-2-5273"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5273 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://support.listivotheme.com/" title="Help Center"
                                                            target="_blank" rel="noreferrer"  className="listivo-menu__link">
                                                            Help Center </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-5274"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5274 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://support.listivotheme.com/support/solutions/articles/101000373828"
                                                            title="Refund Policy" target="_blank" rel="noreferrer" 
                                                            className="listivo-menu__link">
                                                            Refund Policy </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-5275"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5275 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://listivotheme.com/try-free-demo-2"
                                                            title="Free Demo" target="_blank" rel="noreferrer" 
                                                            className="listivo-menu__link">
                                                            Free Demo </a></div>
                                                    <div id="listivo-menu-element-menu-item-2-5276"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5276 listivo-menu-item listivo-menu__item listivo-menu-item-depth-1 listivo-menu__item--depth-1">
                                                        <a href="https://1.envato.market/rnJ25y" title="Buy Now"
                                                            className="listivo-menu__link">
                                                            Buy Now </a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listivo-mobile-menu__info">
                                        <div className="listivo-mobile-menu__info-phone"><span
                                                className="listivo-mobile-menu__info-phone-label">Call
                                                Support</span><span>:</span> <a href="tel:1233456789">
                                                (123) 345-6789 </a></div>
                                        <div className="listivo-mobile-menu__info-email"><span
                                                className="listivo-mobile-menu__info-email-label">Email
                                                Address</span><span>:</span> <a
                                                href="mailto:support@tangibledesign.net">
                                                support@tangibledesign.net </a></div>
                                        <div className="listivo-mobile-menu__info-social"><a href="#"
                                                className="listivo-social-profiles__single"><i
                                                    className="fab fa-facebook-f"></i></a> <a href="#"
                                                className="listivo-social-profiles__single"><i
                                                    className="fab fa-twitter"></i></a> <a href="#"
                                                className="listivo-social-profiles__single"><i
                                                    className="fab fa-linkedin"></i></a> <a href="#"
                                                className="listivo-social-profiles__single"><i
                                                    className="fab fa-instagram"></i></a> <a href="#"
                                                className="listivo-social-profiles__single"><i
                                                    className="fab fa-youtube"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="listivo-mobile-menu-mask"></div>
                        </div>
                    </div>
                    <div className="listivo-mobile-menu__logo">
                        <div className="listivo-logo">
                            <a href="https://demo2.listivotheme.com" title="Listivo - Classified Ads WordPress Theme">
                                <img src="https://demo2.listivotheme.com/wp-content/uploads/2021/11/logo-yellow-white-font-1.png"
                                    alt="Listivo - Classified Ads WordPress Theme" />
                            </a>
                        </div>
                    </div>
                    <div className="listivo-mobile-menu__login">
                        <a className="listivo-user-icon-wrapper" href="/panel/">
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469s-132.667969 26.628906-181.019531 74.980469c-48.351563 48.351562-74.980469 112.640625-74.980469 181.019531s26.628906 132.667969 74.980469 181.019531c48.351562 48.351563 112.640625 74.980469 181.019531 74.980469s132.667969-26.628906 181.019531-74.980469c48.351563-48.351562 74.980469-112.640625 74.980469-181.019531s-26.628906-132.667969-74.980469-181.019531zm-325.914062 354.316406c8.453125-72.734375 70.988281-128.890625 144.894531-128.890625 38.960938 0 75.597656 15.179688 103.15625 42.734375 23.28125 23.285156 37.964844 53.6875 41.742188 86.152344-39.257813 32.878906-89.804688 52.707031-144.898438 52.707031s-105.636719-19.824219-144.894531-52.703125zm144.894531-159.789063c-42.871094 0-77.753906-34.882812-77.753906-77.753906 0-42.875 34.882812-77.753906 77.753906-77.753906s77.753906 34.878906 77.753906 77.753906c0 42.871094-34.882812 77.753906-77.753906 77.753906zm170.71875 134.425782c-7.644531-30.820313-23.585938-59.238282-46.351562-82.003906-18.4375-18.4375-40.25-32.269532-64.039063-40.9375 28.597656-19.394532 47.425781-52.160157 47.425781-89.238282 0-59.414062-48.339844-107.753906-107.753906-107.753906s-107.753906 48.339844-107.753906 107.753906c0 37.097656 18.84375 69.875 47.464844 89.265625-21.886719 7.976563-42.140626 20.308594-59.566407 36.542969-25.234375 23.5-42.757812 53.464844-50.882812 86.347656-34.410157-39.667968-55.261719-91.398437-55.261719-147.910156 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 56.523438-20.859375 108.265625-55.28125 147.933594zm0 0">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
}