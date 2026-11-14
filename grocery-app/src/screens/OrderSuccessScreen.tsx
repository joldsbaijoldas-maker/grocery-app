import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Page, PrimaryButton, COLORS } from '../components/ShopUI';
import { useShop } from '../context/ShopContext';

export default function OrderSuccessScreen({ navigation }: any) {
  const { clearCart } = useShop();

  const finish = () => {
    clearCart();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <Page style={s.container}>
      <View style={s.content}>
        <Text style={s.icon}>✅</Text>
        <Text style={s.title}>Тапсырысыңыз қабылданды!</Text>
        <Text style={s.info}>
          FreshMart дүкенін таңдағаныңызға рақмет. Тапсырысыңыз дайындалуда.
        </Text>
      </View>
      <PrimaryButton title="Басты бетке оралу" onPress={finish} />
    </Page>
  );
}

const s = StyleSheet.create({
  container: { justifyContent: 'space-between', paddingVertical: 70 },
  content: { alignItems: 'center', marginTop: 100 },
  icon: { fontSize: 85, marginBottom: 25 },
  title: { fontSize: 25, fontWeight: 'bold', color: COLORS.dark, textAlign: 'center' },
  info: { textAlign: 'center', color: COLORS.gray, lineHeight: 24, marginTop: 15 },
});