import React from "react";
import wAppImg from "../images/our_services/social-medias/whatsapp.webp";
import Link from "next/link";
import Image from "next/image";
function SocialMedias() {
  return (
    <div className="social-media fixed bottom-[90px] right-8">
      <Link
        href="https://wa.me/9150001090"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          loading="lazy"
          quality={90}
          src={wAppImg}
          alt="WhatsApp"
          className="social-icon h-13 w-12 hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  );
}

export default SocialMedias;
