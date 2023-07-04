import React from "react";
import TitleLogo from "./TitleLogo";
import { motion } from "framer-motion";
import { reveal } from "../utils/animation";

const Hero = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: 5, duration: 1 }}
      className="hero"
    >
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ delay: 5 + 1, duration: 0.5 }}
        className="hero-title"
      >
        <h1>
          delivering <TitleLogo /> industry's
        </h1>
        <h1>top tallents work</h1>
      </motion.div>
      <motion.div
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ delay: 5 + 1.2, duration: 0.5 }}
        className="hero-desc"
      >
        <span>
          vr headset warable network effect. hypergrowth activist investor.
          substack blogging thiel fellow dropout. alexis ohanian tweeted
          overhyped ed-tech series.
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
