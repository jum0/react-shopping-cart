import React from 'react';
import styled from 'styled-components';
import upArrow from '../../assets/upArrow.svg';
import downArrow from '../../assets/downArrow.svg';
import { COLOR } from '../../constants/color';

const Container = styled.div`
  position: relative;
  left: -42px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number']:disabled {
    background-color: ${COLOR.WHITE};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

const NumberInput = styled.input.attrs({ type: 'number' })`
  font-size: 24px;
  width: 72px;
  height: 60px;
  line-height: 1.5;
  float: left;
  display: block;
  padding: 0;
  margin: 0;
  border: 1px solid ${COLOR.GRAY_200};
  text-align: center;

  &:focus {
    outline: 0;
  }
`;

const ButtonWrapper = styled.div`
  float: left;
  position: relative;
  height: 60px;
`;

const StyledButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 42px;
  text-align: center;
  line-height: 1.5;
  user-select: none;
  border-color: ${COLOR.GRAY_200};
  border-style: solid;
  border-width: 0;
`;

const Increment = styled(StyledButton)`
  position: absolute;
  height: 50%;
  top: 0;
  border-width: 1px 1px 0 0;
`;

const Decrement = styled(StyledButton)`
  position: absolute;
  bottom: 0;
  height: 50%;
  border-width: 1px 1px 1px 0;
`;

const CountInput = () => (
  <Container>
    <NumberInput value="1" min="1" disabled />
    <ButtonWrapper>
      <Increment>
        <img src={upArrow} alt="증가" />
      </Increment>
      <Decrement>
        <img src={downArrow} alt="감소" />
      </Decrement>
    </ButtonWrapper>
  </Container>
);

export default CountInput;