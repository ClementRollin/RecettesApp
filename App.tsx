import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import MealPlanningScreen from './screens/MealPlanningScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';

type Recipe = {
  id: number;
  title: string;
  image: string;
};

export type RootStackParamList = {
  Home: undefined;
  Recipes: undefined;
  MealPlanning: undefined;
  RecipeDetails: { recipe: Recipe };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Accueil' }} />
        <Stack.Screen name="Recipes" component={RecipesScreen} options={{ title: 'Recettes' }} />
        <Stack.Screen name="MealPlanning" component={MealPlanningScreen} options={{ title: 'Planification des Repas' }} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} options={{ title: 'Détails de la Recette' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;