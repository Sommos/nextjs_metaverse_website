'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People on the World"
        textStyles="text-center"
      />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world!</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-10 left-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="invisible xl:visible absolute top-60 left-[18%] w-[287px] h-[125px] p-[1px] rounded-2xl bg-[#5d6680] glassmorphism">
          <img
          src="/card-01.png"
          alt="card 1"
          className="w-full h-full rounded-2xl"
          />
        </div>
        <h3 className="invisible xl:visible font-semibold top-[58%] left-[19%] sm:text-[26px] text-[26px] text-white absolute z-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          The Upside Down
        </h3>
        <h3 className="invisible xl:visible top-[55%] left-[19%] sm:text-[18px] text-[18px] text-white absolute z-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          +231 users joined
        </h3>
        <div className="invisible xl:visible absolute bottom-72 right-[19%] w-[287px] h-[125px] p-[1px] rounded-2xl bg-[#5d6680] glassmorphism">
          <img
          src="/card-02.png"
          alt="card 2"
          className="w-full h-full rounded-2xl"
          />
        </div>
        <h3 className="invisible xl:visible font-semibold top-[39.4%] left-[59.6%] text-[26px] text-white absolute z-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Hawkins Labs
        </h3>
        <h3 className="invisible xl:visible top-[36%] right-[28.6%] text-[18px] text-white absolute z-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          +429 users joined
        </h3>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
