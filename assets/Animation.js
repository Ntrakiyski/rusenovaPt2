export const ContainerApp = {
  hidden: { x: -200, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      duration: 0.3,
    },
  },
};

//Animation for displaying page - tablet and desktop
export const Container = {
  hidden: { x: -600, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 0.8,
      bounce: 0.99,
      when: "beforeChildren",
      staggerChildren: 0.5,

      mass: 1,
      damping: 13,
    },
  },
  exit: { opacity: 8, transition: { duration: 2 } },
};
