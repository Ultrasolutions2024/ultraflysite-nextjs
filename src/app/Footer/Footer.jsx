import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import india from "../images/hero/india.webp";
import usa from "../images/hero/united-states.webp";
import medium from "../images/logo/medium.png";
import Map from "../images/logo/map.png";
import Image from "next/image";
function Footer() {
  const currentYear = new Date().getFullYear();
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
                  quality={75}
                  src={india}
                  alt="india"
                  className="inline-block w-4 h-4"
                />
                {"  "}
                <b>Office Address: India</b>
                <br />
                27/9, Nivedh Vikas, Pankaja Mills <br />
                Road, Puliakulam, <br />
                Coimbatore-641 045.
              </Link>
            </p>
            <br />
            <p className="font-medium hover:text-blue-600">
              <Image
                loading="lazy"
                quality={75}
                src={usa}
                alt="usa"
                className="inline-block w-4 h-4"
              />
              {"  "}
              <b>Office Address: USA</b>
              <br />
              1101 Iroquois Ave, Naperville,
              <br /> Illinois- 60563.
            </p>
          </div>

          <div className="gap-[0.2px] grid">
            <h2 className="text-xl font-bold ">Terms & Policy</h2>
            <Link href="/privacy-policy">
              <p className="font-medium hover:text-blue-600">Privacy Policy</p>
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
              <p className="font-medium text-[16px] hover:text-blue-600">
                Website Development
              </p>
            </Link>
            <Link href="/software-development">
              <p className="font-medium text-[16px] hover:text-blue-600">
                Software Development
              </p>
            </Link>
            <Link href="/mobile-app-development">
              <p className="font-medium text-[16px] hover:text-blue-600">
                Mobile Application Development
              </p>
            </Link>
            <Link href="/it-staffing">
              <p className="font-medium text-[16px] hover:text-blue-600">
                IT Staffing
              </p>
            </Link>
            <Link href="/digital-marketing-company">
              <p className="font-medium text-[16px] hover:text-blue-600">
                SEO & Digital Marketing
              </p>
            </Link>
          </div>

          <div className="gap-[0.5px] grid">
            <h2 className="text-xl font-bold">Contact</h2>

            <Link
              href="mailto:hr@ultraflysolutions.com"
              className="flex item-center gap-2 hover:text-blue-600"
            >
              <MdOutlineEmail className="mt-1" /> info@ultraflysolutions.com
            </Link>

            <p className="flex items-center gap-2 hover:text-blue-600">
              <Image
                loading="lazy"
                quality={75}
                src={india}
                alt="india"
                className="w-4 h-4"
              />
              <Link href="tel:+919150001089">+91 91500 01089</Link>
            </p>

            <p className="flex items-center gap-2 hover:text-blue-600">
              <Image
                loading="lazy"
                quality={75}
                src={india}
                alt="india"
                className="w-4 h-4"
              />
              <Link href="tel:+919150001090">+91 91500 01090</Link>
            </p>

            <p className="flex items-center gap-2 hover:text-blue-600">
              <Image
                loading="lazy"
                quality={75}
                src={usa}
                alt="usa"
                className="w-4 h-4"
              />
              <Link href="tel:+15625219684">+1 562 521 9684</Link>
            </p>

            <h2 className="text-xl font-bold mt-4">Social</h2>
            <div className=" py-6">
              <div className="container mx-auto flex justify-center">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-3 md:flex-wrap ">
                  <Link
                    href="https://www.facebook.com/ultraflysolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 93 92"
                        fill="none"
                      >
                        <rect
                          x="1.13867"
                          width="91.5618"
                          height="91.5618"
                          rx="15"
                          fill="#337FFF"
                        />
                        <path
                          d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link
                    href="https://twitter.com/UltraflyS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 93 92"
                        fill="none"
                      >
                        <rect
                          x="0.138672"
                          width="91.5618"
                          height="91.5618"
                          rx="15"
                          fill="black"
                        />
                        <path
                          d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 93 93"
                        fill="none"
                      >
                        <rect
                          x="1.13867"
                          y="1"
                          width="91.5618"
                          height="91.5618"
                          rx="15"
                          fill="#006699"
                        />
                        <path
                          d="M37.1339 63.4304V40.9068H29.6473V63.4304H37.1346H37.1339ZM33.3922 37.8321C36.0023 37.8321 37.6273 36.1025 37.6273 33.9411C37.5785 31.7304 36.0023 30.0491 33.4418 30.0491C30.8795 30.0491 29.2061 31.7304 29.2061 33.9409C29.2061 36.1023 30.8305 37.8319 33.3431 37.8319H33.3916L33.3922 37.8321ZM41.2777 63.4304H48.7637V50.8535C48.7637 50.1813 48.8125 49.5072 49.0103 49.0271C49.5513 47.6815 50.7831 46.2887 52.8517 46.2887C55.5599 46.2887 56.644 48.354 56.644 51.3822V63.4304H64.1297V50.516C64.1297 43.598 60.4369 40.3787 55.5115 40.3787C51.4733 40.3787 49.6998 42.6357 48.7144 44.173H48.7643V40.9075H41.2781C41.3759 43.0205 41.2775 63.4312 41.2775 63.4312L41.2777 63.4304Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Link>

                  <Link
                    href="https://www.instagram.com/ultraflysolutions/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 93 92"
                        fill="none"
                      >
                        <rect
                          x="1.13867"
                          width="91.5618"
                          height="91.5618"
                          rx="15"
                          fill="url(#paint0_linear_7092_54439)"
                        />
                        <path
                          d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z"
                          fill="white"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_7092_54439"
                            x1="90.9407"
                            y1="91.5618"
                            x2="-0.621143"
                            y2="-2.46459e-06"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FBE18A" />
                            <stop offset="0.21" stopColor="#FCBB45" />
                            <stop offset="0.38" stopColor="#F75274" />
                            <stop offset="0.52" stopColor="#D53692" />
                            <stop offset="0.74" stopColor="#8F39CE" />
                            <stop offset="1" stopColor="#5B4FE9" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </button>
                  </Link>

                  <Link
                    href="https://tinyurl.com/bpbxt9ra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <Image
                        className="w-[40px] md:w-[92px] md:h-[42px] rounded-md"
                        alt="medium"
                        objectFit="cover"
                        width={50}
                        height={50}
                        src={Map}
                      />
                    </button>
                  </Link>

                  <Link
                    href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group transition-all duration-500 hover:-translate-y-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 93 93"
                        fill="none"
                      >
                        <rect
                          x="1.13867"
                          y="1"
                          width="91.5618"
                          height="91.5618"
                          rx="15"
                          fill="#FF0000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M67.5615 29.2428C69.8115 29.8504 71.58 31.6234 72.1778 33.8708C73.2654 37.9495 73.2654 46.4647 73.2654 46.4647C73.2654 46.4647 73.2654 54.98 72.1778 59.0586C71.5717 61.3144 69.8032 63.0873 67.5615 63.6866C63.4932 64.7771 47.1703 64.7771 47.1703 64.7771C47.1703 64.7771 30.8557 64.7771 26.7791 63.6866C24.5291 63.079 22.7606 61.306 22.1628 59.0586C21.0752 54.98 21.0752 46.4647 21.0752 46.4647C21.0752 46.4647 21.0752 37.9495 22.1628 33.8708C22.7689 31.615 24.5374 29.8421 26.7791 29.2428C30.8557 28.1523 47.1703 28.1523 47.1703 28.1523C47.1703 28.1523 63.4932 28.1523 67.5615 29.2428ZM55.5142 46.4647L41.9561 54.314V38.6154L55.5142 46.4647Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </Link>
                  <Link
                    href="https://medium.com/@ultraflysolutions"
                    className="transition-all duration-500 hover:-translate-y-2 group"
                  >
                    <Image
                      className="w-[40px] md:w-[90px] md:h-[40px] lg:w-[39px] rounded-md"
                      alt="medium"
                      objectFit="cover"
                      width={50}
                      height={50}
                      src={medium}
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
            Copyright © {currentYear} Ultrafly Solutions – All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
