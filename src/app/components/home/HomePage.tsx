"use client"
import React, { useRef, useState } from 'react';
import { useSmoothScroll } from '@/app/hooks/useSmoothScroll';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { cn } from '@/app/utils/common';

export const HomePage = () => {
  useSmoothScroll();
  const [isHovered, setHovered] = useState(false);
  const router = useRouter();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const welcomeScale = useTransform(scrollYProgress, [0.5, 1], [0, 4]);
  const welcomeOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const portalScale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const portalRotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const logoScale = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  const logoNameScale = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const logoNameY = useTransform(scrollYProgress, [0.9, 1], [80, 0]);

  const pictures = [
    {
      src: '/world.jpg',
      scale: welcomeScale,
      opacity: welcomeOpacity,
    },
    {
      src: '/2.png',
      scale: scale5,
      styles: {
        top: '-30vh',
        left: '5vw',
        width: '18vw',
        height: '30vh',
      }
    },
    {
      src: '/3.png',
      scale: scale6,
      styles: {
        top: '-10vh',
        left: '-25vw',
        width: '15vw',
        height: '30vh',
      }
    },
    {
      src: '/4.png',
      scale: scale5,
      styles: {
        left: '27.5vw',
        width: '15vw',
        height: '25vh'
      }
    },
    {
      src: '/5.png',
      scale: scale6,
      styles: {
        top: '29vh',
        left: '5vw',
        width: '10vw',
        height: '20vh',
      }
    },
    {
      src: '/6.png',
      scale: scale8,
      styles: {
        top: '27.5vh',
        left: '-22.5vw',
        width: '15vw',
        height: '25vh',
      }
    },
    {
      src: '/7.png',
      scale: scale9,
      styles: {
        top: '28.5vh',
        left: '25vw',
        width: '10vw',
        height: '20vh',
      }
    }
  ];

  return (
    <main ref={container} className="h-[300vh] relative">
      <div className="sticky overflow-hidden top-0 h-screen bg-black">
        <motion.div className="relative w-full h-screen" style={{ scale: bgScale }}>
          <Image
            src="/pxfuel.jpg"
            alt=""
            fill
          />
        </motion.div>
        <motion.div
          id="portal"
          style={{ scale: portalScale, rotateZ: portalRotate }}
          className="w-full h-full top-0 absolute flex items-center justify-center"
        >
          <div className="relative w-[25vw] h-[25vh]">
            <Image
              src="/portal.png"
              alt=""
              fill
            />
          </div>
        </motion.div>
        {pictures.map((picture, index) => {
          return (
            <motion.div
              key={index}
              style={{ scale: picture.scale, opacity: picture.opacity }}
              className={cn("w-full h-full top-0 absolute flex items-center justify-center", {
                'z-10': index === 0,
              })}
            >
              <div
                style={picture.styles}
                className="relative w-[25vw] h-[25vh]"
              >
                <Image
                  src={picture.src}
                  alt=""
                  fill
                />
                {index === 0 && (
                  <div className="absolute z-1 h-full w-full flex items-center justify-center flex-col">
                    <div className="flex flex-col items-center">
                      <motion.div className="relative w-[6vw] h-[2vw]" style={{ scale: logoNameScale, y: logoNameY }}>
                        <Image
                          src="/logoname.png"
                          alt=""
                          fill
                        />
                      </motion.div>
                      <motion.div
                        role="button"
                        aria-label="click to visit character picker"
                        onClick={() => {
                          router.push('/characters');
                        }}
                        className="relative w-[8vw] h-[8vw] cursor-pointer"
                        style={{ scale: logoScale, y: -20 }}
                        onMouseOver={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        variants={{
                          active: { scale: 1.05 },
                          inactive: { scale: 1 },
                        }}
                        animate={isHovered ? "active" : "inactive"}
                        title="Click to click and compare your characters"
                      >
                        <Image
                          src="/logo.png"
                          alt="clickable logo"
                          fill
                        />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </main>
  );
};

