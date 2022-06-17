import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const ButtonContainer = styled.Pressable`
  width: 160px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 24px
  `;

const StyledText = styled.Text`
  font-weight: 700;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
`;

const Button = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <StyledText>
        {title}
      </StyledText>
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;
