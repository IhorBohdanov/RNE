import React from 'react';
import { View, StyleSheet } from 'react-native';

function Layout(props: {children: React.ReactNode}) {
  return (
    <View style={styles.container}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});

export default Layout;