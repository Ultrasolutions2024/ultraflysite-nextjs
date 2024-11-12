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


