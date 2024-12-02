"use client";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./Nav/TopHeader";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import Script from "next/script";
import Head from "next/head";
import SocialMedias from "./(Services)/SocialMedias";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Set the canonical URL
    const link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute("href", window.location.href);
    }
  
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="SwDsm2it5yHa7AES5dS3Gk8qwJMCmlM8m_pMlASrmlY"
        />
        <meta name="yandex-verification" content="5fa3dbee124941e5" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.ultraflysolutions.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ultrafly Solutions | Best Software Development Company"
        />
        <meta
          property="og:description"
          content="Discover cutting-edge IT solutions with Ultrafly Solutions. From mobile app development to digital marketing, we help your business soar to new heights."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/1d54d2c6-31a8-42c5-ba1e-747d6c79bddd.png?token=Ty_PLD9MwsDhernxtU33kOEaHGTdMKBrxIzkPnAGa2g&height=630&width=1200&expires=33268088827"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ultraflysolutions.com" />
        <meta
          property="twitter:url"
          content="https://www.ultraflysolutions.com"
        />
        <meta
          name="twitter:title"
         content="Ultrafly Solutions | Software Development & Digital Marketing Company"
        />
        <meta
          name="twitter:description"
          content="Discover cutting-edge IT solutions with Ultrafly Solutions. From mobile app development to digital marketing, we help your business soar to new heights."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/1d54d2c6-31a8-42c5-ba1e-747d6c79bddd.png?token=Ty_PLD9MwsDhernxtU33kOEaHGTdMKBrxIzkPnAGa2g&height=630&width=1200&expires=33268088827"
        />
 
      </Head>
      <body>
        <TopHeader />
        <Navbar />
        {children}
        <SocialMedias />
        <Footer />

        {/* Schema Markup */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ultrafly Solutions Private Limited",
              alternateName: "Ultrafly Solutions",
              url: "https://www.ultraflysolutions.com/",
              logo: "https://www.ultraflysolutions.com/static/media/ultraflysolutionslog.1504c5a5d77140e1a0c7.png",
              sameAs: [
                "https://www.facebook.com/ultraflysolutions",
                "https://twitter.com/UltraflyS",
                "https://www.instagram.com/ultraflysolutions/",
                "https://www.linkedin.com/company/ultraflysolutions",
                "https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw",
                "https://www.pinterest.com/ultraflysolutions/",
                "https://www.ultraflysolutions.com/",
              ],
            }),
          }}
        />
        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '476081301593579');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=476081301593579&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* StatCounter */}
        <Script
          type="text/javascript"
          id="statcounter-script"
          strategy="afterInteractive"
        >
          {`
            var sc_project=13049783; 
            var sc_invisible=1; 
            var sc_security="b0f333ac";
          `}
        </Script>
        <Script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />

        <noscript>
          <div className="statcounter">
            <a
              title="Web Analytics Made Easy - Statcounter"
              href="https://statcounter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                quality={75}
                className="statcounter"
                src="https://c.statcounter.com/13049783/0/b0f333ac/1/"
                alt="Web Analytics Made Easy - Statcounter"
                width={1}
                height={1}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>

        {/* Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Best Web Development Company Coimbatore",
                  item: "https://www.ultraflysolutions.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Best Digital Marketing Company in Coimbatore",
                  item: "https://www.ultraflysolutions.com/digital-marketing-company/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Best Mobile Application Development Company in Coimbatore",
                  item: "https://www.ultraflysolutions.com/mobile-app-development/",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Best IT Staffing Solution Company in Coimbatore",
                  item: "https://www.ultraflysolutions.com/it-staffing/",
                },
              ],
            }),
          }}
        />

        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Ultrafly Solutions Pvt Ltd",
              url: "https://www.ultraflysolutions.com/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.ultraflysolutions.com/software-development/{search_term_string}https://www.ultraflysolutions.com/website-development-company/",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* FontAwesome Script */}
        <Script
          id="fontawesome"
          src="https://kit.fontawesome.com/531ffc57b3.js"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-DCZN0P0YCF"
        />
        <Script id="google-analytics-inline" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DCZN0P0YCF');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NMLVP3XD');
          `}
        </Script>

        {/* Tawk.to Script */}
        {/* <Script id="tawk-chat" strategy="lazyOnload">
          {`
            var Tawk_API = Tawk_API || {};
            var Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/66ab153832dca6db2cb886af/1i464lpj7";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin", "*");
                s0.parentNode.insertBefore(s1, s0);
            })();
          `}
        </Script> */}
        <Script 
        src="https://www.statcounter.com/counter/counter.js" 
        strategy="lazyOnload" 
      />
      </body>
    </html>
  );
}
