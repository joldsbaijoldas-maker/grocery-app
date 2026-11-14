import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Page, Heading, ProductCard, COLORS } from '../components/ShopUI';
import { useShop } from '../context/ShopContext';

export default function FavoriteScreen({ navigation }: any) {
  const { favorites, toggleFavorite, addToCart, isFavorite } = useShop();

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Таңдаулылар ❤️</Heading>

      {favorites.length === 0 ? (
        <Text style={s.empty}>Әзірге таңдаулы тауар жоқ.</Text>
      ) : (
        <ScrollView>
          <View style={s.grid}>
            {favorites.map(product => (
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
      )}
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  empty: { color: COLORS.gray, textAlign: 'center', marginTop: 60, fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});