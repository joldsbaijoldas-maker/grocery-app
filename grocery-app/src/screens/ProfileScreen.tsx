import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Page, Heading, COLORS } from '../components/ShopUI';

export default function ProfileScreen({ navigation }: any) {
  const menu = [
    { title: '🛒 Менің себетім', screen: 'Cart' },
    { title: '❤️ Таңдаулылар', screen: 'Favorite' },
    { title: '🧺 Тауарлар каталогы', screen: 'Explore' },
    { title: '⚙️ Баптаулар', screen: 'Settings' },
  ];

  return (
    <Page>
      <Text style={s.back} onPress={() => navigation.goBack()}>← Артқа</Text>
      <Heading>Менің профилім</Heading>

      <View style={s.profile}>
        <Text style={s.avatar}>👤</Text>
        <Text style={s.name}>Қолданушы</Text>
        <Text style={s.email}>FreshMart пайдаланушысы</Text>
      </View>

      {menu.map(item => (
        <TouchableOpacity
          key={item.screen}
          style={s.menu}
          onPress={() => navigation.navigate(item.screen)}
        >
          <Text style={s.menuText}>{item.title}</Text>
          <Text style={s.arrow}>›</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={s.logout}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={s.logoutText}>Шығу</Text>
      </TouchableOpacity>
    </Page>
  );
}

const s = StyleSheet.create({
  back: { color: COLORS.green, marginBottom: 20 },
  profile: { alignItems: 'center', padding: 25, backgroundColor: COLORS.white, borderRadius: 18, marginBottom: 22 },
  avatar: { fontSize: 55, backgroundColor: '#EAF4EA', padding: 15, borderRadius: 50 },
  name: { fontSize: 20, fontWeight: 'bold', color: COLORS.dark, marginTop: 12 },
  email: { color: COLORS.gray, marginTop: 5 },
  menu: { flexDirection: 'row', justifyContent: 'space-between', padding: 18, backgroundColor: COLORS.white, borderRadius: 12, marginBottom: 10 },
  menuText: { color: COLORS.dark, fontSize: 15 },
  arrow: { color: COLORS.gray, fontSize: 22 },
  logout: { padding: 16, alignItems: 'center', marginTop: 15 },
  logoutText: { color: COLORS.red, fontWeight: 'bold', fontSize: 16 },
});