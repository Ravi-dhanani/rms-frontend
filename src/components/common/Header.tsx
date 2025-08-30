// src/components/Header.tsx
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { default as React, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.container}>
      {!showSearch && (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      )}

      {showSearch ? (
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchInput}
          autoFocus
        />
      ) : (
        <Appbar.Content title="Home" titleStyle={styles.title} />
      )}

      {showSearch ? (
        <Appbar.Action
          icon="close"
          onPress={() => {
            setShowSearch(false);
            setSearchQuery('');
          }}
          color="white"
        />
      ) : (
        <>
          <Appbar.Action
            icon="magnify"
            onPress={() => setShowSearch(true)}
            color="white"
          />
          <Appbar.Action icon="bell" color="white" />
        </>
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0098FF',
    height: 80,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});

export default Header;
