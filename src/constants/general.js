import { Dimensions, Platform } from 'react-native';

const dimensions = Dimensions.get('window');

export const SCREEN_WIDTH = Math.round(dimensions.width);
export const IS_IOS = Platform.OS === 'ios';

export const PLUS_STEP = 1;
export const MINUS_STEP = 1;

export const STATUS_BAR_HEIGHT = 10;
