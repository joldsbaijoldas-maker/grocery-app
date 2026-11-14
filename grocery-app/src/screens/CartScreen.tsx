import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Page, Heading, PrimaryButton, COLORS } from '../components/ShopUI';
import { useShop } from '../context/ShopContext';

export default function CartScreen({ navigation }: any) {
  const { cart, removeFromCart } = useShop();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Менің себетім 🛒</Heading>

      {cart.length === 0 ? (
        <Text style={s.empty}>Себетіңіз әзірге бос.</Text>
      ) : (
        <>
          <ScrollView>
            {cart.map((item, index) => (
              <View style={s.item} key={`${item.id}-${index}`}>
                <Text style={s.emoji}>{item.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={s.name}>{item.name}</Text>
                  <Text style={s.price}>{item.price.toLocaleString('kk-KZ')} ₸</Text>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={s.remove}>Өшіру</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          <View style={s.total}>
            <Text style={s.totalText}>Жалпы сома:</Text>
            <Text style={s.totalPrice}>{total.toLocaleString('kk-KZ')} ₸</Text>
          </View>

          <PrimaryButton title="Тапсырыс беру" onPress={() => navigation.navigate('Checkout')} />
        </>
      )}
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  empty: { color: COLORS.gray, textAlign: 'center', marginTop: 60 },
  item: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, padding: 13, borderRadius: 13, marginBottom: 12 },
  emoji: { fontSize: 35, marginRight: 13 },
  name: { fontWeight: 'bold', color: COLORS.dark, fontSize: 16 },
  price: { color: COLORS.green, marginTop: 5 },
  remove: { color: COLORS.red, padding: 8 },
  total: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  totalText: { fontSize: 17, color: COLORS.dark },
  totalPrice: { fontSize: 20, fontWeight: 'bold', color: COLORS.green },
});