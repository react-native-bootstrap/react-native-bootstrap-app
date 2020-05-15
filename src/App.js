import React from 'react';
import { ScrollView, StyleSheet, View, Text, ViewPropTypes } from 'react-native';
import { ThemeProvider, Alert } from 'react-native-bootstrap';

const App = () => {
  return (
    <ThemeProvider>
      <View>
        {
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].map((variant, idx) => (
            <Alert
              key={idx}
              variant={variant}
              containerStyle={{ marginBottom: 8 }}
              message={`This is a ${variant} alert—check it out!`}
            />
          ))
        }
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
