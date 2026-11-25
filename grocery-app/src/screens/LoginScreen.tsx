
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

import {
  Page,
  Heading,
  PrimaryButton,
  COLORS,
} from '../components/ShopUI';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Ескерту', 'Барлық жолды толтырыңыз');
      return;
    }

    navigation.replace('MainTabs');
  };

  return (
    <Page>
      <Text
        style={s.back}
        onPress={() => navigation.goBack()}
      >
        ← Артқа
      </Text>

      <Heading>Қош келдіңіз!</Heading>

      <Text style={s.info}>
        Аккаунтыңызға кіріңіз
      </Text>

      <Text style={s.label}>
        Электрондық пошта
      </Text>

      <TextInput
        style={s.input}
        placeholder="example@mail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={s.label}>
        Құпиясөз
      </Text>

      <TextInput
        style={s.input}
        placeholder="Құпиясөз"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text
        style={s.forgot}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        Құпиясөзді ұмыттыңыз ба?
      </Text>

      <PrimaryButton
        title="Кіру"
        onPress={login}
      />

      <Text
        style={s.bottom}
        onPress={() => navigation.navigate('Signup')}
      >
        Аккаунтыңыз жоқ па? Тіркелу
      </Text>
    </Page>
  );
}

const s = StyleSheet.create({
  back: {
    color: COLORS.green,
    marginBottom: 35,
  },
  info: {
    color: COLORS.gray,
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    color: COLORS.dark,
    marginTop: 15,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
  },
  forgot: {
    color: COLORS.green,
    textAlign: 'right',
    marginTop: 15,
  },
  bottom: {
    color: COLORS.green,
    textAlign: 'center',
    marginTop: 25,
  },
});
