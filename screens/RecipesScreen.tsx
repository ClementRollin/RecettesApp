import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type RecipesScreenNavigationProp = NavigationProp<RootStackParamList, 'Recipes'>;

interface Recipe {
  id: number;
  title: string;
  image: string;
}

const RecipesScreen = ({ navigation }: { navigation: RecipesScreenNavigationProp }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
      const data = require('./../recipes.json');
    
      if (data.results) {
        setRecipes(data.results.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
        })));
      }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.innerContainer}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <TouchableOpacity onPress={() => navigation.navigate('RecipeDetails', { recipe: item })}>
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff8e1',
  },
  text: {
    textAlign: 'left',
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  innerContainer: {
    width: 150, // Définissez la largeur ici
  },
  itemText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '100%',
  },
  itemImage: {
    width: '100%',
    height: 100,
  },
  flatList: {
    width: '100%',
    height: '100%',
    margin: 10,
  },
});

export default RecipesScreen;