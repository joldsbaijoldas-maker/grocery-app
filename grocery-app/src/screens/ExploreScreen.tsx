import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Page, Heading, ProductCard, COLORS } from '../components/ShopUI';
import { products, categories } from '../components/data';
import { useShop } from '../context/ShopContext';

export default function ExploreScreen({ navigation }: any) {
  const [category, setCategory] = useState('Барлығы');
  const { addToCart, toggleFavorite, isFavorite } = useShop();

  const filtered = category === 'Барлығы'
    ? products
    : products.filter(p => p.category === category);

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Тауарлар каталогы</Heading>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.categories}>
        {categories.map(item => (
          <TouchableOpacity
            key={item}
            onPress={() => setCategory(item)}
            style={[s.category, category === item && s.active]}
          >
            <Text style={{ color: category === item ? COLORS.white : COLORS.dark }}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.grid}>
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
              onAdd={() => addToCart(product)}
              favorite={isFavorite(product.id)}
              onFavorite={() => toggleFavorite(product)}
            />
          ))}
        </View>
      </ScrollView>
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  categories: { maxHeight: 48, marginBottom: 20 },
  category: { paddingHorizontal: 15, paddingVertical: 12, backgroundColor: COLORS.white, borderRadius: 20, marginRight: 8 },
  active: { backgroundColor: COLORS.green },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});