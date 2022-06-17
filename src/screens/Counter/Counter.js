import React, { useContext } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { Switch } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button/Button';
import { setMinusCounterValue, setPlusCounterValue } from '../../store/general/actions';
import { MINUS_STEP, PLUS_STEP } from '../../constants/general';
import { ThemeContext } from '../../providers/ThemeProvider';
import { LIGHT_COLORS, DARK_COLORS } from '../../constants/colors';

const Counter = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { counterValue } = useSelector(({ general }) => general, shallowEqual);
  const { colors, isDark, setColorScheme } = useContext(ThemeContext);

  const handleChangeColorTheme = (isTrue) => {
    setColorScheme(isTrue ? 'dark' : 'light');
  };

  const handlePlusButton = () => {
    dispatch(setPlusCounterValue(PLUS_STEP));
  };

  const handleMinusButton = () => {
    dispatch(setMinusCounterValue(MINUS_STEP));
  };

  const StyledCounterWrapper = styled.View`
    justify-content: center;
    align-items: center;
    width: 390px;
    height: 844px;
    padding: 222px 115px;
    background-color: ${(props) => (props.isDark ? DARK_COLORS.layout : LIGHT_COLORS.layout)};
`;

  const StyledText = styled.Text`
    width: 160px;
    height: 71px;
    margin-top: 104px;
    margin-bottom: 103px;
    color: #8cd6bd;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0;
    text-align: center;
`;

  const Section = styled.View`
    position: absolute;
    align-items: flex-start;
    top: 5px;
    left: 10px;
    padding: 30px 16px;
    background-color: ${(props) => (props.isDark ? DARK_COLORS.layout : LIGHT_COLORS.layout)};
`;

  const SectionText = styled.Text`
    font-size: 16px;
    margin: 12px 0;
    color: ${(props) => (props.isDark ? DARK_COLORS.textColor : LIGHT_COLORS.textColor)};
`;

  return (
    <StyledCounterWrapper isDark={isDark}>
      <Section isDark={isDark}>
        <SectionText isDark={isDark}>
          {isDark ? t('dark') : t('light')}
          {t('mode')}
        </SectionText>
        <Switch
          thumbColor={colors.thumbColor}
          value={isDark}
          onValueChange={handleChangeColorTheme}
        />
      </Section>
      <Button title={`-${MINUS_STEP}`} onPress={handleMinusButton} />
      <StyledText>{counterValue}</StyledText>
      <Button title={`+${PLUS_STEP}`} onPress={handlePlusButton} />
    </StyledCounterWrapper>
  );
};

Counter.propTypes = {
  isDark: PropTypes.bool
};
Counter.defaultProps = {
  isDark: false
};

export default Counter;
