// app/layout.jsx
"use client";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "./Nav/TopHeader";
import Navbar from "./Nav/Navbar";
import Footer from "./Footer/Footer";
import Script from "next/script";
import Head from "next/head";
import SocialMedias from "./(Services)/SocialMedias";
import favi from "./favicon.ico";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta name="yandex-verification" content="5fa3dbee124941e5" />
        <link rel="apple-touch-icon" href="./favicon.ico" />
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

        {/* StatCounter */}
        <Script type="text/javascript" id="statcounter-script" strategy="afterInteractive">
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
        <Script id="tawk-chat" strategy="lazyOnload">
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
        </Script>
      </body>
    </html>
  );
}
