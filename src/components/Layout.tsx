import React from 'react';
import { View } from 'react-native';

function Layout(props: {children: React.ReactNode}) {
  return (
    <View>{props.children}</View>
  );
}

export default Layout;