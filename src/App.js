import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import EditItemView from './components/EditItemView';
import ItemView from './components/ItemView';
import ListView from './components/ListView';

class App extends Component {
  constructor(props) {
    super(props);

    this.addRecipe = this.addRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.editRecipe = this.editRecipe.bind(this);

    const recipes = JSON.parse(localStorage.getItem('_username_recipes'));
    this.state = { recipes: (recipes || []) };
  }
  addRecipe(recipe) {
    recipe.id = this.getUniqueId();
    const recipes = this.state.recipes;
    recipes.push(recipe);
    this.setState({ recipes });
    localStorage.setItem('_username_recipes', JSON.stringify(this.state.recipes));
  }
  deleteRecipe(recipe) {
    const id = recipe.id;
    const recipes = this.state.recipes;
    const index = recipes.indexOf(recipes.find((val) => val.id === id));
    recipes.splice(index, 1);
    this.setState({ recipes });
    localStorage.setItem('_username_recipes', JSON.stringify(this.state.recipes));
  }
  editRecipe(recipe) {
    const id = recipe.id;
    const recipes = this.state.recipes;
    const index = recipes.indexOf(recipes.find((val) => val.id === id));
    recipes.splice(index, 1, recipe);
    this.setState({ recipes });
    localStorage.setItem('_username_recipes', JSON.stringify(this.state.recipes));
  }
  getUniqueId() {
    if(this.uniqueId) {
      return this.uniqueId++;
    } else {
      this.uniqueId = this.state.recipes.reduce((acc, val) => {
        return Math.max(val.id, acc);
      }, 0);
      this.uniqueId++;
    }
    return this.uniqueId++;
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/recipes/new/'
            component={(props) => <EditItemView {...props}
                                                isNew={true}
                                                add={this.addRecipe}
                                                recipes={this.state.recipes}/>} />
          <Route path='/recipes/edit/:id/'
            component={(props) => <EditItemView {...props}
                                                add={this.editRecipe}
                                                recipes={this.state.recipes}/>}
          />
          <Route path='/recipes/:id'
            component={(props) => <ItemView {...props}
                                            delete={this.deleteRecipe}
                                            edit={this.editRecipe}
                                            recipes={this.state.recipes}/>} />
          <Route path='/'
            component={(props) => <ListView {...props}
                                            delete={this.deleteRecipe}
                                            recipes={this.state.recipes}/>} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
