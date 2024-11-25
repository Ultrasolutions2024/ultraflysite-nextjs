import React from 'react';
import html from '../images/technologies/html-5.webp';
import css from '../images/technologies/css-3.webp';
import js from '../images/technologies/js.webp';
import react from '../images/technologies/react.webp';
import mongodb from '../images/technologies/mongodb.webp';
import adobe from '../images/technologies/adobe.webp';
import nodejs from '../images/technologies/node.webp';
import angularjs from '../images/technologies/angularjs.webp';
import dovinci from '../images/technologies/dovinci.webp';
import python from '../images/technologies/python.webp';
import java from '../images/technologies/java.webp';
import firebase from '../images/technologies/firebase.webp';
import aws from '../images/technologies/aws.webp';
import Image from 'next/image';
function OurTechnologies() {
  const technologies = [
    { src: html, alt: 'HTML', delay: 50 },
    { src: css, alt: 'CSS', delay: 100 },
    { src: js, alt: 'JavaScript', delay: 150 },
    { src: react, alt: 'React', delay: 200 },
    { src: mongodb, alt: 'MongoDB', delay: 250 },
    { src: adobe, alt: 'Adobe', delay: 300 },
    { src: nodejs, alt: 'Node.js', delay: 350 },
    { src: angularjs, alt: 'AngularJS', delay: 400 },
    { src: dovinci, alt: 'DaVinci', delay: 450 },
    { src: python, alt: 'Python', delay: 500 },
    { src: java, alt: 'Java', delay: 550 },
    { src: firebase, alt: 'Firebase', delay: 600 },
    { src: aws, alt: 'AWS', delay: 650 },
  ];

  return (
    <>
      <div className="mt-10">
        <h2 className="text-center font-bold text-xl sm:text-2xl md:text-4xl text-gray-800 mb-8">Our Technologies</h2>
      </div>
      <section className="flex flex-wrap gap-5 sm:gap-10 justify-center p-4 mb-20 mt-20">
        {technologies.map((tech, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay={tech.delay}
            className="w-24 h-16 sm:w-36 sm:h-32 p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}
          >
            <Image 
  quality={75} src={tech.src} alt={tech.alt} className="h-full w-auto rounded-md" />
          </div>
        ))}
      </section>
    </>
  );
}

export default OurTechnologies;
