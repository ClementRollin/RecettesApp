import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealPlanningScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Planification des repas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default MealPlanningScreen;