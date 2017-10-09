import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 440,
};

// iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((accumulator, label) => {
  const newAccumulator = accumulator;
  const emSize = sizes[label] / 16;

  newAccumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return newAccumulator;
}, {});
