import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {
  Search,
  Mic,
  Bell,
  ShoppingCart,
  User,
  Home,
  MapPin,
} from 'lucide-react-native';
import BannerCarousel from './components/BannerCarousel';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f7f4" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.location}>
          <MapPin color="#FF6B00" size={22} />
          Albuquerque, NM ▼
        </Text>
        <Bell color="black" size={22} />
      </View>
      <View style={styles.searchBar}>
        <Search color="#000000" size={18} />
        <TextInput
          placeholder="Search delivo™"
          style={styles.searchInput}
          placeholderTextColor="#000"
        />
        <View
          style={{backgroundColor: '#f5cdb0', padding: 12, borderRadius: 30}}>
          <Mic color="#FF6B00" size={18} />
        </View>
      </View>
      <BannerCarousel />

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{flexDirection: 'row', marginBottom: 16}}>
        {[
          {
            name: 'Burger',
            image:
              'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=',
          },
          {
            name: 'Pizza',
            image:
              'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
          },
          {
            name: 'Salad',
            image:
              'https://cdn1.foodviva.com/static-content/food-images/salad-recipes/vegetable-salad-recipe/vegetable-salad-recipe.jpg',
          },
          {
            name: 'Sushi',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bFr-1tA3cq420k7FhY3tUsonP8Ijij3MmA&s',
          },
          {
            name: 'Tacos',
            image:
              'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg',
          },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{alignItems: 'center', marginRight: 16,marginTop:10}}>
            <View
              style={{
                width: 70,
                height: 70,
                backgroundColor: index === 0 ? '#FF6B00' : 'black',
                borderRadius: 20,
                marginBottom: 6,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 35, height: 35, borderRadius: 15}}
                resizeMode="cover"
              />
            </View>
            <Text
              style={{
                color: index === 0 ? '#FF6B00' : 'black',
                fontSize: 12,
                fontWeight: index === 0 ? 'bold' : 'normal',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Top Picks */}
      <View style={styles.topPicksHeader}>
        <Text style={styles.sectionTitle}>Top picks on delivo™</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      {/* Food Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodCard}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?semt=ais_hybrid&w=740',
            }}
            style={styles.foodImage}
          />
          <Text style={styles.foodName}>Cheeseburger</Text>
          <Text style={styles.foodDetails}>Burger Haven 4.8 ⭐ (335+)</Text>
          <Text style={styles.foodPrice}>$8.99</Text>
        </View>
        <View style={styles.foodCard}>
          <Image
            source={{uri: 'https://i.imgur.com/tGbaZCY.jpg'}}
            style={styles.foodImage}
          />
          <Text style={styles.foodName}>BBQ Bacon</Text>
          <Text style={styles.foodDetails}>Burger Haven • 4.6 ⭐</Text>
          <Text style={styles.foodPrice}>$9.49</Text>
        </View>
      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        {/* Explore Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#FF6B00',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 30,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ShoppingCart size={20} color="#f7f6f5" />
            <Text style={{color: '#f7f6f5', marginLeft: 6}}>Explore</Text>
          </View>
        </TouchableOpacity>

        {/* Home Icon Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 30,
            padding: 12,
            marginHorizontal: 6,
          }}>
          <Home size={20} color="#FF6B00" />
        </TouchableOpacity>

        {/* Cart Icon Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 30,
            padding: 12,
            marginHorizontal: 6,
          }}>
          <ShoppingCart size={20} color="#FF6B00" />
        </TouchableOpacity>

        {/* User Icon Button */}
        <TouchableOpacity
          style={{
            backgroundColor: '#fff',
            borderRadius: 30,
            padding: 12,
            marginHorizontal: 6,
          }}>
          <User size={20} color="#FF6B00" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {padding: 26, backgroundColor: '#f2f7f4'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  location: {fontSize: 16, color: 'black'},

  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
    borderRadius: 15,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  searchInput: {flex: 1, marginHorizontal: 8},
  banner: {
    backgroundColor: '#FF6B00',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  orderNow: {
    backgroundColor: '#222',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  categories: {flexDirection: 'row', marginBottom: 16},
  categoryItem: {alignItems: 'center', marginRight: 16},
  categoryText: {color: '#999', fontSize: 12},
  activeCategory: {color: '#FF6B00', fontWeight: 'bold'},
  topPicksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  categoryIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  sectionTitle: {fontWeight: 'bold', fontSize: 16, color: 'black'},
  seeAll: {
    color: 'black',
    paddingHorizontal: 10,
    backgroundColor: 'yellow',
    borderRadius: 10,
  },
  foodCard: {
    width: 240,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 26,
    overflow: 'hidden',
  },
  foodImage: {width: '100%', height: 140, marginBottom: 8},
  foodName: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10,
    color: 'black',
  },
  foodDetails: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    paddingHorizontal: 10,
  },
  foodPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 10,
    color: 'white',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    borderRadius: 30,
    margin: 30,

    padding: 5,
  },
});

export default HomeScreen;
