import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { reveal, animationStart } from "../utils/animation";

const items = ["Services", "Tutorial", "Exercices", "Get Certified"];

const Header = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: 5, duration: 1 }}
    >
      <motion.header
        variants={reveal}
        initial="hiddenVarient"
        animate="revealedVarient"
        transition={{
          delay: animationStart,
          duration: 0.5,
          ease: "easeIn",
          type: "tween",
          staggerChildren: 0.1,
          delayChildren: animationStart + 0.5,
        }}
        className="header-nav"
      >
        <Logo variants={reveal} />
        <NavBar items={items} variants={reveal} />
        <motion.div variants={reveal} className="signup-Btn scale">
          <span>sign up</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_122_21)">
              <path
                d="M9 3L7.9425 4.0575L12.1275 8.25H3V9.75H12.1275L7.9425 13.9425L9 15L15 9L9 3Z"
                fill="#323232"
              />
            </g>
            <defs>
              <clipPath id="clip0_122_21">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>
      </motion.header>
    </motion.div>
  );
};

export default Header;
