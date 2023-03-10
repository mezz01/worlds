'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';

import { ExploreCard, TypingText, TitleText } from '../components';
import { staggerContainer,} from '../utils/motion';
import { exploreWorlds} from '../constants';

const Explore = () => {
  useState
  return (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="|  The World" textStyles="text-center" />
      <TypingText title={<>Choose the world you want<br className="md:block hidden" /*visible on medium devices but usually hidden*//> to explore </>} textStyles="text-center" />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5" >
        {exploreWorlds.map((world, index) => (
          <ExploreCard key={world.id}
            {...world}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  </section>
  )
};

export default Explore;
