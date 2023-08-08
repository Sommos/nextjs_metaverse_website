'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Metaverse </span>
        emerges as a futuristic realm where virtual reality blurs the line between
        <span className="font-extrabold text-white"> reality and imagination </span>
        , allowing an immersive experience that mirrors genuine sensations. Driven by advanced
        <span className="font-extrabold text-white"> VR </span>
        technology, effortlessly transforms desired virtual landscapes into tangible encounters, offering an avenue to actualize your
        <span className="font-extrabold text-white"> dreams</span>
        . Join us in delving into the captivating metaverse journey as we delve deeper below.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[18px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
