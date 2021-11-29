export const list = {
  visible: {
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.3 },
  },
  hidden: { opacity: 0 },
};

export const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const transition = {
  duration: 0.5,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const frameVariants = {
  hover: { scale: 0.9 },
};

export const Variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.7,
    opacity: 0,
    transition: { ...transition, duration: 0.6 },
  },
};
