'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

// we gave the motion.h1 textVariant a delay of 1.1
// but we gave the motion.div textVariant a delay of 1.4 so it can render just a lil bit after the h1
// in the classname we are styling with tailwindcss
const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">

        <motion.h1 variants={textVariant(1.1)}
        className={styles.heroHeading}>
          Meta
        </motion.h1>

        <motion.div
        variants={textVariant(1.3)}
        className="flex flex-row justify-center items-center"
        >
          <h2 className={styles.heroHeading}>worl</h2>
          <h2 className={styles.heroDText}></h2>
          <h2 className={styles.heroHeading}>s</h2>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
