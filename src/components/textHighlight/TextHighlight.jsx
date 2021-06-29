import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.span`
  position: relative;

  &::after {
    position: absolute;
    display: inline-block;
    content: ' ';
    width: 100%;
    left: 0px;
    bottom: 0px;
    z-index: -1;

    height: ${({ height }) => height || '8px'};
    background-color: ${({ backgroundColor }) => backgroundColor || 'rgba(42, 193, 188, 0.5)'};
  }

  ${({ styles }) => styles};
`;

const TextHighlight = ({ children, styles, height, backgroundColor }) => (
  <Container styles={styles} height={height} backgroundColor={backgroundColor}>
    {children}
  </Container>
);

TextHighlight.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default TextHighlight;
