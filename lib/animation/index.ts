const duration = 0.8;
const opacityHidden = 0;
const opacityVisible = 1;
const delay = 0.4;
const scaleFrom = 0.8;
const scaleTo = 1;

// Fade Slide
export const fade = {
  visible: { opacity: opacityVisible, transition: { duration } },
  hidden: { opacity: opacityHidden },
};

export const fadeD1 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, delay },
  },
};
export const fadeD2 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, delay: delay + 0.1 },
  },
};
export const fadeD3 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, delay: delay + 0.3 },
  },
};
export const fadeD4 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, delay: delay + 0.4 },
  },
};
export const fadeD5 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, delay: delay + 0.5 },
  },
};

export const fadeDu1 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 1 },
  },
};

export const fadeDu2 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 2 },
  },
};
export const fadeDu3 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 3 },
  },
};
export const fadeDu1D1 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 1, delay},
  },
};
export const fadeDu1D2 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 1, delay: delay + .1},
  },
};
export const fadeDu1D3 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 1, delay: delay + .3},
  },
};
export const fadeDu3D3 = {
  ...fade,
  visible: {
    ...fade.visible,
    transition: { ...fade.visible.transition, duration: duration + 3, delay: delay + .3},
  },
};

// Fade Scale
export const fadeScale = {
  visible: {
    opacity: opacityVisible,
    scale: scaleTo,
    transition: { duration },
  },
  hidden: { opacity: opacityHidden, scale: scaleFrom },
};

export const fadeScaleD1 = {
  ...fadeScale,
  visible: {
    ...fadeScale.visible,
    transition: { ...fadeScale.visible.transition, delay },
  },
};

export const fadeScaleD2 = {
  ...fadeScale,
  visible: {
    ...fadeScale.visible,
    transition: { ...fadeScale.visible.transition, delay: delay + 0.1 },
  },
};

export const fadeScaleD3 = {
  ...fadeScale,
  visible: {
    ...fadeScale.visible,
    transition: { ...fadeScale.visible.transition, delay: delay + 0.3 },
  },
};

export const fadeScaleD4 = {
  ...fadeScale,
  visible: {
    ...fadeScale.visible,
    transition: { ...fadeScale.visible.transition, delay: delay + 0.4 },
  },
};
export const fadeScaleD5 = {
  ...fadeScale,
  visible: {
    ...fadeScale.visible,
    transition: { ...fadeScale.visible.transition, delay: delay + 0.5 },
  },
};

// Fade Slide
export const fadeSlideDown = {
  visible: { opacity: opacityVisible, y: 0, transition: { duration } },
  hidden: { opacity: opacityHidden, y: -200 },
};
