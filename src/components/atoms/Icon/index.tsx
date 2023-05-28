import React, {useMemo} from 'react';
import {View} from 'react-native';
import Svg, {Circle, Line, Path} from 'react-native-svg';
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
      case 'setting':
        return (
          <>
            <Circle cx={12} cy={12} r={3} />
            <Path
              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );
      case 'cross':
        return (
          <>
            <Line x1="18" y1="6" x2="6" y2="18" />
            <Line x1="6" y1="6" x2="18" y2="18" />
          </>
        );
      case 'player':
        return (
          <>
            <Path
              d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Circle cx={12} cy={10} r={3} />
            <Circle cx={12} cy={12} r={10} strokeWidth={2} />
          </>
        );
      case 'menu':
        return (
          <>
            <Line
              x1={8}
              y1={6}
              x2={21}
              y2={6}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={8}
              y1={12}
              x2={21}
              y2={12}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={8}
              y1={18}
              x2={21}
              y2={18}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={3}
              y1={6}
              x2={3.01}
              y2={6}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={3}
              y1={12}
              x2={3.01}
              y2={12}
              strokeWidth={2}
              strokeLinecap="round"
            />
            <Line
              x1={3}
              y1={18}
              x2={3.01}
              y2={18}
              strokeWidth={2}
              strokeLinecap="round"
            />
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
        stroke={active ? '#00acee' : '#000000'}
        strokeWidth="2">
        {icon}
      </Svg>
    </View>
  );
};
