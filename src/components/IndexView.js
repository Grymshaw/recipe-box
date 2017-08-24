import React from 'react';

import ListItem from './ListItem';

export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
        recipes: [
          {
            name: 'Recipe name',
            category: 'Breakfast',
            img: 'image/path/here',
            description: 'This will be the description of your very first recipe. LLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolororem ipsum dolor',
            ingredients: [
              {
                item: 'ingredient name',
                quantity: 0.25,
                unit: 'cups'
              },
              {
                item: 'second ingredient name',
                quantity: 0.25,
                unit: 'teaspoons'
              }
            ],
            directions: [
              'This is the first step',
              'This is the second step'
            ]
          },
          {
            name: 'Recipe name',
            category: 'Breakfast',
            img: 'image/path/here',
            description: 'This will be the description of your very first recipe. LLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolororem ipsum dolor',
            ingredients: [
              {
                item: 'ingredient name',
                quantity: 0.25,
                unit: 'cups'
              },
              {
                item: 'second ingredient name',
                quantity: 0.25,
                unit: 'teaspoons'
              }
            ],
            directions: [
              'This is the first step',
              'This is the second step'
            ]
          }
        ]
      });
  }
  addRecipe() {

  }
  render() {
    return (
      <div className='container'>
        <div className='header-bar'>
          <h1 className='list-header'>Recipe Box</h1>
          <button className='button'>+</button>
        </div>
        <div className='recipe-list'>
          {this.state.recipes.map((recipe, i) => {
            return <ListItem key={i}
              index={i}
              recipe={recipe} />
          })}
        </div>
      </div>
    );
  }
}
