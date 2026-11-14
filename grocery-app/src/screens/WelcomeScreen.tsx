import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Page, PrimaryButton, COLORS } from '../components/ShopUI';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <Page style={s.container}>
      <View style={s.logo}>
        <Text style={{ fontSize: 75 }}>🛒</Text>
        <Text style={s.name}>FreshMart</Text>
        <Text style={s.subtitle}>Балғын өнімдер — әр үйге!</Text>
      </View>

      <View>
        <PrimaryButton
          title="Бастау"
          onPress={() => navigation.navigate('Login')}
        />
        <Text style={s.link} onPress={() => navigation.navigate('Signup')}>
          Аккаунтыңыз жоқ па? Тіркелу
        </Text>
      </View>
    </Page>
  );
}

const s = StyleSheet.create({
  container: { justifyContent: 'space-between', paddingVertical: 65 },
  logo: { alignItems: 'center', marginTop: 100 },
  name: { fontSize: 38, fontWeight: 'bold', color: COLORS.green },
  subtitle: { fontSize: 16, color: COLORS.gray, marginTop: 10 },
  link: { textAlign: 'center', color: COLORS.green, marginTop: 22 },
});