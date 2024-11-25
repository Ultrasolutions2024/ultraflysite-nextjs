import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { TbDeviceMobile } from "react-icons/tb";
import india from '../images/hero/india.webp';
import usa from '../images/hero/united-states.webp';
import whatsapp from '../images/our_services/social-medias/whatsapp.webp'
import facebook from '../images/our_services/social-medias/facebook.webp'
import twitter from '../images/our_services/social-medias/twitter.webp'
import linkedin from '../images/our_services/social-medias/linkedin.webp'
import youtube from '../images/our_services/social-medias/youtube.webp'
import instagram from '../images/our_services/social-medias/Instagram.webp'
import location from '../images/our_services/social-medias/location.webp'
import Image from "next/image";
function Footer() {
  return (
    <>
      <footer className="bg-[#b3eeff5c] ">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center p-5 md:p-10 w-[97%]">
          <div className="gap-[0.5px] grid hover:cursor-pointer">
            <h1 className="text-xl font-bold">Ultrafly Solutions</h1>
            <p className="font-medium hover:text-blue-600">
              <Link href="https://tinyurl.com/bpbxt9ra">
              <Image
loading="lazy" 
  quality={75} src={india} alt="india" className="inline-block w-4 h-4" />
              {"  "}<b>Office Address: India</b><br />
              27/9, Nivedh Vikas, Pankaja Mills <br />Road, Puliakulam,  <br />
              Coimbatore-641 045.
              </Link>
            </p>
            <br />
            <p className="font-medium hover:text-blue-600">
              <Image
loading="lazy" 
  quality={75} src={usa} alt="usa" className="inline-block w-4 h-4" />
              {"  "}<b>Office Address: USA</b><br />
              1101 Iroquois Ave, Naperville,<br /> Illinois- 60563.
            </p>
          </div>


          <div className="gap-[0.2px] grid">
            <h2 className="text-xl font-bold ">Terms & Policy</h2>
            <Link href="/privacy-policy">
              <p className="font-medium hover:text-blue-600">Privacy Policy</p>
            </Link>
            <Link href="#">
              <p className="font-medium hover:text-blue-600">Cookie Policy</p>
            </Link>
            <Link href="#">
              <p className="font-medium hover:text-blue-600">Terms and Conditions</p>
            </Link>
            <h2 className="text-xl font-bold mt-4">Resources</h2>
            <Link href="/blog">
              <p className="font-medium hover:text-blue-600">Blogs</p>
            </Link>
            {/* <Link href="#">
              <p className="font-medium hover:text-blue-600">Case Studies</p>
            </Link> */}
            <Link href="/careers">
              <p className="font-medium hover:text-blue-600">Career</p>
            </Link>
          </div>


          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Services</h2>
            <Link href="/website-development-company">
              <p className="font-medium text-[16px] hover:text-blue-600">Website Development</p>
            </Link>
            <Link href="/software-development">
              <p className="font-medium text-[16px] hover:text-blue-600">Software Development</p>
            </Link>
            <Link href="/mobile-app-development">
              <p className="font-medium text-[16px] hover:text-blue-600">Mobile Application Development</p>
            </Link>
            <Link href="/it-staffing">
              <p className="font-medium text-[16px] hover:text-blue-600">IT Staffing</p>
            </Link>
            <Link href="/digital-marketing-company">
              <p className="font-medium text-[16px] hover:text-blue-600">SEO & Digital Marketing</p>
            </Link>
          </div>


          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Contact</h2>
            
              <Link href="mailto:hr@ultraflysolutions.com" className="flex item-center gap-2 hover:text-blue-600">
                <MdOutlineEmail className="mt-1" /> info@ultraflysolutions.com
              </Link>
            
            <Link href="/">
              <p className="flex items-center gap-2 hover:text-blue-600">
                <Image
loading="lazy" 
  quality={75} src={india} alt="india" className="w-4 h-4" />
                +91 91500 01089
              </p>
            </Link>

            <p className="flex items-center gap-2 hover:text-blue-600">
              <Image
loading="lazy" 
  quality={75} src={india} alt="india" className="w-4 h-4" />
              +91 91500 01090
            </p>
            <p className="flex items-center gap-2 hover:text-blue-600">
              <Image
loading="lazy" 
  quality={75} src={usa} alt="usa" className="w-4 h-4" />
              +1 562 521 9684
            </p>

            <h2 className="text-xl font-bold mt-4">Social</h2>
            <div className=" py-6">
              <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-4 ">
                  <Link
                    href="https://www.facebook.com/ultraflysolutions"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
loading="lazy" 
  quality={75}
                      src={facebook}
                      alt="Facebook"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>

                  <Link
                    href="https://twitter.com/UltraflyS"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
loading="lazy" 
  quality={75}
                      src={twitter}
                      alt="Twitter"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
loading="lazy" 
  quality={75}
                      src={linkedin}
                      alt="LinkedIn"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>

                  <Link
                    href="https://www.instagram.com/ultraflysolutions/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
loading="lazy" 
  quality={75}
                      src={instagram}
                      alt="Instagram"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>

                  <Link
                    href="https://tinyurl.com/bpbxt9ra"
                    target="_blank"
                    rel="noopener noreferrer">
                     <Image
loading="lazy" 
  quality={75}
                      src={location}
                      alt="location"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>

                  <Link
                    href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Image
loading="lazy" 
  quality={75}
                      src={youtube}
                      alt="YouTube"
                      className="bg-[#efefef] rounded-xl h-10 w-10"
                    />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        <hr />
        <div>
          <p className="text-center py-4 text-[#a2a2a2] text-[10px] sm:text-base">
            Copyright © 2024 Ultrafly Solutions – All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
