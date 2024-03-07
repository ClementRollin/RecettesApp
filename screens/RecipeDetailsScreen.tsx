import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type RecipeDetailsScreenRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

const RecipeDetailsScreen = ({ route, navigation }: { route: RecipeDetailsScreenRouteProp, navigation: any }) => {
    const { recipe } = route.params;

    const addToMealPlanning = () => {
        navigation.navigate('MealPlanning', { recipe: recipe });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{recipe.title}</Text>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={addToMealPlanning}>
                <Text style={styles.buttonText}>Ajouter aux favoris</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff8e1',
    },
    title: {
      margin: 10,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 30,
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 50,
    },
    button: {
        backgroundColor: '#FFD700',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
    },
});

export default RecipeDetailsScreen;