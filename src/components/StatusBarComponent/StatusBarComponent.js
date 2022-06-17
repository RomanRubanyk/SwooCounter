import React, { useContext } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../providers/ThemeProvider';
import { STATUS_BAR_HEIGHT } from '../../constants/general';

const StatusBarComponent = () => {
  const { isDark, colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: colors.layout,
      height: STATUS_BAR_HEIGHT,
    },
  });

  StatusBar.currentHeight = STATUS_BAR_HEIGHT;

  return (
    <View style={styles.statusBar}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
    </View>
  );
};

export default StatusBarComponent;
