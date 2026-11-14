
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import {
  Page,
  Heading,
  PrimaryButton,
  COLORS,
} from '../components/ShopUI';

export default function SignupScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      Alert.alert('Ескерту', 'Барлық жолды толтырыңыз');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Ескерту', 'Электрондық пошта дұрыс емес');
      return;
    }

    navigation.navigate('Verification', {
      email: email.trim(),
      name: name.trim(),
    });
  };

  return (
    <Page>
      <Text
        style={s.back}
        onPress={() => navigation.goBack()}
      >
        ← Артқа
      </Text>

      <Heading>Тіркелу</Heading>

      <Text style={s.info}>
        Жаңа аккаунт жасаңыз
      </Text>

      <Text style={s.label}>Аты-жөніңіз</Text>

      <TextInput
        style={s.input}
        placeholder="Аты-жөніңіз"
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
      />

      <Text style={s.label}>Электрондық пошта</Text>

      <TextInput
        style={s.input}
        placeholder="example@mail.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={s.label}>Құпиясөз</Text>

      <TextInput
        style={s.input}
        placeholder="Құпиясөз ойлап табыңыз"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <PrimaryButton
        title="Тіркелу"
        onPress={signup}
      />

      <Text style={s.bottom}>
        Аккаунтыңыз бар ма?{' '}
        <Text
          style={s.green}
          onPress={() => navigation.navigate('Login')}
        >
          Кіру
        </Text>
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
    marginBottom: 8,
    marginTop: 14,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
  },
  bottom: {
    textAlign: 'center',
    marginTop: 25,
    color: COLORS.gray,
  },
  green: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
});
