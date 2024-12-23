import Link from "next/link";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo,width }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      href={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} flex items-center justify-center font-[600] ${width} md:w-[20rem] h-[4.5rem] md:h-[5.5rem] uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#FF0336] ${arrowColor}`}></i>
    </Link>
  );
}

export default MainButton;
