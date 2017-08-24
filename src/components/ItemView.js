import { Link } from 'react-router-dom';
import React from 'react';

import ItemDescription from './ItemDescription';
import ItemIngredients from './ItemIngredients';
import ItemDirections from './ItemDirections';

export default class ItemView extends React.Component {
  render() {
    const recipe = this.props.recipes.filter(val => val.id === parseInt(this.props.match.params.id))[0];
    console.log(recipe);
    return (
      <div className='recipe-container'>
        <div className='section'>
          <h2 className='recipe-header'>
            {recipe.name}
            <span className='recipe-subheader'>{recipe.category}</span>
          </h2>
          <div className='recipe-actions'>
            <Link className='recipe-action edit' to={`/recipes/edit/${recipe.id}`}>
              Edit
            </Link>
            <span className='recipe-action delete'
              onClick={() => {
                this.props.delete(recipe);
                this.props.history.push('/');
              }}>
              Delete
            </span>
          </div>
        </div>
        <div className='recipe-info'>
          <ItemDescription data={recipe.description} />
          <ItemIngredients data={recipe.ingredients} />
          <ItemDirections data={recipe.directions} />
        </div>
        <div className='section'>
          <Link className='recipe-action back' to='/'>Back</Link>
        </div>
      </div>
    );

  }
}
