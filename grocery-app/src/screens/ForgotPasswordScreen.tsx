import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Page, Heading, PrimaryButton, COLORS } from '../components/ShopUI';

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  const send = () => {
    if (!email.trim()) {
      Alert.alert('Ескерту', 'Электрондық поштаңызды енгізіңіз');
      return;
    }
    navigation.navigate('Verification', { email });
  };

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Құпиясөзді қалпына келтіру</Heading>
      <Text style={s.info}>
        Электрондық поштаңызды енгізіңіз. Растау экранына өтесіз.
      </Text>
      <TextInput
        style={s.input}
        placeholder="Электрондық пошта"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <PrimaryButton title="Жалғастыру" onPress={send} />
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 35 },
  info: { color: COLORS.gray, lineHeight: 23, marginBottom: 25 },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
  },
});