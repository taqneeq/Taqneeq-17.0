"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";

const PageAnimatePresence = ({ children }) => {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <div className="relative w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full"
        >
          {displayChildren}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageAnimatePresence;
