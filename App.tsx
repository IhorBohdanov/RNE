import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import About from './src/pages/About';
import Home from './src/pages/Home';
import Layout from './src/pages/components/Layout';
import { Platform } from 'react-native';

const App = () => {
  return (
    <NativeRouter>
      <Layout>
        <View style={styles.nav}>
          <Link to="/" style={styles.navItem}>
            <Text style={styles.navItemText}>Home</Text>
          </Link>

          <Link
            to="/about"
            style={styles.navItem}>
            <Text style={styles.navItemText}>About</Text>
          </Link>
        </View>

        <View style={styles.page}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </View>
      </Layout>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: (Platform.OS === 'web') ? 'column' : 'row',
    backgroundColor: '#eee',
  },
  navItem: {
    backgroundColor: '#eee',
    flex: (Platform.OS === 'web') ? undefined : 1,
    alignItems: 'center',
    padding: 10,
  },
  navItemText: {
    color: '#000',
  },
  page: {
    padding: 10,
  }
});

export default App;