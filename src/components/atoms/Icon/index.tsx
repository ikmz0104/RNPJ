import React, {useMemo} from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Path, Rect} from 'react-native-svg';
// ref: https://iconsvg.xyz/

export type IconProps = {
  name: string;
  active?: boolean;
};

export const Icon = ({name, active}: IconProps) => {
  const icon = useMemo(() => {
    switch (name) {
      case 'home':
        return <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />;
      case 'board':
        return <Path d="M3 15l9 7 9-7V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />;
      case 'payment':
        return (
          <>
            <Rect x="2" y="4" width="20" height="16" rx="2" />
            <Path d="M7 15h0M2 9.5h20" />
          </>
        );
      case 'account':
        return (
          <>
            <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <Circle cx="12" cy="7" r="4" />
          </>
        );
      case 'cross':
        return (
          <>
            <Line x1="18" y1="6" x2="6" y2="18" />
            <Line x1="6" y1="6" x2="18" y2="18" />
          </>
        );
      default:
        return null;
    }
  }, [name]);

  return (
    <View>
      <Svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? 'red' : '#000000'}
        strokeWidth="2">
        {icon}
      </Svg>
    </View>
  );
};
