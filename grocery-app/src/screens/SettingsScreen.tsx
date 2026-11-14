import React, { useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import { Page, Heading, COLORS } from '../components/ShopUI';

export default function SettingsScreen({ navigation }: any) {
  const [notifications, setNotifications] = useState(true);
  const [offers, setOffers] = useState(false);

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Баптаулар ⚙️</Heading>

      <View style={s.row}>
        <Text style={s.label}>Хабарландырулар</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ true: COLORS.green }}
        />
      </View>

      <View style={s.row}>
        <Text style={s.label}>Жеңілдіктер туралы хабарлау</Text>
        <Switch
          value={offers}
          onValueChange={setOffers}
          trackColor={{ true: COLORS.green }}
        />
      </View>

      <View style={s.about}>
        <Text style={s.aboutTitle}>FreshMart</Text>
        <Text style={s.aboutText}>Нұсқасы: 1.0.0</Text>
        <Text style={s.aboutText}>Балғын өнімдер — әр үйге!</Text>
      </View>
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: COLORS.white, padding: 17, borderRadius: 13, marginBottom: 12 },
  label: { color: COLORS.dark, flex: 1, fontSize: 15 },
  about: { marginTop: 35, padding: 20, backgroundColor: COLORS.white, borderRadius: 15 },
  aboutTitle: { fontSize: 20, fontWeight: 'bold', color: COLORS.green, marginBottom: 10 },
  aboutText: { color: COLORS.gray, marginTop: 5 },
});