import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
  Text,
} from 'react-native';
import { supabase } from '../supabaseClient';

const { width } = Dimensions.get('window');

const BannerCarousel = () => {
  const [images, setImages] = useState([]);
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  // Hardcoded email and password for sign-in
  const email = '12defence2005@gmail.com';
  const password = '123456';

  // Function to sign in with hardcoded credentials
  const signInWithEmailAndPassword = async () => {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      console.error('Error signing in:', error.message);
    } else {
      console.log('Signed in as:', user.email);
    }
  };

  const fetchImagesFromStorage = async () => {
    const { data, error } = await supabase.storage.from('foodapp').list();
    if (error) {
      console.error('Error listing images:', error);
      return;
    }
    console.log('Fetched images data:', data); // Log data to see if it's correctly fetched
    
    const urls = data
      .filter((item) => item.name.match(/\.(jpg|jpeg|png|webp)$/i))
      .map((item) => {
        const { data: urlData } = supabase.storage
          .from('foodapp')
          .getPublicUrl(item.name);
        console.log('URL:', urlData.publicUrl); // Log the generated URL
        return urlData.publicUrl;
      });
    
    setImages(urls);
  };

  useEffect(() => {
    signInWithEmailAndPassword(); // Sign in when the component loads
    fetchImagesFromStorage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length === 0) return;
      currentIndex.current = (currentIndex.current + 1) % images.length;
      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <View>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.banner}>
            <Image
              source={{ uri: item }}
              style={styles.bannerImage}
              resizeMode="cover"
              onError={() => console.warn('Failed to load:', item)}
            />
            <View style={styles.bannerContent}>
              <TouchableOpacity style={styles.orderNow}>
                <Text style={{ color: 'yellow', fontWeight: 'bold' }}>Order Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [6, 20, 6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={index} style={[styles.dot, { width: dotWidth }]} />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: width-25,
    height: 180,
    borderRadius: 16,
    marginBottom: 16,
    marginRight: 12,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  orderNow: {
    backgroundColor: 'black',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    alignSelf: 'flex-end',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -12,
    marginBottom: 8,
  },
  dot: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF6B00',
    marginHorizontal: 4,
  },
});

export default BannerCarousel;
