import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Page, Heading, PrimaryButton, COLORS } from '../components/ShopUI';

export default function AddCardScreen({ navigation }: any) {
  const [method, setMethod] = useState('Қолма-қол төлеу');

  const pay = () => {
    Alert.alert('Тапсырыс қабылданды', 'Тапсырысыңыз сәтті рәсімделді!');
    navigation.navigate('OrderSuccess');
  };

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Төлем әдісі</Heading>
      <Text style={s.info}>Өзіңізге ыңғайлы төлем түрін таңдаңыз.</Text>

      {['Қолма-қол төлеу', 'Жеткізген кезде картамен төлеу', 'Онлайн төлем (демо)'].map(item => (
        <TouchableOpacity
          key={item}
          style={[s.option, method === item && s.selected]}
          onPress={() => setMethod(item)}
        >
          <Text style={s.optionText}>{method === item ? '🔘' : '⚪'}  {item}</Text>
        </TouchableOpacity>
      ))}

      <PrimaryButton title="Тапсырысты растау" onPress={pay} />
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  info: { color: COLORS.gray, marginBottom: 25 },
  option: { backgroundColor: COLORS.white, borderWidth: 1, borderColor: COLORS.border, padding: 18, borderRadius: 13, marginBottom: 13 },
  selected: { borderColor: COLORS.green, backgroundColor: '#EAF5EC' },
  optionText: { color: COLORS.dark, fontSize: 15 },
});