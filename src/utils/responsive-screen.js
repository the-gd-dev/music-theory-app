import {Dimensions, PixelRatio} from 'react-native';

//heightPercentageToPx(1) = 8px
export const heightPercentageToPx = percentage => {
  const height = Dimensions.get('window').height;
  return Math.round((percentage / 100) * height);
};

//heightPercentageToPx(1) = 8px
export const widthPercentageToPx = percentage => {
  const width = Dimensions.get('window').width;
  return Math.round((percentage / 100) * width);
};

export const getFontSize = size => {
  const fontScale = PixelRatio.getFontScale();
  return size / fontScale;
};
