import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
export const User = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={12} cy={6} r={4} fill="#1C274C" {...props} />
    <Path
      fill="#1C274C"
      d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"
      {...props}
    />
  </Svg>
);
