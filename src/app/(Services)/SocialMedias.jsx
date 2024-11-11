import React from "react";
import fbImg from "../images/our_services/social-medias/facebook.webp";
import twitterImg from "../images/our_services/social-medias/twitter.png";
import instaImg from "../images/our_services/social-medias/Instagram.webp";
import linkedinImg from "../images/our_services/social-medias/linkedin.png";
import wAppImg from "../images/our_services/social-medias/whatsapp.png";
import UtubeImg from "../images/our_services/social-medias/youtube.png";
import Link from "next/link";
import Image from "next/image";
function SocialMedias() {
  return (
    <div className="social-media fixed bottom-[130px] right-7">
      <Link
        href="https://wa.me/9150001089"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image 
 quality={100}
          src={wAppImg}
          alt="WhatsApp"
          className="social-icon w-12 hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  );
}

export default SocialMedias;

{
  /* <ul className="flex flex-col gap-3 items-center">
        <li>
          <a href="https://www.facebook.com/ultraflysolutions" target="_blank" rel="noopener noreferrer">
            <img src={fbImg} alt="facebook" className="social-icon w-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/ultraflysolutions?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <img src={instaImg} alt="instagram" className="social-icon w-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/ultraflysolutions/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImg} alt="linkedin" className="social-icon w-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/UltraflyS" target="_blank" rel="noopener noreferrer">
            <img src={twitterImg} alt="twitter" className="social-icon w-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/9150001089" target="_blank" rel="noopener noreferrer">
            <img src={wAppImg} alt="WhatsApp" className="social-icon w-8 hover:scale-110 transition-transform duration-300" />
          </a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw" target="_blank" rel="noopener noreferrer">
              <img
                src={UtubeImg}
                alt="you tube"
                id="youtube-logo"
                className="social-icon w-8 hover:scale-110 transition-transform duration-300" 
              />
            </a>
          </li>
      </ul> */
}
