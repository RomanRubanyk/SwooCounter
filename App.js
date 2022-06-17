import React, { Suspense } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import './src/i18n';
import store from './src/store/store';
import { ThemeProvider } from './src/providers/ThemeProvider';
import StatusBarComponent from './src/components/StatusBarComponent/StatusBarComponent';

export default function Main() {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;

  return (
    <ThemeProvider>
      <StatusBarComponent />
      <Suspense fallback={<View />}>
        <Provider store={store}>
          <AppNavigator />
        </Provider>
      </Suspense>
    </ThemeProvider>
  );
}
