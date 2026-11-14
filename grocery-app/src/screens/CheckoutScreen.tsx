import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Page, Heading, PrimaryButton, COLORS } from '../components/ShopUI';
import { useShop } from '../context/ShopContext';

export default function CheckoutScreen({ navigation }: any) {
  const { cart } = useShop();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const submit = () => {
    if (cart.length === 0) {
      Alert.alert('Себет бос', 'Алдымен тауар таңдаңыз');
      navigation.navigate('Home');
      return;
    }

    if (!address.trim() || !phone.trim()) {
      Alert.alert('Ескерту', 'Жеткізу мекенжайы мен телефон нөмірін енгізіңіз');
      return;
    }

    navigation.navigate('AddCard');
  };

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Тапсырысты рәсімдеу</Heading>

      <Text style={s.label}>Жеткізу мекенжайы</Text>
      <TextInput
        style={s.input}
        placeholder="Мекенжайыңызды енгізіңіз"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={s.label}>Телефон нөмірі</Text>
      <TextInput
        style={s.input}
        placeholder="+7 7XX XXX XX XX"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <Text style={s.summary}>Тапсырыс сомасы</Text>
      <Text style={s.total}>{total.toLocaleString('kk-KZ')} ₸</Text>
      <Text style={s.note}>Жеткізу құны тапсырысты растау кезінде нақтыланады.</Text>

      <PrimaryButton title="Төлемге өту" onPress={submit} />
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  label: { color: COLORS.dark, fontWeight: '600', marginBottom: 8, marginTop: 18 },
  input: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border, borderRadius: 12, padding: 15 },
  summary: { color: COLORS.dark, marginTop: 30, fontSize: 16 },
  total: { color: COLORS.green, fontSize: 25, fontWeight: 'bold', marginTop: 8 },
  note: { color: COLORS.gray, marginTop: 10, lineHeight: 21 },
});