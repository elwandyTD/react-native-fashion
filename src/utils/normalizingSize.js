import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH = 350;
const GUIDELINE_BASE_HEIGHT = 680;

const scale = size => width / GUIDELINE_BASE_WIDTH * size;
const verticalScale = size => height / GUIDELINE_BASE_HEIGHT * size;
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export { scale, verticalScale, moderateScale};