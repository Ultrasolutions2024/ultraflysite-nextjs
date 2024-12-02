import React from "react";
import wAppImg from "../images/our_services/social-medias/whatsapp.webp";
import Link from "next/link";
import Image from "next/image";
function SocialMedias() {
  return (
    <div className="social-media fixed bottom-[30px] right-7">
      <Link
        href="https://wa.me/9150001089"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          loading="lazy"
          quality={75}
          src={wAppImg}
          alt="WhatsApp"
          className="social-icon w-12 hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  );
}

export default SocialMedias;
