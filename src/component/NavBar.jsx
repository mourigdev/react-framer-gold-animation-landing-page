import React from "react";
import { motion } from "framer-motion";

const NavBar = ({ items, variants }) => {
  return (
    <ul className="nav">
      {items.map((item, i) => (
        <motion.li key={`list_${i}`} variants={variants} className="scale">
          {item}
        </motion.li>
      ))}
    </ul>
  );
};

export default NavBar;
