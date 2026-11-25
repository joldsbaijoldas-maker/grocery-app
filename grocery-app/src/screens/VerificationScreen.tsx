
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

import { useShop } from '../context/ShopContext';

export default function VerificationScreen({
  navigation,
  route,
}: any) {
  const [code, setCode] = useState('');

  const { setUser } = useShop();

  const verify = () => {
    if (code.trim().length < 4) {
      Alert.alert(
        'Ескерту',
        'Растау кодын енгізіңіз'
      );
      return;
    }

    const name = route.params?.name || '';
    const email = route.params?.email || '';

    if (!name || !email) {
      Alert.alert(
        'Қате',
        'Тіркелу мәліметтері табылмады'
      );
      return;
    }

    setUser(name, email);

    Alert.alert(
      'Дайын',
      'Тіркелу аяқталды!'
    );

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

      <Heading>Растау</Heading>

      <Text style={s.info}>
        {route.params?.email || 'Электрондық поштаңыз'}
        {' '}мекенжайына келген кодты енгізіңіз.
      </Text>

      <TextInput
        style={s.input}
        placeholder="Растау коды"
        value={code}
        onChangeText={setCode}
        keyboardType="number-pad"
        maxLength={6}
      />

      <PrimaryButton
        title="Растау"
        onPress={verify}
      />
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
    lineHeight: 23,
    marginBottom: 25,
  },
  input: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
    textAlign: 'center',
    fontSize: 20,
    letterSpacing: 5,
  },
});
