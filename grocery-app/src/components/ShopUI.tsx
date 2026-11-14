import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Product } from './data';

export const COLORS = {
  green: '#2E9D62',
  dark: '#183B2B',
  light: '#F5F8F5',
  white: '#FFFFFF',
  gray: '#87918A',
  border: '#E5EBE6',
  red: '#E85D5D',
};

export function Page({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) {
  return <View style={[styles.page, style]}>{children}</View>;
}

export function Heading({ children }: { children: string }) {
  return <Text style={styles.heading}>{children}</Text>;
}

export function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export function ProductCard({
  product,
  onPress,
  onAdd,
  favorite,
  onFavorite,
}: {
  product: Product;
  onPress: () => void;
  onAdd: () => void;
  favorite?: boolean;
  onFavorite?: () => void;
}) {
  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.emojiBox}>
          <Text style={styles.emoji}>{product.emoji}</Text>
        </View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productUnit}>{product.unit}</Text>
        <Text style={styles.price}>{product.price.toLocaleString('kk-KZ')} ₸</Text>
      </TouchableOpacity>

      <View style={styles.cardActions}>
        {onFavorite && (
          <TouchableOpacity onPress={onFavorite} style={styles.heart}>
            <Text>{favorite ? '❤️' : '🤍'}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={onAdd} style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.light,
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.dark,
    marginBottom: 18,
  },
  button: {
    backgroundColor: COLORS.green,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productCard: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emojiBox: {
    height: 105,
    borderRadius: 12,
    backgroundColor: '#F0F6F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 52,
  },
  productName: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: 'bold',
  },
  productUnit: {
    color: COLORS.gray,
    marginTop: 3,
  },
  price: {
    color: COLORS.green,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 7,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  heart: {
    padding: 7,
  },
  addButton: {
    backgroundColor: COLORS.green,
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: COLORS.white,
    fontSize: 24,
    lineHeight: 27,
  },
});