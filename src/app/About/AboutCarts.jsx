import { cardList } from "./CardList";
import Image from "next/image";
function AboutCarts() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {cardList.map((card, id) => (
          <div
            data-aos={card.effect}
            data-aos-duration={card.duration}
            key={id}
            className="flex flex-col cursor-pointer text-black bg-white justify-center py-6 px-8 text-center items-center mt-12 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out  scale-95 hover:scale-100 hover:shadow-xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]"
            style={{ borderRadius: "20px" }}
          >
            {/* Card Image */}
            <div className="w-[75px] h-[75px] mb-4">
              <Image
                src={card.img}
                alt={card.title}
                className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Card Title */}
            <p className="text-lg md:text-2xl font-semibold uppercase mb-4 text-gray-800 transition-colors duration-300">
              {card.title}
            </p>

            {/* Card Description */}
            <p className="text-sm md:text-lg leading-6 w-full text-gray-600 transition-colors duration-300">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutCarts;
