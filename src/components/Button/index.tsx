import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  ActivityIndicator,
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading: boolean;
};

export function Button({
  title,
  color,
  isLoading = false,
  icon,
  backgroundColor,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={isLoading}
      style={[styles.button, { backgroundColor }]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={color} />
      ) : (
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />

          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
