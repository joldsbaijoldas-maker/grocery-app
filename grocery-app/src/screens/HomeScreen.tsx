import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { Page, Heading, COLORS } from '../components/ShopUI';
import { useShop } from '../context/ShopContext';
import { getProducts } from '../services/productApi';

export default function HomeScreen({ navigation }: any) {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { addToCart, toggleFavorite, isFavorite, cart, favorites } = useShop();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await getProducts();
      setProducts(data);
    } catch (e) {
      setError('Тауарларды жүктеу мүмкін болмады. Интернетті тексеріңіз.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>Қош келдіңіз!</Text>
            <Text style={styles.logo}>FreshMart 🛒</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.profile}>👤</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.bannerTitle}>Күн сайын балғын өнімдер!</Text>
        <Text style={styles.bannerText}>
          Сүйікті тауарларыңызды оңай таңдаңыз.
        </Text>

        <TextInput
          style={styles.search}
          placeholder="🔍 Тауар іздеу..."
          value={search}
          onChangeText={setSearch}
        />

        <View style={styles.menu}>
          <Text onPress={() => navigation.navigate('Explore')}>🧺 Каталог</Text>
          <Text onPress={() => navigation.navigate('Favorite')}>
            ❤️ Таңдаулы ({favorites.length})
          </Text>
          <Text onPress={() => navigation.navigate('Cart')}>
            🛒 Себет ({cart.length})
          </Text>
        </View>

        <Heading>Танымал тауарлар</Heading>

        {loading && (
          <ActivityIndicator size="large" color={COLORS.green} />
        )}

        {!!error && (
          <View>
            <Text style={styles.error}>{error}</Text>
            <TouchableOpacity onPress={loadProducts}>
              <Text style={styles.retry}>Қайта жүктеу</Text>
            </TouchableOpacity>
          </View>
        )}

        {!loading && !error && (
          <View style={styles.grid}>
            {filteredProducts.map(product => (
              <View key={product.id} style={styles.card}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', {
                      productId: product.id,
                      apiProduct: product,
                    })
                  }
                >
                  <Image
                    source={{ uri: product.thumbnail }}
                    style={styles.image}
                    resizeMode="contain"
                  />

                  <Text style={styles.name} numberOfLines={2}>
                    {product.title}
                  </Text>

                  <Text style={styles.price}>
                    {Math.round(product.price * 500).toLocaleString('kk-KZ')} ₸
                  </Text>
                </TouchableOpacity>

                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() => toggleFavorite({
                      id: product.id,
                      name: product.title,
                      category: product.category,
                      price: Math.round(product.price * 500),
                      unit: '1 дана',
                      emoji: '🛍️',
                      description: product.description,
                    })}
                  >
                    <Text style={{ fontSize: 20 }}>
                      {isFavorite(product.id) ? '❤️' : '🤍'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => addToCart({
                      id: product.id,
                      name: product.title,
                      category: product.category,
                      price: Math.round(product.price * 500),
                      unit: '1 дана',
                      emoji: '🛍️',
                      description: product.description,
                    })}
                  >
                    <Text style={styles.addText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}

        {!loading && filteredProducts.length === 0 && !error && (
          <Text style={styles.empty}>Тауар табылмады</Text>
        )}
      </ScrollView>
    </Page>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  small: { color: COLORS.gray },
  logo: { fontSize: 25, fontWeight: 'bold', color: COLORS.green },
  profile: { fontSize: 28 },
  bannerTitle: { fontSize: 22, fontWeight: 'bold', color: COLORS.dark },
  bannerText: { color: COLORS.gray, marginTop: 7, marginBottom: 17 },
  search: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 13,
    marginBottom: 17,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 12,
    marginBottom: 14,
  },
  image: { width: '100%', height: 115 },
  name: { color: COLORS.dark, fontWeight: 'bold', marginTop: 8, minHeight: 40 },
  price: {
    color: COLORS.green,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 7,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  addButton: {
    backgroundColor: COLORS.green,
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: { color: COLORS.white, fontSize: 24 },
  error: { color: 'red', textAlign: 'center', margin: 15 },
  retry: { color: COLORS.green, textAlign: 'center', margin: 10 },
  empty: { textAlign: 'center', color: COLORS.gray, marginTop: 25 },
});