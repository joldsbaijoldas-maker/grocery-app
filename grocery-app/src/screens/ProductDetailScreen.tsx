import React from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import { Page, Heading, PrimaryButton, COLORS } from '../components/ShopUI';
import { products } from '../components/data';
import { useShop } from '../context/ShopContext';

export default function ProductDetailScreen({ navigation, route }: any) {
  const product = products.find(p => p.id === route.params?.productId);
  const { addToCart, toggleFavorite, isFavorite } = useShop();

  if (!product) {
    return <Page><Text>Тауар табылмады</Text></Page>;
  }

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>

      <View style={s.image}>
        <Text style={{ fontSize: 110 }}>{product.emoji}</Text>
      </View>

      <Heading>{product.name}</Heading>
      <Text style={s.category}>{product.category}</Text>
      <Text style={s.price}>{product.price.toLocaleString('kk-KZ')} ₸ / {product.unit}</Text>
      <Text style={s.description}>{product.description}</Text>

      <PrimaryButton
        title="Себетке қосу"
        onPress={() => {
          addToCart(product);
          Alert.alert('Дайын', 'Тауар себетке қосылды');
        }}
      />

      <PrimaryButton
        title={isFavorite(product.id) ? 'Таңдаулыдан алып тастау ❤️' : 'Таңдаулыға қосу 🤍'}
        onPress={() => toggleFavorite(product)}
      />

      <Text style={s.link} onPress={() => navigation.navigate('Cart')}>Себетке өту →</Text>
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  image: { backgroundColor: '#EAF4EA', height: 240, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 25 },
  category: { color: COLORS.gray, marginBottom: 10 },
  price: { fontSize: 23, color: COLORS.green, fontWeight: 'bold', marginBottom: 18 },
  description: { fontSize: 16, lineHeight: 24, color: COLORS.dark },
  link: { textAlign: 'center', color: COLORS.green, marginTop: 22, fontWeight: 'bold' },
});