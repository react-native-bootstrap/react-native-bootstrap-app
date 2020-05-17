import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  ViewPropTypes,
} from 'react-native';
import { ThemeProvider, Alert } from 'react-native-bootstrap';

const App = () => {
  const [alert, showAlert] = useState(true);
  return (
    <ThemeProvider>
      <ScrollView>
        <View style={{ padding: 8 }}>
          {[
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
          ))}
          <Alert
            title="Heading"
            containerStyle={{ marginBottom: 8 }}
            message={`This is a primary alert—check it out!`}
          />
          {alert ? (
            <Alert
              dismissible
              title="Dismissible Alert"
              containerStyle={{ marginBottom: 8 }}
              onClose={() => showAlert(false)}
              message={`This is a primary alert—check it out!`}
            />
          ) : (
              <Button title="Show Alert" onPress={() => showAlert(true)} />
            )}
        </View>
      </ScrollView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
