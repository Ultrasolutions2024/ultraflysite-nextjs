"use client";
import React, { useRef, useEffect } from 'react';
import badge1 from '../images/technologies/highly recommended.webp';
import badge2 from '../images/technologies/topservice.webp';
import badge3 from '../images/technologies/Ultrafly Solutions - Good Firms.webp';
import badge4 from '../images/technologies/review.webp';
import badge5 from '../images/technologies/itfirms.webp';
import badge6 from '../images/technologies/gptw (1).webp';
import badge7 from '../images/features/techreviewer.webp';
import { cn } from "../lib/utils";
import Image from 'next/image';
const  Badges = () => {
  const badges = [badge1, badge2, badge3, badge4, badge5, badge6, badge7];
  const containerRef = useRef(null);

  const speed = "fast"; //"fast" | "normal" | "slow";

  useEffect(() => {
    if (containerRef.current) {
      getSpeed();
    }
  }, []);

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div className="my-5 md:my-10 overflow-hidden">
      <div className="text-center">
        <h2 className="font-bold text-xl sm:text-2xl md:text-4xl mt-10">
          AWARDS AND RECOGNITION
        </h2>
      </div>
      <div
        className="relative w-full flex items-center mt-10"
      >
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 w-full overflow-hidden hover:pause-scroll [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          )}
        >
          {/* Loop the badges infinitely */}
          <ul className={cn(
            "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll"
          )}>
            {/* Render badges twice to create a smooth loop */}
            {[...badges, ...badges].map((badge, index) => (
              <li
                key={index}
                className="w-[100px] h-[150px] max-w-full relative flex-shrink-0 md:w-[250px] hover:scale-110 transition-transform duration-300 ease-in-out flex items-center"
                style={{
                  background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
                }}
              >
                <Image
loading="lazy" 
  quality={75}
                  alt={`Badge ${index + 1}`}
                  src={badge}
                  className="w-2/4"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Badges;
